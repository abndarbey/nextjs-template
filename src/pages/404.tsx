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
  p1: 'Oh no, you’ve found our junior developer’s homepage!',
  p2: 'Despite sleeping on the couch most of the day, our junior web developer still finds time to do some work...',
}

