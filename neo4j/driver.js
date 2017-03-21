var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j',''));

driver.onComplete = function(){
	console.log('success');
}

driver.onError = function(err) {
	console.log(err);
}



module.exports = driver;