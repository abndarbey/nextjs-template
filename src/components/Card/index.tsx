
import React from 'react'
import Button from '../Button'
import {
  CardWrapper,
  CardInfo,
  CardIcon,
  CardPlan,
  CardCost,
  CardLength,
  CardFeatures,
  CardFeature,
} from './CardElements'

export interface CardProps {
  plan: string
  cost: string
  length: string
  features: [string]
  buttonLabel: string
  href: string
  dark: boolean
  icon: React.Component
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
    const mapFeatures = props.features.map((item, index) => {
        return (
            <CardFeature key={index}>{item}</CardFeature>
        )
    })

    return (
        <CardWrapper>
            <CardInfo>
                <CardIcon>{props.icon}</CardIcon>
                <CardPlan>{props.plan}</CardPlan>
                <CardCost>{props.cost}</CardCost>
                <CardLength>{props.length}</CardLength>
                <CardFeatures>{mapFeatures}</CardFeatures>
                <Button dark={props.dark} href={props.href}>{props.buttonLabel}</Button>
            </CardInfo>
        </CardWrapper>
    )
}

export default Card
