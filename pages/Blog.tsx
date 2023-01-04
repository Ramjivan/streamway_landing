// Blog section main page

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Post from '../components/Post'
import Footer from './Footer'
import Navbar from './Navbar'
export default function Blog({ posts, butn }: { posts: any, butn: boolean }) {
  return (
    <>
      <div className='bg-[#ffff]'>
        <Navbar />
        <div className="bg-[#ffff]">
          <div className="py-20 tb:w-[85%] lg:w-full md:w-[60%] xl:w-[90%] mx-auto ">
            <p className="text-sm md:text-lg tracking-tight text-center text-gray-400">
              YOU WILL FIND HERE OUR COMPANY NEWS AND LATEST UPDATE
            </p>
            <p className="text-3xl md:text-5xl pt-5 md:pt-2 text-center f">
              Check our company inside story
            </p>
            <div className="md:grid lg:grid-cols-3 gap-10 md:pt-20 pt-8">
              {/* Showing blogs on main blog page with Array  */}

              {!butn ? posts.map((post: any, index: any) => (
                <Post key={index} post={post} />
              )) :
                posts.slice(0, 3).map((post: any, index: any) => (
                  <Post key={index} post={post} />
                ))}


            </div>

            {butn ? <div className="flex place-content-center ">
              <Link href={'MainBlog'} className="bg-[#fd6a5e] px-5 py-2 text-xl rounded-md mt-20 text-white">More Posts</Link>
            </div> : ""}
          </div>
        </div>
        {butn?"":<Footer/>}
      </div>
    </>
  );
}

// Reading frontmatter from .md files

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    // frontmatter(title,image,description and date) and slug(body of blog)

    return {
      slug,
      frontmatter,
    }

  })

  return {
    props: {
      posts,
    },
  }
}
