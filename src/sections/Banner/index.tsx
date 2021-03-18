import React from 'react'
import { Container } from '../../components/Containers'
import { Button } from '../../components/Buttons'
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

export const Banner = ({
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
      <BannerSec lightBg={lightBg}>
        <Container>
          <BannerRow imgStart={imgStart}>
            <BannerColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Button large dark={!lightBg} href='/signup'>
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

export default Banner;