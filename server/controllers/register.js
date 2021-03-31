const bcrypt = require('bcrypt');
const registerModel = require('../model/register.js');

const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  hashPassword(password, 10)
    .then((hash) => {
      const registerData = {
        name,
        email,
        hash
      }
      registerModel.registerUserToDB(registerData, (err, resp) => {
        if (err) {
          res.status(400).send('user already exists')
        } else {
          res.status(200).send('register success');
        }
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send('can not hash password');
    })
}

const hashPassword = (plainTextPassword, salt=10) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainTextPassword, salt, function(err, hash) {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

module.exports = {
  registerUser: registerUser
}