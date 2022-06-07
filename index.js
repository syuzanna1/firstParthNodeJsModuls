
// const assert = require('node:assert');

// Legacy assertion mode#
// Legacy assertion mode uses the == operator in:
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// assert.equal([5], [5]);
// assert.notDeepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
// assert.notEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

// const { message } = new assert.AssertionError({
//     actual: 1,
//     expected: 2,
//     operator: 'strictEqual'
//   });
  
//   // Verify error output:
//   try {
//     assert.strictEqual(1, 2);
//   } catch (err) {
//     assert(err instanceof assert.AssertionError);
//     assert.strictEqual(err.message, message);
//     assert.strictEqual(err.name, 'AssertionError**');
//     assert.strictEqual(err.actual, 1);
//     assert.strictEqual(err.expected, 2);
//     assert.strictEqual(err.code, 'ERR_ASSERTION**');
//     assert.strictEqual(err.operator, 'strictEqual');
//     assert.strictEqual(err.generatedMessage, true);
//   }

// const obj1 = {
//   a: {
//     b: 1
//   }
// };
// const obj2 = {
//   a: {
//     b: 2
//   }
// };
// const obj3 = {
//   a: {
//     b: 1
//   }
// };
// const obj4 = Object.create(obj1);
// assert.deepEqual(obj1,obj4)


// const tracker = new assert.CallTracker();

// function func() {}

// // Returns a function that wraps func() that must be called exact times
// // before tracker.verify().
// const callsfunc = tracker.calls(func, 2);

// callsfunc();

// // Will throw an error since callsfunc() was only called once.
// tracker.verify();

// assert.deepStrictEqual({ a: 1 }, { a: '1' });

// const symbol1 = Symbol();
// const symbol2 = Symbol();
// // assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
// assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });

// assert.doesNotMatch('I will pass', /different[,'This is for check']/ );
// assert.doesNotMatch('I will pass', /123[,'This is for check']/ );
// // assert.doesNotMatch('I will pass', /will[,'This is for check']/ );
// assert.doesNotMatch('I will pass', /will/ );
// assert.match('I will pass', /pass/);
// assert.match('I will pass', /different/);
// assert.ok(!false['interesting'])
// assert.ok(false['interesting'])
// // assert.ok(0['interesting'])
// assert.ok('test'['interesting'])
////////////////////////////////////////////////////////////////
// console.log('hello %s', 'world');
// console.error(new Error('Whoops, something bad happened'));

// const out = getStreamSomehow();
// const err = getStreamSomehow();
// const myConsole = new console.Console(out, err);

// myConsole.log('hello world');
// const name = 'Will Robinson';
// myConsole.warn(`Danger ${name}! Danger!`);
// const  Console  = require('node:console');
// const fs = require('node:fs')
// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// const logger = new Console({ stdout: output, stderr: errorOutput });
// const count = 5;
// logger.log('count: %d', count);
// console.count('abc','','2')
// console.count('abc')
// console.countReset()
// console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a'])
// const os = require('node:os');
// console.log(os.arch())

// const EventEmitter = require('node:events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// // myEmitter.on('event', () => {
// //   console.log('an event occurred!');
// // });
// // myEmitter.emit('event');
// // const myEmitter = new MyEmitter();
// // myEmitter.on('event', function(a, b) {
// //   console.log(a, b, this, this === myEmitter);
// // });
// // myEmitter.emit('event', 'a', 'b');


// // myEmitter.on('event', (a, b) => {
// //     setImmediate(() => {
// //       console.log('this happens asynchronously');
// //     });
// // //   });
// // myEmitter.on('event', (a, b) => {
// //     process.nextTick(() => {
// //       console.log('this happens asynchronously');
// //     });
// //   });
// //   myEmitter.emit('event', 'a', 'b');
// const events = require('node:events');
// // const ee1 = new EventEmitter({ captureRejections: true });
// // ee1.on('something', async (value) => {
// //   throw new Error('kaboom');
// // });

// // ee1.on('error', console.log);

// // const ee2 = new EventEmitter({ captureRejections: true });
// // ee2.on('something', async (value) => {
// //   throw new Error('kaboom');
// // });

// // ee2[Symbol.for('nodejs.rejection')] = console.log;
// // events.captureRejections = true;
// // const ee1 = new events.EventEmitter();
// // ee1.on('something', async (value) => {
// //   throw new Error('kaboom');
// // });

// // ee1.on('error', console.log);
// const ee = new EventEmitter();

// function pong() {
//   console.log('pong');
// }

// ee.on('ping', pong);
// ee.once('ping', pong);
// ee.removeListener('ping', pong);

// // ee.emit('ping');
// // ee.emit('ping');
// const newListeners = ee.rawListeners('ping');
// newListeners[0]();

// const   open  = require ('node:fs/promises');
// *****not working
// let filehandle;
// try {
//   filehandle =  open('main.js', 'r');
// } finally {
//    filehandle?.close();
// }

// const fd = open('sample.txt');
// fd.createReadStream({ start: 1, end: 2 });

const http = require('node:http');
// let options = {}
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);

// const net = require('node:net');
// const { URL } = require('node:url');

// // Create an HTTP tunneling proxy
// const proxy = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('okay');
// });
// proxy.on('connect', (req, clientSocket, head) => {
//     // Connect to an origin server
//     const { port, hostname } = new URL(`http://${req.url}`);
//     const serverSocket = net.connect(port || 80, hostname, () => {
//       clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                       'Proxy-agent: Node.js-Proxy\r\n' +
//                       '\r\n');
//       serverSocket.write(head);
//       serverSocket.pipe(clientSocket);
//       clientSocket.pipe(serverSocket);
//     });
//   });
//   proxy.listen(1337, '127.0.0.1', () => {

//     // Make a request to a tunneling proxy
//     const options = {
//       port: 1337,
//       host: '127.0.0.1',
//       method: 'CONNECT',
//       path: 'www.google.com:80'
//     };
//     const req = http.request(options);
//     req.end();
  
//     req.on('connect', (res, socket, head) => {
//       console.log('got connected!');
  
//       // Make a request over an HTTP tunnel
//       socket.write('GET / HTTP/1.1\r\n' +
//                    'Host: www.google.com:80\r\n' +
//                    'Connection: close\r\n' +
//                    '\r\n');
//       socket.on('data', (chunk) => {
//         console.log(chunk.toString());
//       });
//       socket.on('end', () => {
//         proxy.close();
//       });
//     });
//   });  

// const options = {
//     host: '127.0.0.1',
//     port: 8080,
//     path: '/length_request'
//   };
  
//   // Make a request
//   const req = http.request(options);
//   req.end();
  
//   req.on('information', (info) => {
//     console.log(`Got information prior to main response: ${info.statusCode}`);
//   });

// const options = {
//     host: 'www.google.com',
//   };
//   const req = http.get(options);
//   req.end();
//   req.once('response', (res) => {
//     const ip = req.socket.localAddress;
//     const port = req.socket.localPort;
//     console.log(`Your IP address is ${ip} and your source port is ${port}.`);
//     // Consume response object
//   });