import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-light dark:text-dark">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Get in touch with me. 
          </h3>
          <div className="flex flex-col space-y-2 justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/ZachWunder"
              className="mx-3 bg-dark hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Github
            </a>
            <p
              className="mx-3 font-bold"
            >
              zachwunder@gmail.com
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}