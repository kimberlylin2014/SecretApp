const bcrypt = require('bcrypt');
const loginModel = require('../model/login.js');

const handleLogin = (req, res) => {
  const { email, password } = req.body;
  loginModel.getUserPasswordFromDB(email)
    .then((hashPw) => {
      return validateCredentials(password, hashPw);
    })
    .then((validated) => {
       if (!validated) {
         return Promise.reject('Wrong password Try Again')
       }
       res.send('success')
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send("Can not login. Check password and try again.")
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