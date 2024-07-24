import { createServer } from 'node:http';

const hostname: string = '127.0.0.1';
const port: number = 3000;

const server = createServer((req, res): void => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, (): void => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.trace();
});
