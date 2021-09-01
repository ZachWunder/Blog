---
title: 'AWS Cognito Anti-Patterns #1: The Sub Value'
excerpt: "AWS Cognito offers incredibly cheap and scalable user authentication as a service. However, there's a number of problems that become apparent only after you begin using the service."
coverImage: '/assets/blog/cognito/trianglify.svg'
date: '2021-08-24T05:35:07.322Z'
author:
  name: Zach Wunder
ogImage:
  url: '/assets/blog/cognito/trianglify.svg'
---
AWS Cognito offers incredibly cheap and scalable user authentication as a service. But these benefits come at an unexpected cost: some features seem to run contrary to standard design patterns. One such anti-pattern occurs with *sub* values during user pool migration.

## Sub values typically act as user identifiers
In OAuth each user is assigned a *sub* value. This *sub* value is commonly treated as a unique identifier for a particular user. For example, a common pattern is to store user information in DynamoDB, using their *sub* value as the primary key.

To make absolutely clear this is a standard design pattern, note that even the official AWS Documentation advises using the *sub* value as the user's unique identifier:
- [Allow item-level access to DynamoDB based on Cognito ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_dynamodb_items.html)

### Cognito Autogeneration
Unlike many other services, in Cognito *sub* is an auto-generated UUID: you have **zero control** over its value.

### User pool migration is often mandatory

It's a common case in Cognito that in order to change a setting/configuration in your user pool, you have to migrate to a new user pool. This is even more annoying given Cognito's bad defaults, but you run into a far more serious problem if you try to migrate a user pool when you reference a user's *sub* values.

## The Problem with Autogeneration + Migration

### After migration users have all new *sub* values
Remember from before that you have no control over the *sub* values. You cannot specify the *sub* value when migrating your users to a new user pool. This means you have to deal with the consequences of **all new *sub* values for all of your users**.

## Solutions

### 1. Don't use Cognito.

### 2. Use *username* as the unique identifier.
If not otherwise specified, the *username* property of the user defaults to the *sub* value. However, it is possible to set this value at the time of user creation. You can generate a UUID on the client-side to be used as the *username*. You must then reference this *username* UUID instead of the *sub* UUID. Next, set email as a sign-in alias in the user pool.

**Drawbacks**  

Cognito now *no longer checks email for uniqueness*. Yes, that means you can now sign up for multiple accounts with the same email. You need to implement your own method of checking uniqueness. I've seen suggestions to scan the email in your user pool to check if it already 
exists, but this would likely be slow and scale poorly. The way I would do it is to create a DynamoDB (or other key-value store) table with the email as the primary key and the *username* as an attribute. You can then quickly check if the email already exists and serve an error to the user if it does.

### 3. Use the new *sub* value, change all references to old *sub* value.
This is a cleaner solution in the end. You can continue to use the *sub* value, you don't have a mismatched username and *sub* and you don't have to handle email uniqueness. However, based on how frequently a user's unique identifier is referenced, this is easier said than done. If you miss a source or skip a record, that data is now left hanging in the void and can severely break the experience for a user.

**Drawbacks**  

The complexity of changing all references to the original *sub* value will vary based on your architecture, scale etc. For small or early-stage projects, this might be pretty straightforward. If you're tracking millions/billions of records across multiple DB's and 
environments this is far more complex.

The largest drawback with this 'clean' solution is that you will have to repeat this process *every time you want to make changes to your user pool*.