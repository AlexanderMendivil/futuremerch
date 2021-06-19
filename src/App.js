import React from "react"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Admin from "./components/Admin/Admin"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/dev" component={Admin} />
         
        </Switch>
    </div>
  </Router>
    
  );
}

export default App;
