import React, { useState, useEffect } from 'react';
import { Header, Home, Promise } from '../config/components'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/promise" component={Promise} />
        </Switch>
      </Router >
    </div>
  )
}


export default App;