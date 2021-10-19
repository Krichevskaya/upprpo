import React, { Component } from 'react';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import styles from './css/App.module.css';
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Receipe from './pages/Receipe'
import { NavBar } from './components/Navbar';
import { Container, Content, Footer, Header } from 'rsuite';

class App extends Component {
  render() {
    const { history } = this.props

    return (
        <Container className={styles.app}>
          <Header>
            <NavBar/>
          </Header>
          <Content>
            <Switch>
              <Route history={history} path='/home' component={Home}/>
              <Route history={history} path='/login' component={Login}/>
              <Route history={history} path='/signup' component={SignUp} />
              <Route history={history} path='/receipe' component={Receipe} />
              <Redirect from='/' to='/home'/>
            </Switch>
          </Content>
          
            <div className={styles.footer}>
              <p>COCKTAIL WEBSITE</p>
              <p>Made by NSU students</p>
            </div>
          
        </Container>
    );
  }
}

export default withRouter(App)
