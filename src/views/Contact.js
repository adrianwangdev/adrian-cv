import React, { useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CatStateContext } from '@utilities/context'

const Contact = () => {

  const location = useLocation()
  const { setSidebarDetail } = useContext(CatStateContext)

  useEffect(() => {
    location.pathname === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }, [])

  return <h1>Contact</h1>
}

export default Contact
