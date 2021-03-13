import React from 'react';
import Link from 'next/link'
import { MenuItems } from '../MenuItems'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    const mapMenus = MenuItems.map((item, index) => {
        return (
            <Link href={item.url} key={index} passHref>
                <SidebarLink>{item.title}</SidebarLink>
            </Link>
        )
    })
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {mapMenus}
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='/contact' passHref>
                        <SidebarRoute>Contact</SidebarRoute>
                    </Link>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
