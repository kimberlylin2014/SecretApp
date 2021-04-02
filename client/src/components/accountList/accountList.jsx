import React from 'react';
import styles from './accountList.styles.css';
import axios from 'axios';
import EntryList from '../entryList/entryList.jsx';

class AccountList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        Facebook: './assets/facebook.png',
        Github: './assets/github.png',
        Instagram: './assets/instagram.png',
        Myspace: './assets/myspace.png',
        Twitter: './assets/twitter.png',
        Youtube: './assets/youtube.png',
      }
    }
  }

  render() {
    const { accounts } = this.props;
    return (
      <div className={styles.AccountList}>
        {accounts.map((account) => {
            return (
              <div key={account.account_password}>
                <div className={styles.Info}>
                  <img src={`${this.state.images[account.account_name]}`} width='50px'></img>
                  <p>{account.account_name}</p>
                </div>
                <EntryList account={account} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default AccountList;