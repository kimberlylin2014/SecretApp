import React from 'react';
import Register from './register/register.jsx';
import Login from './login/login.jsx';
import styles from './app.styles.css';
import Home from './home/home.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      currentToken: null
    }
    this.setCurrentUserSession = this.setCurrentUserSession.bind(this);
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

  render() {
    const { currentUser, currentToken } = this.state;
    return (
        <div className={styles.App}>
          <div className={styles.FormSection}>
            {currentUser ? null: <Login setCurrentUserSession={this.setCurrentUserSession}/>}
            {currentUser ? <h1>Welcome {currentUser.name} to the Secret Page!</h1>: null}
          </div>
          {currentUser ? <Home currentUser={currentUser} currentToken={currentToken}/> : null}
        </div>
    );
  }
}

export default App;

