import React from 'react';
import Register from './register/register.jsx';
import Login from './login/login.jsx';
import styles from './app.styles.css';

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
    return (
        <div className={styles.App}>
          <div className={styles.FormSection}>
            {/* <Register /> */}
            {this.state.currentUser ? `${this.state.currentUser.name}has access to secret page`: null}
            <Login setCurrentUserSession={this.setCurrentUserSession}/>
          </div>
        </div>
    );
  }
}

export default App;

