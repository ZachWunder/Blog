import Link from 'next/link'
import Image from 'next/image'
import BackArrow from './backArrow.tsx'

export default function Header() {
  return (
    <div className="stroke-white h-6 mb-20 mt-8">
      <Link href="/blog">
        <BackArrow />
      </Link>
    </div>
  )
}
