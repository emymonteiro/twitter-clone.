import type { AppProps } from 'next/app'

import GlobalStyle from './components/styles/GlobalStyle'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Layout />
      
      <GlobalStyle />
    </>
  )
}

export default MyApp
