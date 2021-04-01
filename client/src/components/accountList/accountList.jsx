import React from 'react';
import styles from './accountList.styles.css';
import axios from 'axios';

class AccountList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: null
    }
  }
  componentDidMount() {
    const { currentUser, currentToken } = this.props;
    const authStr = `Bearer ${currentToken}`;
    axios.get(`/secret/user/${currentUser.user_id}/accounts`, { headers: { Authorization: authStr } })
      .then((resp) => {
        console.log(resp.data)
        this.setState({
          accounts: resp.data
        })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  // componentDidUpdate(prevProp, prevState) {
  //   console.log(prevProp)
  //   console.log(this.props)
  //   if (prevpProp !== this.props) {
  //     const { currentUser, currentToken } = this.props;
  //     console.log(currentUser)
  //     const token = window.sessionStorage.getItem("token");
  //     const authStr = `Bearer ${token}`;
  //     const authStr2 = `Bearer ${currentToken}`;
  //     console.log(authStr)
  //     console.log(authStr2)
  //     axios.get(`/secret/user/${currentUser.user_id}/accounts`, { headers: { Authorization: authStr } })
  //       .then((resp) => {
  //         console.log(resp.data)
  //         this.setState({
  //           account: resp.data
  //         })

  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // }

  render() {
    const { accounts } = this.state;
    return (
      <div className={styles.AccountList}>
        {accounts ? 'have access to accounts' : 'no access'}
      </div>
    )
  }
}

export default AccountList;