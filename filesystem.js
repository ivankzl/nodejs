var fs = require("fs");

/* Lectura asíncrona */
fs.readFile('input.txt', function (err, data){

	if (err){
		return console.error(err);
	}

	console.log ("Lectura asíncrona: " + data.toString());

});

/* Lectura síncrona */
var data = fs.readFileSync('input.txt');

console.log("Lectura síncrona: " + data.toString());
