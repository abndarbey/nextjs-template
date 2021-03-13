import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';
import { MenuItems } from '../MenuItems'
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavElements';

const Navbar = ({toggle}) => {
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
            <Nav>
                <NavContainer>
                    <Link href='/' passHref>
                        <NavLogo>BrandLogo</NavLogo>
                   </Link>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {mapMenus}
                    </NavMenu>
                    <NavBtn>
                        <Link href='/contact' passHref>
                            <NavBtnLink>Contact</NavBtnLink>
                        </Link>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
