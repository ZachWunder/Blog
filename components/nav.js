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
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex justify-center" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.name === currentTab
                  ? 'border-darkPurple text-purple'
                  : 'border-dark dark:border-transparent dark:text-light hover:text-darkerPurple hover:border-darkerPurple text-dark',
                'w-1/4 py-4 px-1 text-center border-b-2 font-bold text-medium no-underline'
              )}
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