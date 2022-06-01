import Intro from "../components/intro"
import Container from "../components/container"
import Layout from "../components/layout"
import PostCards from "../components/postCards"
import { getAllPosts } from "../lib/api"

export async function getStaticProps(context) {
  const posts = getAllPosts(['slug', 'title', 'summary'])
  return {
    props: {
      posts
    }, 
  }
}


export default function Blog({ posts }) {
  return (
    <>
      <Layout>
        <Container className='flex center'>
          <Intro currentTab={"Blog"} />
          <PostCards posts={posts} />
        </Container>
      </Layout>
    </>
  )
}