// Blog section main page

import Post from "../components/Post";
import Navbar from "./Navbar";
import Link from "next/link";
const Blog=({posts}:{posts:any})=> {
  return (
    <>
      <Navbar />
      <div className="bg-[#f7faff] mb-96 ">
        <div className="py-20 tb:w-[85%] lg:w-[75%] md:w-[60%] w-[90%] mx-auto md:space-y-2">
          <p className="text-sm md:text-lg tracking-tight text-center text-gray-400">
            YOU WILL FIND HERE OUR COMPANY NEWS AND LATEST UPDATE
          </p>
          <p className="text-3xl md:text-5xl pt-5 md:pt-2 text-center f">
            Check our company inside story
          </p>
          <div className="tb:grid tb:grid-cols-3 md:pt-20 pt-8">
            {/* Showing blogs on main blog page with Array  */}

            {posts.map((post: any, index: any) => (
              <Post key={index} post={post} />
            ))}

            
            
          </div>
          <></>
          <div className="flex place-content-center">
            <Link href={'MainBlog'} className="bg-[#fd6a5e] p-2 text-xl rounded-md text-white">More Posts</Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Blog
