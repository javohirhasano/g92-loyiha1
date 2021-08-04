import { Switch, Route } from 'react-router-dom'
import './App.css';
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Header from './Container/Header';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="conatiner">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/about" >
            <About></About>
          </Route>
          <Route path="/dashboard" >
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </div >
  )
}
export default App;