import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'

const WorkIntro = () => (
  <div>
    <h3>Work Accomplishments</h3>
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
    I encourage you to take a look at the blog section of this website. I reflect on my personal experiences openly, as well as discuss ideas for future work. It’s an open invitation for discussion and I’d love to hear from you.
    </p>
    <p>
      You can reach me on <a href="https://www.linkedin.com/in/zach-wunder/">LinkedIn</a> or by email at {'\u007a\u0061\u0063\u0068\u0077\u0075\u006e\u0064\u0065\u0072\u005b\u0061\u0074\u005d\u0067\u006d\u0061\u0069\u006c\u005b\u0064\u006f\u0074\u005d\u0063\u006f\u006d'}
    </p>
  </div>
)

const Passion = () => (
  <div>
    <p className="italic font-thin">
      Hi, my name is Zach Wunder. 
    </p>
    <p>
      I am internally motivated by the process of creation and strongly believe in the power of innovation to provide for humanity.  I’m inspired by far out ideas, and willing to accept a high-risk of failure in order to validate them. I believe there’s a large amount of inefficiencies that we accept as standard practice solely because they’re well-known.
    </p>
    <p>
      As a self-described generalist, I’m deeply interested in exploring the intersection between software and many other fields. I view my professional life as an experiment to see what this approach can accomplish, specifically in terms of making a positive impact on the world.
    </p>
    <p>
      I’m currently looking for an opportunity that can <a href="https://blog.samaltman.com/how-to-be-successful">make the rest of my resume look like a footnote, if successful.</a>
    </p>
  </div>
)

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Zach Wunder's Blog</title>
        </Head>
        <Container className='flex center'>
          <Intro currentTab='About' />
          <article className="prose-lg divide-slate-400/50 divide-y mx-auto max-w-prose flex flex-col mt-2 space-y-2">
            <Passion />
            <WorkIntro />
            <WritingCTA />
          </article>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
