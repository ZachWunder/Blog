import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Zach's Blog</a>
      </Link>
    </h2>
  )
}
