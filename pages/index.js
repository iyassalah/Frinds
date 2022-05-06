// const mysql = require('mysql');
// const express = require('express');
// const session = require('express-session');
// const path = require('path');


// const app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));




// app.listen(8080, {

// });


const mysql = require('mysql');
const express = require('express');
const session = require('express-session');
const path = require('path');


const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

var http = require('http');

http.createServer(function (req, res) {

	app.get('/', function(request, response) {
		response.sendFile("login.html");
	})

}).listen(8080);