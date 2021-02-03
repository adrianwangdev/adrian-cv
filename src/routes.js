import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@components/styles/globalStyle'
import LightMode from '@themes/lightMode'
import DarkMode from '@themes/darkMode'

/* HOC */
import MainLayout from './hoc/mainLayout'

/* Views */
import Home from '@views/Home'
import About from '@views/About'
import Experience from '@views/Experience'
import Project from '@views/Project'
import Contact from '@views/Contact'

const Routes = () => {

  const [lightTheme, setLightTheme] = useState(true)
  const [sidebarDetail, setSidebarDetail] = useState(false)

  // if user not at Home page -> show sidebar detail 
  const checkLocation = (location) => {
    location === '/'
      ? setSidebarDetail(false)
      : setSidebarDetail(true)
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme ? LightMode : DarkMode}>
        <MainLayout sidebarDetail={sidebarDetail}>
          <Switch>
            <Route exact path="/" component={() => <Home checkLocation={checkLocation} />} />
            <Route path="/about" component={() => <About checkLocation={checkLocation} />} />
            <Route path="/experience" component={() => <Experience checkLocation={checkLocation} />} />
            <Route path="/project" component={() => <Project checkLocation={checkLocation} />} />
            <Route path="/contact" component={() => <Contact checkLocation={checkLocation} />} />
          </Switch>
        </MainLayout>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routes
