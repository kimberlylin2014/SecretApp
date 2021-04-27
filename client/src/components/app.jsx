import React from 'react';
import Register from './register/register.jsx';
import Login from './login/login.jsx';
import styles from './app.styles.css';
import Home from './home/home.jsx';
import Header from './navbar/navbar.jsx';
import WarningSession from './warningSession/warningSession.jsx';
import axios from 'axios';
import TestLogin from './test.login.jsx';
import SecretPage from './test.secret.jsx';
import { Route, Switch, Link, Redirect } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      currentToken: null,
      sessionEndWarning: false,
    }
    this.setCurrentUserSession = this.setCurrentUserSession.bind(this);
    this.endUserSession = this.endUserSession.bind(this);
    this.handleCancelSessionWarning = this.handleCancelSessionWarning.bind(this);
  }

  componentDidMount() {
    window.sessionStorage.removeItem("token");
  }

  setCurrentUserSession(userData) {
    const { token, email, name, user_id } = userData;
    const user = {name, email, user_id};
    this.setState({
      currentToken: token,
      currentUser: user
    }, () => {
      window.sessionStorage.setItem("token", this.state.currentToken);
    });
  }

  endUserSession() {
    window.sessionStorage.removeItem("token");
    this.setState({
      currentToken: null,
      currentUser: null,
      sessionEndWarning: true
    })
  }

  handleCancelSessionWarning() {
    this.setState({
      sessionEndWarning: false
    })
  }

  render() {
    const { currentUser, currentToken, sessionEndWarning } = this.state;
    return (
        <div className={styles.App}>
            <Header currentUser={currentUser}/>
            <WarningSession sessionEndWarning={sessionEndWarning} handleCancelSessionWarning={this.handleCancelSessionWarning}/>
            <div className={styles.Container}>
            <Switch>
                <Route exact path='/' render={() => {
                  return currentUser ? <Redirect to='/home' /> : (
                  <div className={styles.FormSection}>
                    <Login setCurrentUserSession={this.setCurrentUserSession}/>
                  </div>)
                }} />
                <Route exact path='/home' render={() => {
                  return currentUser ? <Home currentUser={currentUser} currentToken={currentToken} endUserSession={this.endUserSession}/> : <Redirect to='/'/>
                }}/>
            </Switch>
            </div>
        </div>
    );
  }
}

export default App;

