import React from 'react'
import Sidebar from '../components/containers/Sidebar'

const MainLayout = ({ children, sidebarDetail }) => (
  <>
    <Sidebar sidebarDetail={sidebarDetail} />
    <>
      {children}
    </>
  </>
)

export default MainLayout
