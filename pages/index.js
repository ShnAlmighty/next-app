import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Users List | Home</title>
        <meta name="keywords" content="users"/>
    </Head>
    <div className={styles.title}>
      <h1>Home Page</h1>
      <p className={styles.text}>This is the home page</p>
      <Link href="/users">
        <a className={styles.btn}>See Users</a>
      </Link>
    </div>
    </>
  )
}
