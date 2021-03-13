import React from 'react';
import Navigation from '../Navigation'
import Copyright from '../Copyright'
// import styles from './Layout.module.scss'

const Layout = ({children}) => {
    return (
        <>
            <Navigation />
            <div>
                <div>
                    {children}    
                </div>            
            </div>
            <Copyright />
        </>
    )
}

export default Layout
