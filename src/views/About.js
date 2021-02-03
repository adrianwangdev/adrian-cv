import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const About = ({ checkLocation }) => {

  const location = useLocation()
  useEffect(() => {
    checkLocation(location.pathname)
  }, [])

  return <h1>About</h1>
}

export default About
