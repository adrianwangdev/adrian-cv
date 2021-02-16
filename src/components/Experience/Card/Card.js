import React from 'react'
import { experienceCardInfo as cardInfo } from '@utilities/experienceCardInfo'

/* Styles */
import { CardWrapper, CardTitle } from './Card.styled'

const Card = ({ category }) => {
  
  const cardElement = (item, index) => (
    <CardWrapper key={index}>
      <p>{item.from} ~ {item.to}</p>
      <CardTitle>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </CardTitle>
      <div>
        <p>{item.contentOne}</p>
        {item.contentTwo && <p>{item.contentTwo}</p>}
      </div>
      <h4>{item.state}</h4>
    </CardWrapper>
  )

  const renderCard = (cardCategory) => (
    cardCategory.map((item, index) => cardElement(item, index))
  )

  return (
    <>
      {
        renderCard(cardInfo[category])
      }
    </>
  )
}

export default Card
