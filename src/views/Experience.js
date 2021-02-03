import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Experience = ({ checkLocation }) => {

  const location = useLocation()
  useEffect(() => {
    checkLocation(location.pathname)
  }, [])
  
  return <h1>Experience</h1>
}

export default Experience
