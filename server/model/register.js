const db = require('../../db/index.js');

const registerUserToDB = (registerData, callback) => {
  const { name, email, hash } = registerData;
  const queryString = `INSERT INTO users (name, email, password) VALUES('${name}', '${email}', '${hash}');`
  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, err);
    }
  });
}

module.exports = {
  registerUserToDB: registerUserToDB
}