import React from 'react'
import Head from 'next/head'
import GlobalStyle from '../themes/global'
// import '../styles/globals.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Application = ({ Component, pageProps }) => {
  return (
    <>
        {/* <Head>
            <link 
              href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
              rel="stylesheet">
            </link>
        </Head> */}
        <GlobalStyle />
        <Component {...pageProps} />
    </>
  )
}

export default Application
