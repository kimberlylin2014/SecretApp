const accountModel = require('../model/accounts.js');

const getAccounts = (req , res) => {
  accountModel.getAccountsByUserID(req.user.id, (err, result) => {
    if (err) {
      res.status(400).send('can not get accounts')
    } else {
      res.status(200).send(result)
    }
  })
}

module.exports = {
  getAccounts: getAccounts
}