import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import BannerSection from '../sections/BannerSection'
import FeatureSection from '../sections/FeatureSection'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Header title="Home page!" />
        <BannerSection />
        <FeatureSection />
      </Layout>
    </>
  )
}

export default Home