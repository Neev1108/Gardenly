
import type { AppProps } from 'next/app'
import '../styles/globals.css'
//nextjs uses app.js to initialize pages

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
  <Component {...pageProps} />
  )


}

export default MyApp
