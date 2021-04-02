import React from 'react';
import {Button } from 'reactstrap';
import PasswordGenerator from '../passwordGenerator/passwordGenerator.jsx';
import AccountList from '../accountList/accountList.jsx';
import styles from './home.styles.css';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    }
    this.addAccountForUser = this.addAccountForUser.bind(this);
  }

  componentDidMount() {
    const { currentUser, currentToken } = this.props;
    const authStr = `Bearer ${currentToken}`;
    axios.get(`/secret/user/${currentUser.user_id}/accounts`, { headers: { Authorization: authStr } })
      .then((resp) => {
        this.setState({
          accounts: [...resp.data]
        })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  addAccountForUser(newAccount) {
    const { currentUser, currentToken } = this.props;
    const authStr = `Bearer ${currentToken}`;
    axios.post(`/secret/user/${currentUser.user_id}/newAccount`, newAccount, { headers: { Authorization: authStr } })
      .then((resp) => {
        this.setState({
          accounts: [...this.state.accounts, ...resp.data]
        })
      })
      .catch((err) => {
        console.log(err);
        const { endUserSession } = this.props;
        endUserSession();
      })
  }

  render() {
    const { currentUser, currentToken, addAccountForUser } = this.props;
    const { accounts } = this.state;
    return (
      <div className={styles.Home}>
        <PasswordGenerator currentUser={currentUser} addAccountForUser={addAccountForUser} addAccountForUser={this.addAccountForUser} />
        <AccountList currentUser={currentUser} currentToken={currentToken} accounts={accounts}/>
      </div>
    )
  }
}

export default Home;