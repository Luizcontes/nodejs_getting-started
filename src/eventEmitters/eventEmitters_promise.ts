import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

myEmitter.on("something", async(value) => {
    throw new Error("Kabum!!!");
})

myEmitter.on("error", console.log);

const myEmitter2 = new EventEmitter({ captureRejections: true });

myEmitter2.on("something", async(value) => {
    throw new Error("Kabum!!!");
})

myEmitter2[Symbol.for('nodejs.rejection')] = console.log;
