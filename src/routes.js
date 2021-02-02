import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/styles/globalStyle'
import LightMode from './themes/lightMode'
import DarkMode from './themes/darkMode'

/* HOC */
import MainLayout from './hoc/mainLayout'

/* Views */
import Home from './views/Home'
import About from './views/About'
import Experience from './views/Experience'
import Project from './views/Project'
import Contact from './views/Contact'

const Routes = () => {

  const [lightTheme, setLightTheme] = useState(true)

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme ? LightMode : DarkMode}>
        <MainLayout>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </MainLayout>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default Routes
