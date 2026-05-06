
/* -------- Blog Content Individually --------- */ 
import {NextSeo} from 'next-seo';
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { marked } from "marked";
import Link from "next/link";
import Navbar from "./Navbar";


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
    <NextSeo
            title={title}
            description={desc}
            openGraph={{
              type: 'article',
              article: {
                  publishedTime: `${date}`,
                  // modifiedTime: '2022-01-21T18:04:43Z',
                  authors: [
                      `${blog_writer}`
                  ],
                  tags: ['Tag A', 'Tag B', 'Tag C'],
              },
              url: 'www.example.com/next-seo-blog',
              // images: {
              //     url: 'https://www.test.ie/images/cover.jpg',
              //     width: 850,
              //     height: 650,
              //     alt: 'Photo of text',
              // },
              site_name: 'StreamWay'
          }}
            />
    {/* Navbar Imported */}

      <Navbar />

    {/* Blog Content TITLE, DATE, DESCRIPTION, BODY */}

      <div className="container mx-auto notosans">
        <div className="tb:flex place-content-center">
          <div className="tb:w-[50%] p-6">
            <div className="p-2 rounded-md text-white bg-stone-500 inline">
              Posted On {date}
            </div>
            <div className="md:text-6xl text-3xl font-bold mt-5 " >{title}</div>
            <div className="md:text-3xl py-10  md:leading-10" >{desc}</div>
            <div className="flex text-xl"><span className="p-2">Writer :</span><span className=" bg-slate-500 p-2 text-white rounded-md">{blog_writer}</span></div>
          </div>

          <div className="tb:w-[50%] grid place-items-center">
            <Image
              src={cover_image}
              className="md:w-full rounded-md"
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
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
