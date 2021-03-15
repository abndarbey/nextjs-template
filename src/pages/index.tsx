import Head from 'next/head'
import Header from '../components/Header'
import Layout from '../components/Layout'
import BannerSection from '../sections/BannerSection'
import FeatureSection from '../sections/FeatureSection'
import PricingSection from '../sections/PricingSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../data/homeBanner';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <BannerSection {...homeObjOne}/>
        <BannerSection {...homeObjTwo}/>
        <BannerSection {...homeObjThree}/>
        <BannerSection {...homeObjFour}/>
        <PricingSection />
        {/* <FeatureSection /> */}
      </Layout>
    </>
  )
}

export default Home