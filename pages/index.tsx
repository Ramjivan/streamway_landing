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
      <OurClients />
      <CAB />
      <Testimonial />
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