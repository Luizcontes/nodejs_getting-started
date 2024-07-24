import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on('error', () => console.log("Sorry, error!"));

myEmitter.emit('error', new Error("whoops!"));

