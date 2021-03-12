import React from 'react'
import styles from './Footer.module.scss'

const FooterSection = () => {
    return (
        <>
            <footer className={styles.footer}>
                &#169; Copyright 2021 <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> Your Company Name
            </footer>
        </>
    )
}

export default FooterSection
