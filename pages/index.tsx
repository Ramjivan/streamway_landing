import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import Testimonial from './Testimonial_Page'
import OurClients from './OurClients'
import Features from './Features'
import CAB from './CAB'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import {sortByDate} from '../utils'

const index = ({posts}:{posts:any}) => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Features />
      <Testimonial />
      <div className='bg-[#f7faff]'>
      
      <div className='py-20 tb:w-[85%] lg:w-[75%] md:w-[60%] w-[90%] mx-auto md:space-y-2'>
      <p className='text-sm md:text-lg tracking-tight text-center text-gray-400'>YOU WILL FIND HERE OUR COMPANY NEWS AND LATEST UPDATE</p>
      <p className='text-3xl md:text-5xl pt-5 md:pt-2 text-center f'>Check our company inside story</p>
      <div className='tb:grid tb:grid-cols-3 md:pt-20 pt-8'>
        {posts.map((post:any,index:any)=>(
          <Post key={index} post={post}/>
        ))}
      </div>
      </div>
    </div>
      <OurClients />
      <CAB />
    </div>
  )
}

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))
  
  const posts = files.map((filename)=>{
    const slug = filename.replace('.md','')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts',filename),
      'utf-8'
      )
    
    const{data:frontmatter} = matter(markdownWithMeta)

    return{
      slug,
      frontmatter,
    }
    
  })
 

  return{
    props:{
      posts:posts.sort(sortByDate),
    },
  }
}

export default index