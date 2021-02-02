import React from 'react'
import Sidebar from '../components/containers/Sidebar'

const MainLayout = props => (
  <>
    <Sidebar />
    <>
      {props.children}
    </>
  </>
)

export default MainLayout
