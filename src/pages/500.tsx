import ErrorPage from '../sections/ErrorPage'

const Error500 = () => {
  return (
      <ErrorPage {...error500Data} />
  )
}

export default Error500


// Data
const error500Data = {
  title: '500 | Internal Server Error!',
  desc: [
    'We are working hard on it to resolve this issue.',
  ] 
}

