import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
    <Head>
      <title>Listings | Home</title>
      <meta name="keywords" content="listings" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Homepage - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar malesuada risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis magna molestie, congue ipsum sed, interdum orci. Nulla elementum ante eget dictum porta. Vivamus eu faucibus neque, vel egestas massa. Donec sapien augue, rhoncus ornare augue quis, fringilla porttitor lacus.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar malesuada risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent quis magna molestie, congue ipsum sed, interdum orci. Nulla elementum ante eget dictum porta. Vivamus eu faucibus neque, vel egestas massa. Donec sapien augue, rhoncus ornare augue quis, fringilla porttitor lacus.</p>
      <Link href="/listing">
        <a className={styles.btn}>See All Listings</a>
      </Link>
    </div>
    </>
  )
}
