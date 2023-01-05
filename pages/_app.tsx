import '../styles/globals.css'
import {DefaultSeo} from 'next-seo';
import {ArticleJsonLd} from 'next-seo';
function MyApp({ Component, pageProps }:{Component:any, pageProps:any}) {
  return(
  <>
    <main>
    <DefaultSeo
                title="STREAMWAY"
                description="Next SEO is a plug in that makes managing your SEO easier in Next.js projects."
                openGraph={{
                    type: 'website',
                    locale: 'en_IE',
                    url: 'https://www.url.ie/',
                    siteName: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <ArticleJsonLd
            type="BlogPosting"
            url="https://example.com/blog"
            title="Manage SEO in NextJS with Next SEO"
            images={[
                'https://example.com/photos/1x1/photo.jpg',
                'https://example.com/photos/4x3/photo.jpg',
                'https://example.com/photos/16x9/photo.jpg',
            ]}
            datePublished="2022-06-21T23:04:13Z"
            dateModified="2022-06-21T23:04:13Z"
            authorName="Author Name"
            description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
        />
    <Component {...pageProps} />
    </main>
  </>
  )
}

export default MyApp