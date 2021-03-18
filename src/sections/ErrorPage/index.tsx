import React from 'react'
import { FullPageContainer } from '../../components/Containers'
import { Title, Description, TextWrapper, Heading, Subtitle} from './ErrorElements'

const ErrorSection = ({title, desc}) => {
    const mapDescription = desc.map((d, i) => {
        return <Description key={i}>{d}</Description>
    })
    return (
        <FullPageContainer>
            <Heading>{title}</Heading>
            {mapDescription}
        </FullPageContainer>
    )
}

export default ErrorSection
