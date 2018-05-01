var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

var config = require('./config/server.js');

// SERVER SETTING
var app = express();
var PORT = config.port;

// 미들웨어 셋팅
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'public'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan(':date[iso][Access] -> :method :url :status :response-time ms - :res[content-length]\13'));

// 서버 시작
app.listen(PORT, function(){
	console.info("Server's running at : " + PORT);
});
