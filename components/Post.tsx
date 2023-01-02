import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Design of Main blog page 

const Post = ({post}:{post:any}) => {
  return (
    <div className='mt-10 md:mt-0 mx-5 rounded-xl bg-white shadow-lg roboto'>
      <Link href={`/${post.slug}`} className="space-y-2">
        <div className='w-[90%] mx-auto pt-5'><Image src={post.frontmatter.cover_image} width={1000} height={10} className="shadow-lg rounded-lg" alt=""/></div>

      <div className='px-5 pb-5 pt-2 space-y-4 '><div className='text-white text-sm w-fit p-2 mt-2 rounded-lg bg-stone-600 md:text-md'>Posted on {post.frontmatter.date}</div>

      <p className='md:text-2xl'>{post.frontmatter.title}</p>  
      </div> 
      </Link>

    </div>
  )
}

export default Post
