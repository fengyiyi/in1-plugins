var express = require('express');
	plugins = require('./plugins');
    //request = require('request');

var app = express.createServer(
    express.bodyParser()
);

app.configure( function () {
    //app.use(app.router);
    app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
    app.set('view options', { layout:'layout.ejs' }); 
    /*
	app.use("/public", express.static(__dirname + '/public'));
	app.use("/styles", express.static(__dirname + '/styles'));
	app.use("/scripts", express.static(__dirname + '/scripts'));
	app.use("/images", express.static(__dirname + '/images'));
    */
});

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/l', function (req, res) {
	res.render('layout',{body:'sdasdfsdf'});
});

app.get('/socialist', plugins.socialist);

var port = process.env.PORT || 3001;
app.listen(port);
console.log('Express app started on port '+ port);