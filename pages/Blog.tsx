// Blog section main page

<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
// import {sortByDate} from '../utils'
import Navbar from './Navbar'
export default function Blog({posts}:{posts:any}) {
=======
import Post from "../components/Post";
import Navbar from "./Navbar";
import Link from "next/link";
const Blog=({posts , butn }:{posts:any , butn:boolean},)=> {
>>>>>>> 6f2a7401e96f4628e40583729380b37579ef8e42
  return (
    <>
      <Navbar />
      <div className="bg-[#f7faff]">
        <div className="py-20 tb:w-[85%] lg:w-[75%] md:w-[60%] w-[90%] mx-auto md:space-y-2">
          <p className="text-sm md:text-lg tracking-tight text-center text-gray-400">
            YOU WILL FIND HERE OUR COMPANY NEWS AND LATEST UPDATE
          </p>
          <p className="text-3xl md:text-5xl pt-5 md:pt-2 text-center f">
            Check our company inside story
          </p>
          <div className="tb:grid tb:grid-cols-3 md:pt-20 pt-8">
            {/* Showing blogs on main blog page with Array  */}
         
            {!butn?posts.map((post: any, index: any) => (
              <Post key={index} post={post} />
            )):
            posts.slice(0,3).map((post: any, index: any) => (
              <Post key={index} post={post} />
            ))}
           
            
          </div>
          
          {butn?<div className="flex place-content-center">
            <Link href={'MainBlog'} className="bg-[#fd6a5e] p-2 text-xl rounded-md text-white">More Posts</Link>
            </div>:""}
        </div>
      </div>
    </>
  );
}

<<<<<<< HEAD
// Reading frontmatter from .md files

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))
  
  const posts = files.map((filename)=>{
    const slug = filename.replace('.md','')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts',filename),
      'utf-8'
      )
    
    const{data:frontmatter} = matter(markdownWithMeta)

// frontmatter(title,image,description and date) and slug(body of blog)

    return{
      slug,
      frontmatter,
    }
    
  })
 
// Returning sorted dates for blog 

  return{
    props:{
      posts,
      // :posts.sort(sortByDate),
    },
  }
}
=======
export default Blog
>>>>>>> 6f2a7401e96f4628e40583729380b37579ef8e42
