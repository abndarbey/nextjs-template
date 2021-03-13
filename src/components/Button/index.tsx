import React from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'

const Button = () => {
    return (
        <>
            <Link href='/sign-up'>
                <button className={styles.btn}>Sign Up</button>
            </Link>
        </>
    )
}

export default Button
