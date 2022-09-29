import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl leading-tight mb-8 mt-8">
      <Link href="/blog">
        <a className="hover:underline">Zach Wunder</a>
      </Link>
    </h2>
  )
}
