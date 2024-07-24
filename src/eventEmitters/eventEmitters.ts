import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

let m = 0;

myEmitter.once('event', function (a, b) {

  console.log(++m);
});

myEmitter.emit('event');

myEmitter.emit('event');
