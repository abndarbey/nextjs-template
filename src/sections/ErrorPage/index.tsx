import React from 'react'
import { FullPageContainer } from '../../components/Container'
import { Title, Description, TextWrapper, Heading, Subtitle} from './ErrorElements'

const ErrorSection = ({title, p1, p2}) => {
    return (
        <FullPageContainer>
            <Heading>{title}</Heading>
            <Description>{p1}</Description>
            <Description>{p2}</Description>
        </FullPageContainer>
    )
}

export default ErrorSection
