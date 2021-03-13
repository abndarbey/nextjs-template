import React from 'react'
import Head from 'next/head'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Application = ({ Component, pageProps }) => {
  return (
    <>
        {/* <Head>
            <link 
              href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
              rel="stylesheet">
            </link>
        </Head> */}
        <Component {...pageProps} />
    </>
  )
}

export default Application
