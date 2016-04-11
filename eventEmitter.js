var events = require ('events');

var eventEmitter = new events.EventEmitter();

/* listener 1 */
var listener1 = function listener1(){
	console.log('listener1 executed');
}

/* listener 2 */
var listener2 = function listener2(){
	console.log('listener2 executed');
}

/* Asociar el evento conexión con la función listener1 */
eventEmitter.addListener('connection', listener1);

/* Asociar el evento connection con la función listener2 */
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listeners listening to connection event");

eventEmitter.emit('connection');

/*eliminar la asociación del listener1 */
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now");

eventEmitter.emit('connection');

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " listeners listening to connection event");