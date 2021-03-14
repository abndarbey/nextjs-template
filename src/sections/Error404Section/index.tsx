import React from 'react'
import Header from '../../components/Header'
import { FullPageContainer } from '../../components/Container'

const Error404Section = () => {
    return (
        <FullPageContainer>
            <Header title="404 | Page not found!" />
            <p className="description">
                Oh no, you’ve found our junior developer’s homepage!
            </p>
            <p className="description">
                Despite sleeping on the couch most of the day, our junior web developer still finds time to do some work...
            </p>
        </FullPageContainer>
    )
}

export default Error404Section
