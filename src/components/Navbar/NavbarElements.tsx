import styled from 'styled-components'
import { Container } from '../../themes/global'
import { FaFirefox } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled.a`
    display: flex;
    justify-self: flex-start;
    color: #fff;
    font-size: 2rem;
    text-decoration: none;
    cursor: pointer;
    align-items: center;
`;

export const NavIcon = styled(FaFirefox)`
    margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : `-100%`)};
        opacity: 1;
        transition: all 0.5s ease;
        background: #000;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    &:hover {
        border-bottom: 3px solid #029e7f;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border: none;
        }
    }
`;

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
            color: #029e7f;
            transition: all 0.3s ease;
        }
    }
`;
