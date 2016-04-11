var events = require ('events');

var eventEmitter = new events.EventEmitter();

/* creamos un event handler */
var connectHandler = function connected(){
	console.log('connection successful');
	/* lanzamos un evento */
	eventEmitter.emit('data_received');
}

/* asociamos el evento con el handler */
eventEmitter.on('connection', connectHandler);

/* ahora asociamos el evento data_received con la función anónima */
eventEmitter.on('data_received', function(){
	console.log('data received successfully');
});

eventEmitter.emit('connection');
console.log('Program ended');
