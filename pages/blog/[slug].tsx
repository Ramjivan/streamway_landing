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
      <Navbar />

      <div className="container">
        <div className="md:flex md:w-[80%] md:mx-auto">
          <div className="md:w-[50%] p-6">
            <div className="p-2 rounded-md text-white bg-stone-500 inline">
              Posted On {date}
            </div>
            <h1 className="md:text-5xl text-3xl font-bold mt-5">{title}</h1>
            <div className="md:text-2xl py-10 pr-10">{desc}</div>
            <div>{blog_writer}</div>
          </div>

          <div className="md:w-[50%]">
            <Image
              src={cover_image}
              className="md:w-96 rounded-md"
              width="1000"
              height="800"
              alt=""
            />
          </div>
        </div>

        <div className="mt-20 w-[80%] mx-auto" >
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
