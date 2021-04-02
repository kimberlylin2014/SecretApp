import React from 'react';
import Register from './register/register.jsx';
import Login from './login/login.jsx';
import styles from './app.styles.css';
import Home from './home/home.jsx';
import Header from './navbar/navbar.jsx';
import axios from 'axios';
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
            <div className={styles.Container}>
              {sessionEndWarning ? (
              <div className={styles.WarningSession}>
                <img src="/assets/cancel.png" width='20px' onClick={this.handleCancelSessionWarning}></img> <p >User Session Ended! Please Sign Back In</p>
              </div>
              ) : null}
              <div className={styles.FormSection}>
                {currentUser ? null: <Login setCurrentUserSession={this.setCurrentUserSession}/>}
              </div>
              {currentUser ? <Home currentUser={currentUser} currentToken={currentToken} endUserSession={this.endUserSession}/> : null}
            </div>
        </div>
    );
  }
}

export default App;

