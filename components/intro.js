import Nav from '../components/nav'

export default function Intro({ currentTab }) {
  return (
    <section className="mt-8">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-center leading-tight">
        Zach Wunder
      </h1>
      <Nav currentTab={currentTab}/>      
    </section>
  )
}
