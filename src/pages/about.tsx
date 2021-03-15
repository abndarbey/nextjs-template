import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import BannerSection from '../sections/BannerSection'
import FeatureSection from '../sections/FeatureSection'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Header title="About page!" />
        {/* <BannerSection /> */}
        <FeatureSection />
      </Layout>
    </>
  )
}

export default About