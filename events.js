const EventEmitter = require('events').EventEmitter;
const Counter = function(init){
	this.increment = function() {
		init++;
		this.emit('incremented',init);
	}
}

Counter.prototype = new EventEmitter();
const counter = new Counter(10);
const callback = function(count) {
	console.log(count);
}
counter.addListener('incremented',callback);
counter.increment();
counter.increment();

