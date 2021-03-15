import React from 'react';
import  Button from '../../components/Button';
import  Cards from '../../components/Cards';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars, GiFloatingCrystal, GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer
} from '../Pricing/PricingElements';

export const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '64' }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Explore Our Plans</PricingHeading>
          <PricingContainer>
            <Cards
              plan={'Starter Pack'}
              cost={'$99.99'}
              length={'per month'}
              features={['100 New Users', '$10,000 Budget', 'Retargeting analytics']}
              buttonLabel={'Choose Plan'}
              href={'/about'}
              dark={true}
              icon={<GiFloatingCrystal />}
            />
            <Cards
              plan={'Gold Rush'}
              cost={'$299.99'}
              length={'per month'}
              features={['1000 New Users', '$50,000 Budget', 'Lead Gen Analytics']}
              buttonLabel={'Choose Plan'}
              href={'/services'}
              dark={true}
              icon={<GiCrystalBars />}
            />
            <Cards
              plan={'Diamond Kings'}
              cost={'$999.99'}
              length={'per month'}
              features={['Unlimited Users', 'Unlimited Budget', '24/7 Support']}
              buttonLabel={'Choose Plan'}
              href={'/contact'}
              dark={true}
              icon={<GiCutDiamond />}
            />
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;