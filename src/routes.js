import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/* HOC */
import MainLayout from './hoc/mainLayout'

/* Views */
import Home from './views/Home'
import About from './views/About'
import Experience from './views/Experience'
import Project from './views/Project'
import Contact from './views/Contact'

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </MainLayout>
  </Router>
)

export default Routes
