import React from 'react'
import Link from 'next/link'
import { ButtonContainer } from './ButtonElements'

export const Button = ({href, children = new String, ...props}) => {
    return (
        <>
            <Link href={href} passHref>
                <ButtonContainer
                    primary={props.primary}
                    secondary={props.secondary}
                    warning={props.warning}
                    danger={props.danger}
                    large={props.large}
                    dark={props.dark}
                    outline={props.outline}
                >
                    {children}
                </ButtonContainer>
            </Link>
        </>
    )
}

export default Button
