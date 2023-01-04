import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import Testimonial from './Testimonals'
import Ourpartners from './Ourpartners'
import Features from './Features'
import CAB from './CAB'
import Footer from './Footer'
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Blog from './Blog'
import Ourclient from './Ourclient'
import Whatwedo from './What-we-do'

const index = ({posts, butn}:{posts:any, butn:boolean}) => {
  
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Heropage />
      <Ourclient/>
      <Whatwedo />
      <Features />
      <Testimonial />
      <Blog posts={posts} butn={butn}/>
      <Ourpartners />
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
