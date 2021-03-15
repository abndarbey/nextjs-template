import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import {
  FeatureSec,
  FeatureRow,
  FeatureColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './FeatureElements';

export const Feature = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) => {
  return (
    <>
      <FeatureSec lightBg={lightBg}>
        <Container>
          <FeatureRow imgStart={imgStart}>
            <FeatureColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button dark={!lightBg} href='/signup'>
                {buttonLabel}
                </Button>
              </TextWrapper>
            </FeatureColumn>
            <FeatureColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </FeatureColumn>
          </FeatureRow>
        </Container>
      </FeatureSec>
    </>
  );
}

export default Feature;