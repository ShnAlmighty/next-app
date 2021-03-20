import Link from "next/link";
import Head from 'next/head';
import styles from '../../styles/User.module.css';
import users from '../../utils/users';

export const getStaticPaths = async() =>{
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const res = await fetch('http://localhost:3000/api/users');
    // const data = await res.json();
    const data = users;
    const paths = data.map((user)=>{
        return {
            params: { 
                id: user.id.toString() 
            }
        }
    });

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
   // const res = await fetch(`http://localhost:3000/api/users/${id}`);
    //const data = await res.json();
    const data = users.find((user)=>user.id==id);
    return{
        props: { 
            user: data 
        }
    }
}

const Details = ({ user }) => {
    return (
        <>
        <Head>
        <title>Users List | { user.id } </title>
        <meta name="keywords" content="users"/>
        </Head> 
        <div>
            <h1> { user.name } </h1>
            <p>Email: { user.email }</p>
            <p>Designation: { user.designation }</p>
            <p>Address: { user.address.city }, { user.address.country }</p>
            <Link href="/users/"><a className={styles.back}>Back</a></Link>
        </div>
        </>
     );
}
 
export default Details;