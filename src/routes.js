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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const details = {
    cnName: '王柔燁',
    enName: 'Adrian',
    birth: '1994-06-08',
    phone: '+886 910 319 855',
    email: 'adrianwangdev@gmail.com',
    city: '新北市',
    job: '前端工程師',
    isMarried: false,
    drivingLicense: ['普通重型機車駕照', '普通小型車駕照'],
  }

  const contextValues = {
    sidebarDetail, setSidebarDetail, isMenuOpen, lightTheme, setIsMenuOpen, setLightTheme, details
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={lightTheme ? LightMode : DarkMode}>
        <CatStateContext.Provider value={contextValues}>
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
