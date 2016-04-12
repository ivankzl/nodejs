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

/* Abrir un archivo de manera asíncrona */
fs.open('input.txt', 'r+', function(err,fd){

	if (err){
		return console.error(err);
	}
	console.log("Archivo abierto correctamente.");

});

/* Escribir en un archivo existente*/
fs.writeFile ('input.txt', 'Agregamos esta frase al archivo', function(err){
	if (err){
		return console.error(err);
	}

	console.log ("Datos escritos correctamente");
	console.log ("Ahora leemos los datos nuevos");

	fs.readFile('input.txt', function(err, data){
		if (err){
			return console.error(err);
		}
		console.log("Datos nuevos: " + data.toString());
	})
});
