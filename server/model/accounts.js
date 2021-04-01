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

module.exports = {
  getAccountsByUserID: getAccountsByUserID
}