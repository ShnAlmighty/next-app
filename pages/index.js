import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
    </Head>
    <div className={styles.title}>
      <h1>Home Page</h1>
      <p className={styles.text}>This is the home page</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas</a>
      </Link>
    </div>
    </>
  )
}
