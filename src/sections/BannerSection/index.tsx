import React from 'react'
import Container from '../../components/Container'
import Button from '../../components/Button'
import {
  BannerSec,
  BannerRow,
  BannerColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './BannerElements';

function BannerSection({
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
}) {
  return (
    <>
      <BannerSec lightBg={lightBg}>
        <Container>
          <BannerRow imgStart={imgStart}>
            <BannerColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button large primary={primary} dark={!lightBg} href='/signup'>
                {buttonLabel}
                </Button>
              </TextWrapper>
            </BannerColumn>
            <BannerColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </BannerColumn>
          </BannerRow>
        </Container>
      </BannerSec>
    </>
  );
}

export default BannerSection;