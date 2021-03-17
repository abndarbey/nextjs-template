import React from 'react'
import Link from 'next/link'
import { Nav, NavContainer, NavLogo } from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>BrandLogo</NavLogo>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
