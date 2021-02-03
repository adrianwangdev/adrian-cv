import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Contact = ({ checkLocation }) => {

  const location = useLocation()
  useEffect(() => {
    checkLocation(location.pathname)
  }, [])
  
  return <h1>Contact</h1>
}

export default Contact
