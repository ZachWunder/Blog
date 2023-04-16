import { useRouter } from "next/router";
import { current } from "tailwindcss/colors";

const tabs = [
  { name: 'About', href: '/'},
  { name: 'Blog', href: '/blog'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const pushSite = (router, path) => {
  router.push(path)
}

export default function Nav({ currentTab }) {
  const router = useRouter()
  return (
    <div>
      <div className="">
        <nav className="mt-4 flex justify-center space-x-12 " aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className=' border-accent rounded-sm w-1/4 py-4 px-1 text-center border-2 font-bold text-medium no-underline'
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}