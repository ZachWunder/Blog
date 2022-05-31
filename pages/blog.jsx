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
    }, // will be passed to the page component as props
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

const WorkIntro = () => (
  <div>
    <p>
    I’m a self-taught Software Engineer by trade. I currently lead the Software Development team at Pod, first joining as a Full-Stack Engineer. Today, I navigate the challenges of building software as a team in a fast-paced startup environment, along with managing multiple AWS-based systems and making high-level technical decisions across the organization.
    </p>
    <p>
    Previously, I have worked as an iOS developer at Linksys, building an iOS native port of the Linksys mobile app. Before that, I interned at Belkin and Wemo building internal development tools.
    </p>
    <p>
    I also hold AWS certifications, both AWS Solutions Architect - Professional and AWS Developer - Associate. I specialize and take pride in designing technical solutions that leverage a deep understanding of the business use case.
    </p>
  </div>
)

const WritingCTA = () => (
  <div>
    <p>
    Please feel free to check out my writing, where I reflect on my personal experiences openly, as well as discuss ideas for future work. It’s an open invitation for discussion and I’d love to hear from you.
    </p>
  </div>
)

const ContactInfo = () => (
  <div>
    <p>
      You can reach me on <a href="https://www.linkedin.com/in/zach-wunder/">LinkedIn</a> or by email at {'\u007a\u0061\u0063\u0068\u0077\u0075\u006e\u0064\u0065\u0072\u005b\u0061\u0074\u005d\u0067\u006d\u0061\u0069\u006c\u005b\u0064\u006f\u0074\u005d\u0063\u006f\u006d'}
    </p>
  </div>
)

const Passion = () => (
  <div>
    <p>
      I have a demonstrated passion for software, but my ambitions extend far beyond it. I believe that our ability to innovate and build new tools is what uniquely distinguishes humanity and enables our success. My interest lies in innovation and invention’s that push our ability to provide for ourselves and others further.
    </p>
  </div>
)