import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'

const WorkIntro = () => (
  <div>
    <p className='text-xl italic font-semibold mb-0'>Work Accomplishments</p>
    <p>
    I currently lead the Software Development team at Pod, first joining as a Full-Stack Engineer. Today, I navigate the challenges of building software as a team in a fast-paced startup environment, along with managing multiple AWS-based systems and making high-level technical decisions across the organization.
    </p>
    <p>
    Previously, I have worked as an iOS developer at Linksys, building an iOS native port of the Linksys mobile app. Before that, I interned at Belkin and Wemo building internal development tools.
    </p>
    <p>
    I also hold AWS certifications, both AWS Solutions Architect - Professional and AWS Developer - Associate. I specialize and take pride in designing technical solutions that leverage a deep understanding of the business use case.
    </p>
  </div>
)


const MeIntro = () => (
  <div>
    <p className="italic font-thin">
      Hi, my name is Zach Wunder. 
    </p>
    <p>
    At work, I'm a full-stack Software Engineer with experience leading teams in a startup environment. 
    </p>
    <p>
    Outside of work, I’ve always enjoyed creating things for myself. In the past, I’ve built an algorithmic trading platform, long-term financial planning software, a personal knowledge management application, and an ML application leveraging Sentence Transformers to discover common ideas on the web.
    </p>
    <p>
    I’m still interested in software, but I’m also expanding into other disciplines in order to build more real-world ideas. Right now I’m working on low cost, nearly fully automated and space-efficient horticulture. In the future, I want to integrate this, and more ideas that automate the local production of essentials, into building self-sustaining, multi-building properties.
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

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Zach Wunder's Blog</title>
        </Head>
        <Container className='flex center'>
          <Intro currentTab='About' />
          <article className="prose-lg divide-accent divide-y mx-auto max-w-prose flex flex-col mt-2 space-y-2">
            <MeIntro />
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
