import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { AboutSectionWrapper } from '@components/About/About.styled'

const About = () => {

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  return (
    <AboutSectionWrapper>
      <SectionTitle>
        About
        <span>個人資料</span>
      </SectionTitle>

      <h3>王柔燁 Adrian</h3>

      <div className="container">
        <div className="row">

          <div className="column col3 info">
            <div className="infoItem">
              <p className="title">年齡</p>
              <p className="content">26 歲</p>
            </div>
            <div className="infoItem">
              <p className="title">婚姻狀態</p>
              <p className="content">未婚</p>
            </div>
            <div className="infoItem">
              <p className="title">駕駛執照</p>
              <p className="content">普通重型機車駕照、普通小型車駕照</p>
            </div>
            <div className="infoItem">
              <p className="title">聯絡電話</p>
              <p className="content">0910 319 855</p>
            </div>
            <div className="infoItem">
              <p className="title">Email</p>
              <p className="content">adrianwangdev@gmail.com</p>
            </div>
          </div>

          <div className="column col3">
            2222
          </div>

          <div className="column col3">
            33333
          </div>

        </div>

      </div>



      

    </AboutSectionWrapper>
  )
}

export default About
