const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginModel = require('../model/login.js');

const handleLogin = (req, res) => {
  const { email, password } = req.body;
  let userDataForClient;
  loginModel.getUserPasswordFromDB(email)
    .then((hashPw) => {
      return validateCredentials(password, hashPw);
    })
    .then((validated) => {
       if (!validated) {
         return Promise.reject('Wrong password Try Again')
       }
       return loginModel.getUserDataFromDB(email)
    })
    .then((userData) => {
      const {user_id, name} = userData;
      userDataForClient = {
        user_id,
        name,
        email
      }
      return generateAccessToken(user_id, email);
    })
    .then((token) => {
      const tokenAndData = {
        token,
        ...userDataForClient
      }
      res.status(200).send(tokenAndData);
    })
    .catch((err) => {
      res.status(400).send("Can not login. Check password and try again.")
    })
}

const generateAccessToken = (userID, email) => {
  const userJwtObj = {userID, email};
  return new Promise ((resolve, reject) => {
    jwt.sign(userJwtObj, process.env.jwt_key, { expiresIn: '60s' }, function(err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  })
}

const validateCredentials = (textPw, hashPw) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(textPw, hashPw, function(err, result) {
      if (err) {
        reject('Can not validate credentials');
      } else {
        resolve(result);
      }
   });
  });
}

module.exports = {
  handleLogin: handleLogin
}