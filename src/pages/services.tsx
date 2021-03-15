import Head from 'next/head'
import Layout from '../sections/Layout'
import Banner from '../sections/Banner'
import Feature from '../sections/Feature'

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        {/* <Banner /> */}
        <Feature {...servicesObjOne} />
      </Layout>
    </>
  )
}

export default Services

// Services Page Data
export const servicesObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headline: 'This is an a Service Page!',
  description:
    'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../assets/images/svg-1.svg'),
  alt: 'Credit Card',
  start: ''
};
