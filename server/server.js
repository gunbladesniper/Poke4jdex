var express = require('express');
var app = express();
var driver = require('../neo4j/driver.js');



var session = driver.session()

var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../react_client/public')));
app.use(express.static(path.join(__dirname, '../react_client/dist')));

app.get('/pokemon', (req, res)=>{
	console.log('get is happening?')
	session.run('MATCH (n:POKEMON) RETURN n')
	.then((results)=>{
		console.log(results.records[3]._fields)
		res.sendFile(path.resolve(__dirname,'..', 'react_client','public','index.html'));
	})
	.catch((err)=>{
		console.log('you messed up', err);
	})
})


var server = app.listen(3000, function(){
	console.log('listening on port 3000')
})