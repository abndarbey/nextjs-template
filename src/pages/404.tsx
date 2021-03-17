import ErrorPage from '../sections/ErrorPage'

const Error404 = () => {
  return (
      <ErrorPage {...error404Data} />
  )
}

export default Error404


// Data
const error404Data = {
  title: '404 | Page not found!',
  desc: [
    'We are working hard on it to resolve this issue.',
    'Despite sleeping on the couch most of the day, our junior web developer still finds time to do some work...',
  ] 
}

