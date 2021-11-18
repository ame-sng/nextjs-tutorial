import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>Homepage - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar malesuada risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis magna molestie, congue ipsum sed, interdum orci. Nulla elementum ante eget dictum porta. Vivamus eu faucibus neque, vel egestas massa. Donec sapien augue, rhoncus ornare augue quis, fringilla porttitor lacus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar malesuada risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis magna molestie, congue ipsum sed, interdum orci. Nulla elementum ante eget dictum porta. Vivamus eu faucibus neque, vel egestas massa. Donec sapien augue, rhoncus ornare augue quis, fringilla porttitor lacus.</p>
      <Link href="/listing">
        <a>See All Listings</a>
      </Link>
    </div>
  )
}
