// document.write("it's Work");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "iyas",
  password: "iyas",
  database: "friends-book-v0.0"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});