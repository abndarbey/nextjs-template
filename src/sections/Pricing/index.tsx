import React from 'react';
import  Card from '../../components/Card';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer
} from './PricingElements';

export const Pricing = ({heading, cardData}) => {
  const mapCards = cardData.map((item, index) => {
    return (
      <Card key={index}
        plan={item.plan}
        cost={item.cost}
        length={item.length}
        features={item.features}
        buttonLabel={item.buttonLabel}
        href={item.href}
        dark={item.dark}
        icon={item.icon}
      />
    )
})

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '64' }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{heading}</PricingHeading>
          <PricingContainer>{mapCards}</PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;