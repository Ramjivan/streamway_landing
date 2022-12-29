// SEPARATE BLOG PAGE

import React from 'react'
import Blog from './Blog'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const MainBlog = ({posts, butn}:{posts:any, butn:boolean}) => {
  return (
    <div>
      <Blog posts={posts} butn={butn}/>
    </div>
  )
}

export default MainBlog

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
    let butn = false;
    return {
      props: {
        posts,
        butn
        // posts.sort(sortByDate),
      },
    };
  }
