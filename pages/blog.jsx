import Intro from "../components/intro"
import Container from "../components/container"
import Layout from "../components/layout"
import PostCards from "../components/postCards"
import { getAllPosts } from "../lib/api"

export async function getStaticProps(context) {
  const posts = getAllPosts(['slug', 'title', 'summary', 'category'])
  return {
    props: {
      posts
    }, 
  }
}


export default function Blog({ posts }) {
  let categories = {}
  for (let post of posts) {
    if (categories[post.category]) {
      categories[post.category].push(post) 
    } else {
      categories[post.category] = [post]
    }
  }

  return (
    <>
      <Layout>
        <Container className='flex center'>
          <Intro currentTab={"Blog"} />
          {Object.keys(categories).map((category, i) => {
            console.log(category)
            return (
              <div className="mt-4" key={i}>
                <h3 className="mx-auto text-center text-xl font-bold">{category}</h3>
                <PostCards posts={categories[category]} />
              </div>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}