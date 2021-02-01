import Link from 'next/link'
import React, { useEffect } from 'react'
import {useRouter} from 'next/router'

const NotFound = () => {
    
    const router = useRouter()

    useEffect(()=>{
        setTimeout(() => {
            //router.go(-1,or 1)
            router.push('/')        
        }, 3000);        
    }, [])
    
    return (
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    )
}

export default NotFound
