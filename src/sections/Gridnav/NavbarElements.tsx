import styled from 'styled-components'
import themes from '../../styles/themes'
import { Container } from '../../components/Containers'

export const Nav = styled.nav`
    background: ${themes.primary};
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`

export const NavLogo = styled.a`
    display: flex;
    justify-self: flex-start;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : `-100%`)};
        opacity: 1;
        transition: all 0.5s ease;
        background: ${themes.dark};
    }
`

export const NavItems = styled.a`
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
`

export const NavItem = styled.li`
    height: 80px;
    &:hover {
        border-bottom: 3px solid ${themes.secondary};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    }
`

export const NavLinks = styled.a`
    color: #fff;
    font-weight: 500;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1rem;
    text-decoration: none;

    @media screen and (max-width: 960px) {
        width: 100%;
        text-align: center;
        padding: 2rem;
        display: table;
        &:hover {
            color: ${themes.secondary};
            transition: all 0.3s ease;
        }
    }
`