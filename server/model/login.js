const db = require('../../db/index.js');

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

const getUserDataFromDB = (email) => {
  return new Promise((resolve, reject) => {
    const queryString = `SELECT user_id, name FROM users WHERE email='${email}'`;
    db.query(queryString, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0])
      }
    })
  })
}

module.exports = {
  getUserPasswordFromDB: getUserPasswordFromDB,
  getUserDataFromDB: getUserDataFromDB
}