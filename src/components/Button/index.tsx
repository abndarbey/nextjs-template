import React from 'react'
import Link from 'next/link'
import { ButtonStyles } from './ButtonElements'

interface ButtonProps {
    children: string
    href: string
    primary?: boolean
    secondary?: boolean
    info?: boolean
    warning?: boolean
    danger?: boolean
    large?: boolean
    dark?: boolean
    outline?: boolean
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <>
            <Link href={props.href} passHref>
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
                    {props.children}
                </ButtonStyles>
            </Link>
        </>
    )
}

export default Button
