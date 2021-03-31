const jwt = require('jsonwebtoken');

const authorizeRequest = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).send('Unauthorized');
  }
  const tokenID = authorization.split(' ')[1];
  jwt.verify(tokenID, process.env.jwt_key, (err, user) => {
    if(err) {
      res.status(400).send('User is no longer authorized')
    } else {
      req.user = {id: user.userID, email: user.email}
      next();
    }
  })
}

module.exports = {
  authorizeRequest: authorizeRequest
}