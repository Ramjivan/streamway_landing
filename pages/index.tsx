import React from 'react'
import { NextSeo } from "next-seo";
import Image from "next/image";
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
// import Blog from './Blog'
import Ourclient from './Ourclient'
import Whatwedo from './What-we-do'

const OFFER_URL = "https://digitalgoods.streamway.in/google-ai-pro";

const index = ({ posts, butn }: { posts: any, butn: boolean }) => {

  return (
    <div className='overflow-hidden'>
      <NextSeo
        title="StreamWay | Your highway to live streaming"
        description="StreamWay is the ultimate destination for all your live streaming needs. With our advanced multistreaming technology, you can easily stream to multiple platforms at once. Join the StreamWay community and start streaming today!"
        openGraph={{
          url: 'https://www.mypage.com',
          title: 'StreamWay',
          description: 'StreamWay is the ultimate destination for all your live streaming needs. With our advanced multistreaming technology, you can easily stream to multiple platforms at once. Join the StreamWay community and start streaming today!',
          images: [
            {
              url: 'https://www.mypage.com/image1.jpg',
              alt: 'Image Alt Text'
            }
          ],
          site_name: 'StreamWay'
        }}
      />
      {/* <News /> */}
      <a
        href={OFFER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="offer-strip-neon block text-white"
      >
        <div className="offer-strip-content container mx-auto flex items-center gap-2 px-3 py-2.5 text-xs font-medium leading-5 sm:text-[15px]">
          <Image
            src="/logos/gemini.svg"
            alt="Gemini"
            width={18}
            height={18}
            className="h-[18px] w-[18px] shrink-0"
          />
          <div className="text-xs font-medium leading-5 sm:text-[15px]">
            Google One AI Pro 18-Month Plan:
            <span className="ml-1 font-semibold text-[#FECACA] line-through">$350</span>
            <span className="ml-1 font-bold text-[#86EFAC]">$51</span>.
            <span className="ml-1">Includes</span>
            <span className="ml-1 inline-flex items-center gap-1">
              <Image
                src="/logos/googledrive.svg"
                alt="Google Drive"
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />
              <span>5 TB storage</span>
            </span>
            <span className="ml-1">+ Gemini AI.</span>
            <span className="ml-1 font-semibold underline underline-offset-2">
              Checkout special offer
            </span>
          </div>
        </div>
      </a>
      <Navbar />
      <Heropage />
      <Ourclient />
      <Whatwedo />
      <Features />
      <Testimonial />
      {/* <Blog posts={posts} butn={butn} /> */}
      <Ourpartners />
      <CAB />
      <Footer />
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
