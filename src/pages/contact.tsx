import Head from 'next/head'
import Header from '../components/Header'
import BannerSection from '../sections/BannerSection'
import FeatureSection from '../sections/FeatureSection'
import FooterSection from '../sections/FooterSection'

const Contact = () => {
  return (
    <div className="container">
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Contact page!" />
        <BannerSection />
        <FeatureSection />
      </main>

      <FooterSection />
    </div>
  )
}

export default Contact