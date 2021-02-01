import Head from 'next/head'
import Link from 'next/link'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page!</h1>
        <p className={styles.text}>salsjdlfjalskdjflajsldkfjaklsjdfljaks</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
