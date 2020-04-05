var express = require('express');
var pug = require('pug');
var bodyParser = require('body-parser');

var db = require('./db');

var userRouter = require('./routers/user.router');

var port = 3000;

var app = express();
app.set('view engine','pug');
app.set('views','./views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', function(req, res)
{
	res.render('index', {
		name:'AAA'
	});
});

app.use('/users', userRouter);

app.listen(port,function()
{
	console.log('Server listening on port ' + port);
});