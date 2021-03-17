import Head from 'next/head'
import Layout from '../sections/Layout'
import Banner from '../sections/Banner'
import Feature from '../sections/Feature'
import Pricing from '../sections/Pricing'
import { GiFloatingCrystal, GiCutDiamond } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Banner {...homeObjOne}/>
        <Feature {...homeObjTwo}/>
        <Feature {...homeObjThree}/>
        <Feature {...homeObjFour}/>
        <Feature {...homeObjThree}/>
        <Pricing {...pricingObject}/>
      </Layout>
    </>
  )
}

export default Home

// Home Page Data
const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Marketing Agency',
  headline: 'Lead Generation Specialist for Online Businesses',
  description:'We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.',
  buttonLabel: 'Get Started',
  imgStart: '',
  img: require('../assets/images/svg-1.svg'),
  alt: 'Credit Card',
  start: ''
};

const homeObjTwo = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Sarah Jeni',
  headline:
    'Ultra helped me increase my revenue by over 3X in less than 3 months!',
  description:
    "Their team is wonderful! I can't believe I didn't start working with them earlier.",
  buttonLabel: 'View Case Study',
  imgStart: 'start',
  img: require('../assets/images/profile.jpg'),
  alt: 'Vault',
  start: 'true'
};

const homeObjThree = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Instant Setup',
  headline: 'Extremely quick onboarding process',
  description:
    "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
  buttonLabel: 'Learn More',
  imgStart: '',
  img: require('../assets/images/svg-2.svg'),
  alt: 'Vault',
  start: ''
};

const homeObjFour = {
  primary: true,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Secure Database',
  headline: 'All your data is stored on our secure server',
  description:
    'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
  buttonLabel: 'Sign Up Now',
  imgStart: 'start',
  img: require('../assets/images/svg-3.svg'),
  alt: 'Vault',
  start: 'true'
};

const pricingObject = {
  heading: 'Explore Our Plans',
  cardData: [
    {
      plan: 'Starter Pack',
      cost: '$99.99',
      length: 'per month',
      features: ['100 New Users', '$10,000 Budget', 'Retargeting analytics'],
      buttonLabel: 'Choose Plan',
      href: '/about',
      dark: true,
      icon: <AiFillThunderbolt />,
    },
    {
      plan: 'Gold Rush',
      cost: '$299.99',
      length: 'per month',
      features: ['1000 New Users', '$50,000 Budget', 'Lead Gen Analytics'],
      buttonLabel: 'Choose Plan',
      href: '/contact',
      dark: true,
      icon: <GiFloatingCrystal />,
    },
    {
      plan: 'Diamond Kings',
      cost: '$999.99',
      length: 'per month',
      features: ['Unlimited Users', '$Unlimited Budget', '24/7 Support'],
      buttonLabel: 'Choose Plan',
      href: '/services',
      dark: true,
      icon: <GiCutDiamond />,
    },
  ],
};
