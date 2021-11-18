import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div className="logo">
      <h1>My Site</h1>
    </div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/listing">Listing</Link>
    </nav>
  )
}

export default Navbar
