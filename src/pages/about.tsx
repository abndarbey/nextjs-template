import Head from 'next/head'
import Header from '../components/Header'
import BannerSection from '../sections/BannerSection'
import FeatureSection from '../sections/FeatureSection'
import FooterSection from '../sections/FooterSection'

const About = () => {
  return (
    <div className="container">
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="About page!" />
        <BannerSection />
        <FeatureSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default About