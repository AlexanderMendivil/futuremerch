import React from "react"
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={} />
          <Route path="/admin" component={} />
          */}
        </Switch>
    </div>
  </Router>
    
  );
}

export default App;
