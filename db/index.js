var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.mysql_host,
  user     : process.env.mysql_user,
  password : process.env.mysql_password,
  database : process.env.mysql_db
});

connection.connect((err) => {
  if(err) {
    console.log('mysql error connection')
  } else {
    console.log('mysql success')
  }
});

module.exports = connection;
