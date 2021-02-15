import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle'

/* Styles */
import { SectionWrapper } from '@components/StyledModule/SectionWrapper.styled'
import { Row, Column } from '@components/StyledModule/Grid.styled'
import { Category, Cards, Card, CardTitle } from '@components/Experience/Experience.styled'

const Experience = () => {

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  return (
    <SectionWrapper Special>
      <SectionTitle>
        Experience
        <span>個人閱歷</span>
      </SectionTitle>

      <Row>

        <Column className="edu">
          <Category>
            <h3>教育程度</h3>
            <p>大學畢業</p>
          </Category>
          
          <Cards>
            <Card>
              <p>2012/09 ~ 2016/06</p>
              <CardTitle>
                <h3>資訊傳播學系</h3>
                <p>中國文化大學</p>
              </CardTitle>
              <div>
                <p>跨領域多元學習數位資訊、傳播媒體及人文藝術，提升新媒體視野與創新整合之專業能力。</p>
                <p>深化創意設計企劃與資訊服務管理之學能，強調理論與實務並重，著重數位資訊能力，提供業界所需之相關研發及資訊服務人力資源。</p>
              </div>
              <h4>畢業</h4>
            </Card>

            <Card>
              <p>
                2009/09 ~ 2012/06
              </p>
              <h3 className="cardTitle">
                資料處理科
              </h3>
              <p>復興高級商工職業學校</p>
              <div className="cardInfo">
                <p>建立對商業環境基本知能，培養多媒體應用能力，結合學校美感教育，教導學生對於 Adobe 繪圖軟體操作與設計能力，如：網頁設計及平面設計之應用。</p>
                <p>協助考取國家技術士證照乙級、中英打證照及多項經濟學與會計學之證照。</p>
              </div>
              <h4 className="state">
                畢業
              </h4>
            </Card>
          </Cards>

        </Column>

        <Column className="exp">
          <h3 className="title">
            工作經歷
            <span> 2 ~ 3 年</span>
          </h3>

          <Cards>
            <Card>
              <p>
                2020/03 ~ Present
              </p>
              <h3 className="cardTitle">
                獨立接案
              </h3>
              <p>個人</p>
              <div className="cardInfo">
                <p>依照業主需求設計介面並實作網頁。</p>
              </div>
              <h4 className="state">
                迄今
              </h4>
            </Card>
            
            <Card>
              <p>
                2020/01 ~ 2020/06
              </p>
              <h3 className="cardTitle">
                網頁 UI/UX 設計師
              </h3>
              <p>中邦資訊有限公司</p>
              <div className="cardInfo">
                <p>協助前端工程師進行網頁切版 ( HTML / SCSS / Bootstrap / JS / jQuery )、製作網頁過渡動畫、使用互動式套件、設計並規劃產品介面 ( Figma )、繪製 Mockup 與製作 Prototype、優化使用者體驗等。</p>
              </div>
              <h4 className="state">
                6 個月
              </h4>
            </Card>

            <Card>
              <p>
                2018/03 ~ 2019/06
              </p>
              <h3 className="cardTitle">
                視覺設計師
              </h3>
              <p>風種子股份有限公司</p>
              <div className="cardInfo">
                <p>規劃並製作整體品牌之視覺形象，如平面設計 ( EDM、網站 Banner、其它印刷相關文宣等 )、商品攝影 ( 拍攝產品圖、產品圖片精修等 )，以及輕度的影音剪輯、微動畫製作及介面設計。</p>
              </div>
              <h4 className="state">
                1 年 4 個月
              </h4>
            </Card>
          </Cards>

        </Column>

      </Row>
    </SectionWrapper>
  )
}

export default Experience
