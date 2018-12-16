var express = require('express');
var router = require('./router');
var app = express();
app.use(router);
app.listen('7000',() =>{
	console.log('run it ---');
});