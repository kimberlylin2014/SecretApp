import React from 'react';
import {Button } from 'reactstrap';
import PasswordGenerator from '../passwordGenerator/passwordGenerator.jsx';
import AccountList from '../accountList/accountList.jsx';
import styles from './home.styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { currentUser, currentToken } = this.props;
    return (
      <div className={styles.Home}>
        <PasswordGenerator />
        <AccountList currentUser={currentUser} currentToken={currentToken}/>
      </div>
    )
  }
}

export default Home;