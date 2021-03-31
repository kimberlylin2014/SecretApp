const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/authentication.js');
const loginController = require('../controllers/login.js');
const registerController = require('../controllers/register.js');

router.get('/', authenticationController.test);
router.post('/login', loginController.loginUser);
router.post('/register', registerController.registerUser);

module.exports = router;