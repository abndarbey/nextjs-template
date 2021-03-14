import React from 'react';
import Navbar from '../Navbar'
import Copyright from '../Copyright'
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div>
                <div>
                    {children}    
                </div>            
            </div>
            <Footer />
            <Copyright />
        </>
    )
}

export default Layout
