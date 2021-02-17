import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CatStateContext } from '@utilities/context'
import GlobalStyle from '@components/globalStyle'
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
  const [windowHeight, setWindowHeight] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getWindowHeight = () => {
    setWindowHeight(window.innerHeight)
    console.log(windowHeight)
  }

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme ? LightMode : DarkMode}>
        <CatStateContext.Provider
          value={{ sidebarDetail, setSidebarDetail, isMenuOpen, setIsMenuOpen }}
        >
          <MainLayout context={CatStateContext}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </MainLayout>
        </CatStateContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routes
