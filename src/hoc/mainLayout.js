import React from 'react'
import Sidebar from '@components/Sidebar/Sidebar'

const MainLayout = ({children}) => (
  <>
    <Sidebar />
    <>
      {children}
    </>
  </>
)

export default MainLayout
