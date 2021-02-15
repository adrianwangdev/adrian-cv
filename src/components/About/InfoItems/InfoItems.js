import React from 'react'

/* Styles */
import { InfoItem, InfoTitle } from './InfoItems.styled'

const InfoItems = () => (
  <>
    <InfoItem>
      <InfoTitle>年齡</InfoTitle>
      <p>26 歲</p>
    </InfoItem>
    <InfoItem>
      <InfoTitle>婚姻狀態</InfoTitle>
      <p>未婚</p>
    </InfoItem>
    <InfoItem>
      <InfoTitle>駕駛執照</InfoTitle>
      <p>普通重型機車駕照、普通小型車駕照</p>
    </InfoItem>
    <InfoItem>
      <InfoTitle>聯絡電話</InfoTitle>
      <p>0910 319 855</p>
    </InfoItem>
    <InfoItem>
      <InfoTitle>Email</InfoTitle>
      <p>adrianwangdev@gmail.com</p>
    </InfoItem>
  </>
)

export default InfoItems
