
import type { AppProps } from 'next/app'
import '../styles/globals.css'
//nextjs uses app.js to initialize pages

// Resolution order
  //

  // getInitialProps = static rendering at build time (will do by default unless getServerSideProps is specified)
  
  // On the server:
  // 1. app.getInitialProps 
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
  <Component {...pageProps} />
  )


}

export default MyApp
