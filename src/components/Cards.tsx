import styled from 'styled-components';
import themes from '../styles/themes'
import Button from './Button'

import React from 'react'

const Cards = ({plan, cost, length, features, buttonLabel, href, dark, icon}) => {
    const mapFeatures = features.map((item, index) => {
        return (
            <CardFeature key={index}>{item}</CardFeature>
        )
    })

    return (
        <CardWrapper>
            <CardInfo>
                <CardIcon>{icon}</CardIcon>
                <CardPlan>{plan}</CardPlan>
                <CardCost>{cost}</CardCost>
                <CardLength>{length}</CardLength>
                <CardFeatures>{mapFeatures}</CardFeatures>
                <Button dark={dark} href={href}>{buttonLabel}</Button>
            </CardInfo>
        </CardWrapper>
    )
}

export default Cards


const CardWrapper = styled.div`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 380px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

const CardIcon = styled.div`
  margin: 24px 0;
`;

const CardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

const CardCost = styled.h4`
  font-size: 40px;
`;

const CardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

const CardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

const CardFeature = styled.li`
  margin-bottom: 10px;
`;