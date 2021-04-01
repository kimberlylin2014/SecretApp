const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentication.js');
const loginController = require('../controllers/login.js');
const registerController = require('../controllers/register.js');
const accountController = require('../controllers/accounts.js');

router.get('/user/:userID/accounts', authenticationController.authorizeRequest, accountController.getAccounts);
router.post('/login', loginController.handleLogin);
router.post('/register', registerController.registerUser);

module.exports = router;