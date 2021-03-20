import Head from 'next/head'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
        <>
        <Head>
        <title>Users List | About</title>
        <meta name="keywords" content="users"/>
        </Head>
        <div>
            <h1 className={styles.h2}>About</h1>
            <p className={styles.container}>This is the about page</p>
        </div>
        </>
     );
}
 
export default About