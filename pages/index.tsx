import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import Testimonial from './Testimonals'
import OurClients from './OurClients'
import Features from './Features'
import CAB from './CAB'
import Footer from './Footer'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from '../components/Post'
import Blog from './Blog'

const index = ({posts, butn}:{posts:any, butn:boolean}) => {
  
  return (
    <div>
      <Navbar />
      <Heropage />
      <Features />
      <Testimonial />
      <OurClients />
      <Blog posts={posts} butn={butn}/>
      <CAB />
      <Footer/>
    </div>
  )
}
export default index
export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    // frontmatter(title,image,description and date) and slug(body of blog)

    return {
      slug,
      frontmatter,
    };
  });

  // Returning sorted dates for blog
  let butn = true;
  return {
    props: {
      posts,
      butn
      // posts.sort(sortByDate),
    },
  };
}
