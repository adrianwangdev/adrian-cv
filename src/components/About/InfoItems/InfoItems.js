import { useContext } from 'react'
import { CatStateContext } from '@utilities/context'
import { ageGenerator } from '@utilities/generator'

/* Styles */
import { InfoItem, InfoTitle } from './InfoItems.styled'

const InfoItems = () => {

  const {
    details: { birth, isMarried, phone, email }
  } = useContext(CatStateContext)

  return (
    <>
      <InfoItem>
        <InfoTitle>年齡</InfoTitle>
        <p>{`${ageGenerator(birth)} 歲`}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>婚姻狀態</InfoTitle>
        <p>{isMarried ? '已婚' : '未婚'}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>駕駛執照</InfoTitle>
        <p>普通重型機車駕照、普通小型車駕照</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>聯絡電話</InfoTitle>
        <p>{phone}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>Email</InfoTitle>
        <p>{email}</p>
      </InfoItem>
    </>
  )
}

export default InfoItems
