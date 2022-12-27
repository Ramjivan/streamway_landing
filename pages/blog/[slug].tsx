
/* -------- Blog Content Individually --------- */ 

import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { marked } from "marked";
import Link from "next/link";
import Navbar from "../Navbar";


const PostPage = ({
  frontmatter: { title, date, cover_image, desc,blog_writer },
  content,
}: {
  frontmatter: any;
  content: any;
  slug: any;
}) => {
  return (
    <>
    {/* Navbar Imported */}

      <Navbar />

    {/* Blog Content TITLE, DATE, DESCRIPTION, BODY */}

      <div className="container mx-auto notosans">
        <div className="tb:flex place-content-center">
          <div className="tb:w-[50%] p-6">
            <div className="p-2 rounded-md text-white bg-stone-500 inline">
              Posted On {date}
            </div>
            <div className="md:text-6xl text-3xl font-bold mt-5 md:leading-[75px]" >{title}</div>
            <div className="md:text-3xl py-10  tracking-wider md:leading-10" >{desc}</div>
            <div className="flex text-xl"><span className="p-2">Author:</span><span className=" bg-slate-500 p-2 text-white rounded-md">{blog_writer}</span></div>
          </div>

          <div className="tb:w-[50%] grid place-items-center">
            <Image
              src={cover_image}
              className="md:w-96 rounded-md"
              width="1000"
              height="800"
              alt=""
            />
          </div>
        </div>

        {/* BLOG CONTENT */}

        <div className="mt-20 p-5" >
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
      <Link href="/" legacyBehavior>
        <a className="btn btn-back">Go Back</a>
      </Link>
    </>
  );
};

export default PostPage;

// Post file reading[.md file]

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

// separating frontmatter and slug 

export async function getStaticProps({ params: { slug } }: { params: any }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  console.log(slug);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
