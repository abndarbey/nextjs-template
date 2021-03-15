import React from 'react';
import Navbar from '../Navbar'
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
        </>
    )
}

export default Layout
