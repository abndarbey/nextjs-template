import React from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import themes from '../styles/themes'

export const Button = ({href, children = new String, ...props}) => {
    return (
        <>
            <Link href={href} passHref>
                <ButtonStyles
                    primary={props.primary}
                    secondary={props.secondary}
                    info={props.info}
                    warning={props.warning}
                    danger={props.danger}
                    large={props.large}
                    dark={props.dark}
                    outline={props.outline}
                >
                    {children}
                </ButtonStyles>
            </Link>
        </>
    )
}

export default Button

// Button Styles
const ButtonStyles = styled.button`
    font-weight: 400;
    border-radius: 4px;
    white-space: nowrap;
    outline: none;
    margin: 3px;
    text-decoration: none;
    cursor: pointer;
    padding: ${({large}) => (large ? '12px 64px' : '10px 50px')};
    font-size: ${({large}) => (large ? '20px' : '16px')};
    background: ${themes.secondary};
    border: 2px solid ${themes.secondary};
    color: ${themes.light};
    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({dark}) => (dark ? themes.light : themes.dark)};
        color: ${({dark}) => (dark ? themes.dark : themes.light)};
        border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
    }

    ${({primary}) => primary && css`
        background: ${themes.primary};
        border: 2px solid ${themes.primary};
        color: ${themes.light};
        &:hover {
            background: ${({dark}) => (dark ? themes.light : themes.dark)};
            color: ${({dark}) => (dark ? themes.dark : themes.light)};
            border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
        }
    `};

    ${({secondary}) => secondary && css`
        background: ${themes.secondary};
        border: 2px solid ${themes.secondary};
        color: ${themes.light};
        &:hover {
            background: ${({dark}) => (dark ? themes.light : themes.dark)};
            color: ${({dark}) => (dark ? themes.dark : themes.light)};
            border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
        }
    `};

    ${({info}) => info && css`
        background: ${themes.info};
        border: 2px solid ${themes.info};
        color: ${themes.light};
        &:hover {
            background: ${({dark}) => (dark ? themes.light : themes.dark)};
            color: ${({dark}) => (dark ? themes.dark : themes.light)};
            border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
        }
    `};

    ${({warning}) => warning && css`
        background: ${themes.warning};
        border: 2px solid ${themes.warning};
        color: ${themes.dark};
        &:hover {
            background: ${({dark}) => (dark ? themes.light : themes.dark)};
            color: ${({dark}) => (dark ? themes.dark : themes.light)};
            border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
        }
    `};

    ${({danger}) => danger && css`
        background: ${themes.danger};
        border: 2px solid ${themes.danger};
        color: ${themes.light};
        &:hover {
            background: ${({dark}) => (dark ? themes.light : themes.dark)};
            color: ${({dark}) => (dark ? themes.dark : themes.light)};
            border: 2px solid ${({dark}) => (dark ? themes.light : themes.dark)};
        }
    `};

    ${({outline}) => outline && css`
        background: ${themes.light};
        border: 2px solid ${themes.primary};
        color: ${themes.dark};
        &:hover {
            background: ${themes.primary};
            color: ${themes.light};
            border: 2px solid ${themes.primary};
        }

        ${({primary}) => primary && css`
            background: ${themes.light};
            border: 2px solid ${themes.primary};
            color: ${themes.dark};
            &:hover {
                background: ${themes.primary};
                color: ${themes.light};
                border: 2px solid ${themes.primary};
            }
        `};

        ${({secondary}) => secondary && css`
            background: ${themes.light};
            border: 2px solid ${themes.secondary};
            color: ${themes.dark};
            &:hover {
                background: ${themes.secondary};
                color: ${themes.light};
                border: 2px solid ${themes.secondary};
            }
        `};

        ${({info}) => info && css`
            background: ${themes.light};
            border: 2px solid ${themes.info};
            color: ${themes.dark};
            &:hover {
                background: ${themes.info};
                color: ${themes.light};
                border: 2px solid ${themes.info};
            }
        `};

        ${({warning}) => warning && css`
            background: ${themes.light};
            border: 2px solid ${themes.warning};
            color: ${themes.dark};
            &:hover {
                background: ${themes.warning};
                color: ${themes.dark};
                border: 2px solid ${themes.warning};
            }
        `};

        ${({danger}) => danger && css`
            background: ${themes.light};
            border: 2px solid ${themes.danger};
            color: ${themes.dark};
            &:hover {
                background: ${themes.danger};
                color: ${themes.light};
                border: 2px solid ${themes.danger};
            }
        `};
    `};
`;

