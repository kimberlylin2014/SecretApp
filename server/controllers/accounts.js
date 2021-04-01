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

const addAccount = (req , res) => {
  const {email, account_password, account_name } = req.body;
  const data = {
    user_id: req.user.id,
    account_name,
    account_password,
    email
  };
  accountModel.addAccountByUserID(data, (err, result) => {
    if (err) {
      res.status(400).send('can not get accounts')
    } else {
      res.status(200).send(result)
    }
  })
}

module.exports = {
  getAccounts: getAccounts,
  addAccount: addAccount
}