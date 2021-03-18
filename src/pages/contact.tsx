import Head from 'next/head'
import Layout from '../sections/Layout'
import Banner from '../sections/Banner'
import Feature from '../sections/Feature'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        {/* <Banner /> */}
        <Feature {...contactObjOne} />
      </Layout>
    </>
  )
}

export default Contact

// Contact Page Data
export const contactObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headline: 'This is a Contact Page!',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../../public/static/images/svg-1.svg'),
  alt: 'Credit Card',
  start: ''
};
