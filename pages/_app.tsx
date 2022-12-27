import '../styles/globals.css'
function MyApp({ Component, pageProps }:{Component:any, pageProps:any}) {
  return(
  <>
    <main>
    <Component {...pageProps} />
    </main>
  </>
  )
}

export default MyApp