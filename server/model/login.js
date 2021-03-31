const db = require('../../db/index.js');

const handleLogin = () => {

}

const getUserPasswordFromDB = (email) => {
  return new Promise ((resolve, reject) => {
    const queryString = `SELECT password FROM users WHERE email='${email}'`;
    db.query(queryString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0].password);
      }
    })
  })
}

module.exports = {
  handleLogin: handleLogin,
  getUserPasswordFromDB: getUserPasswordFromDB
}