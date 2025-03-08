import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = () => {

    const [user, setUser] = useState([]);
    const router = useRouter();

    const getUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.query?.post}`);
            const currPost = await res.json();
            setUser(currPost);
    }

    useEffect(() => {
        console.log(router.query);
            getUser()
    }, [router.isReady]) 

  return (
    <div>{router.query.post}</div>
  )
}

export default Post