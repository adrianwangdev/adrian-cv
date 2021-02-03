import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Project = ({ checkLocation }) => {

  const location = useLocation()
  useEffect(() => {
    checkLocation(location.pathname)
  }, [])
  
  return <h1>Project</h1>
}

export default Project
