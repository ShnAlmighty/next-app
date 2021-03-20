import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        console.log('use effect ran')
        setTimeout(()=>{
            //router.go(-1);
            router.push('/');
        },3000)
    },[]);

    return ( 
        <div className="not-found">
        <h1>Oooops....</h1>    
        <h2> This Page does not Exists</h2>
        <p>Go back to home page <Link href="/"><a>Home</a></Link></p>
        </div>
     );
}
 
export default NotFound;