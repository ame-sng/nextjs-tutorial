import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      <Image src="/tiger.png" width={120} height={120} />
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/listing">Listing</Link>
    </nav>
  )
}

export default Navbar
