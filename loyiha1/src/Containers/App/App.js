import React from 'react';
import { Button } from 'reactstrap'
import "./App.css"
import logo from './logo.svg';
import { Switch, Link, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container d-flex justify-content-between align-items-center">
          <img src={logo} className="logo"></img>
          <ul>
            <li><Link to="/" className="ms-3 "> Home</Link> </li>
            <li><Link to="/about" className="ms-3 "> About</Link> </li>
            <li><Link to="/dashboard" className="ms-3 "> Dashboard</Link> </li>
          </ul>
        </div>
      </header>
      <div className="conatiner">
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/about" >
            <h1>About</h1>
          </Route>
          <Route path="/dashboard" >
            <h1>Dashboard</h1>
          </Route>
        </Switch>
      </div>
    </div >
  )
}
export default App;