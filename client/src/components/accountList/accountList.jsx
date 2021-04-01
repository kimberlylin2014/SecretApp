import React from 'react';
import styles from './accountList.styles.css';
import axios from 'axios';
import EntryList from '../entryList/entryList.jsx';

class AccountList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        facebook: 'https://www.flaticon.com/svg/vstatic/svg/1384/1384021.svg?token=exp=1617257503~hmac=10548e146281a9f757177815396d7e56',
        youtube: 'https://www.flaticon.com/svg/vstatic/svg/49/49399.svg?token=exp=1617257581~hmac=400a0014da30d7b9aaf8f613a59c4715'
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
                  <p>{account.account_name}</p>
                </div>

                <EntryList account={account} />
              </div>
            )
          })
        }
        {/* {accounts ? (
          accounts.map((account) => {
            return (
              <div  key={account.account_password}>
                <div className={styles.Info}>
                  <img src={this.state.images[account.account_name]} width='30px'></img>
                  <p>{account.account_name}</p>
                </div>

                <EntryList account={account} />
              </div>
            )
          })
        ): 'not authorized'} */}
      </div>
    )
  }
}

export default AccountList;