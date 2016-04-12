/* __filename representa el nombre del archivo del código que se está ejecutando. */

console.log (__filename);

/* __dimame representa el nombre del directorio en el que se está ejecutando el codigo */

console.log (__dirname);

/* setTimeout(cb,ms) es una función global usada para ejecutar el callback cb luego de al menos ms milisegundos */

function printHello(){
	console.log("Hola mundo");
}

setTimeout(printHello, 200);