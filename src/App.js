import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom"

import './css/App.css';

import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Receipe from './pages/Receipe'

class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <Switch>
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/login' component={Login} />
          <Route history={history} path='/signup' component={SignUp} />
          <Route history={history} path='/receipe' component={Receipe} />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)