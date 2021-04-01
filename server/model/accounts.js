const db = require('../../db/index.js');

const getAccountsByUserID = (userID, callback) => {
  const queryStr = `SELECT account_name, email, account_password FROM accounts WHERE user_id=${userID}`;
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const accountsData = [];
      for (let i = 0; i < results.length; i++) {
        accountsData.push({
          account_name: results[i].account_name,
          email: results[i].email,
          account_password: results[i].account_password
        })
      }
      callback(null, accountsData)
    }
  })
}

const addAccountByUserID = (data, callback) => {
  const {
    user_id,
    account_name,
    account_password,
    email
  } = data;
  const queryStr =
  `INSERT INTO accounts(email, account_name, account_password, user_id) VALUES('${email}', '${account_name}', '${account_password}', ${user_id})`;
  db.query(queryStr, (err, results) => {
    if (err) {
      callback(err);
    } else {
      const accountsData = [{account_name: data.account_name, email: data.email, account_password: data.account_password}];
      callback(null, accountsData)
    }
  })
}

module.exports = {
  getAccountsByUserID: getAccountsByUserID,
  addAccountByUserID: addAccountByUserID
}