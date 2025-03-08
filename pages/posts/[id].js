import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Post = (props) => {
  console.log(props);

  const { currPost } = props;
  console.log(currPost);

  return (
    <div className='w-full h-screen text-[20px] flex flex-col gap-5 p-2 justify-center items-center text-white bg-gray-400'>
      <p className='text-center'>Title:  {currPost.title}</p>
    <div className='w-full mx-2 px-2 lg:w-[500px] flex flex-col gap-4 border-[1px] rounded-md p-4 ' > 
      <div className='flex justify-between'>
      <p>Id: {currPost.id}</p>
      <p>User Id: {currPost.userId}</p>
      </div>
      <p>Body:  {currPost.body}</p>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const currPost = await res.json();
  return {
    props: {
      currPost
    }
  }
  
}

export default Post;

