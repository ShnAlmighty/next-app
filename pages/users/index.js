import Link from 'next/link'
import styles from '../../styles/Users.module.css'
import Head from 'next/head'

export const getStaticProps = async() =>{

// const response = await fetch('https://jsonplaceholder.typicode.com/users');
const response = await fetch('http://localhost:3000/api/users/');
const data = await response.json();

return {
    props: {
        users: data
    }
};

}

const Ninjas = ({ users }) => {
    return (
        <>
        <Head>
        <title>Users List | List</title>
        <meta name="keywords" content="users"/>
        </Head>
        <div>
            <h1 className={styles.h2}>All Users</h1>
            {users.map((user)=>(
                <Link key={user.id} href={`/users/${user.id}`}>
                    <a className={styles.single}> 
                        <h3>{ user.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
      );
}
 
export default Ninjas;