var express = require('express');
var router = require('./router');
var app = express();
app.use("/public", express.static("./public"));
app.use("/node_modules", express.static("./node_modules"));
app.engine('html', require('express-art-template'));
app.use(router);
app.listen('7000',() =>{
	console.log('run it ---');
});