import Head from 'next/head'
import Layout from '../sections/Layout'
import Banner from '../sections/Banner'
import Feature from '../sections/Feature'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        {/* <Banner /> */}
        <Feature {...aboutObjOne} />
      </Layout>
    </>
  )
}

export default About

// About Page Data
export const aboutObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headline: 'This is an About Page!',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../../public/static/images/svg-1.svg'),
  alt: 'Credit Card',
  start: ''
};