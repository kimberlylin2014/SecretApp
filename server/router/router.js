const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentication.js');
const loginController = require('../controllers/login.js');
const registerController = require('../controllers/register.js');

router.get('/home', authenticationController.authorizeRequest, (req, res) => {
  console.log(req.user)
  res.send('welcome to the secret home page bby!')
});
router.post('/login', loginController.handleLogin);
router.post('/register', registerController.registerUser);

module.exports = router;