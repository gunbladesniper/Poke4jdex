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

app.get('/types',(req, res)=>{
	session.run('MATCH (n:TYPE) RETURN n')
	.then((results)=>{
		res.send(results.records);
	})
	.catch((err)=>{
		console.log('you messed up', err);
	})
})

app.get('/pokemon', (req, res)=>{
	session.run('MATCH (n:POKEMON) RETURN n ORDER BY toInt(n.pokedexId)')
	.then((results)=>{
		res.send(results.records);
		// res.sendFile(path.resolve(__dirname,'..', 'react_client','public','index.html'));
	})
	.catch((err)=>{
		console.log('you messed up', err);
	})
})


var server = app.listen(3000, function(){
	console.log('listening on port 3000')
})