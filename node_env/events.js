const { count } = require('console');

const EventEmitter = require('events').EventEmitter;

class Counter extends EventEmitter{
	constructor(init) {
		super();
		this.init = init;
	}
	increment() {
		this.init++;
		this.emit('incremented', this.init);
	}
}
const counter = new Counter(10);
const callback = function (count) {
	console.log(count);
}
counter.addListener('incremented', callback);
counter.increment();
counter.increment();
