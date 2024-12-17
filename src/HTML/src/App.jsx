import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Vendre from './Vendre'
import Accueil from './Accueil'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Accueil}/>
      <Route exact path="/Vendre" component={Vendre}/>
    </Switch>
  </Router>
  )


export default App
