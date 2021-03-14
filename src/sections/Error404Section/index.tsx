import React from 'react'
import styles from './Error404.module.scss'
import Header from '../../components/Header'

const Error404Section = () => {
    return (
        <div className={styles.container}>
            <Header title="404 | Page not found!" />
            <p className="description">
                Oh no, you’ve found our junior developer’s homepage!
            </p>
            <p className="description">
                Despite sleeping on the couch most of the day, our junior web developer still finds time to do some work...
            </p>
        </div>
    )
}

export default Error404Section
