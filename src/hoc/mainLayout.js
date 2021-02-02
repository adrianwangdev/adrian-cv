import React from 'react'
import Sidebar from '../components/Sidebar'

const MainLayout = props => (
  <>
    <Sidebar />
    <>
      {props.children}
    </>
  </>
)

export default MainLayout
