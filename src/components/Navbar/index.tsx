import React, { useState } from 'react'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { MenuItems } from './MenuItems'
import { Nav, NavContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    const mapMenus = MenuItems.map((item, index) => {
        return (
            <NavItem key={index}>
                <Link href={item.url} key={index} passHref>
                    <NavLinks>{item.title}</NavLinks>
                </Link>
            </NavItem>
        )
    })
    
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavContainer>
                        <Link href='/' passHref>
                            <NavLogo>
                                <NavIcon />
                                BrandLogo
                            </NavLogo>
                        </Link>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            {mapMenus}
                        </NavMenu>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
