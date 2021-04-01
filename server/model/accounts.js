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
          account_name: results[0].account_name,
          email: results[0].email,
          account_password: results[0].account_password
        })
      }
      console.log('results from db')
      console.log(results)
      console.log(accountsData)
      callback(null, accountsData)
    }
  })
}

module.exports = {
  getAccountsByUserID: getAccountsByUserID
}