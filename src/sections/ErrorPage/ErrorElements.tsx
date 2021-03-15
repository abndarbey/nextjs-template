import styled from 'styled-components'

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    padding: 10px 0;
`

export const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 0;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #1c2237;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #1c2237;
`;
