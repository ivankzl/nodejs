var buf1 = new Buffer(256);

var buf2 = new Buffer("Nuevo buffer");

len = buf1.write("Estoy escribiendo en un buffer");

console.log ("Octetos escritos: " +  len);

var buf3 = Buffer.concat([buf1, buf2]);

console.log("Concatenados: " + buf3.toString());