import http from 'node:http';

const server = http.createServer((req, res) => {

    const { headers, url, method } = req;

    let body: Uint8Array[] = [];

    let msgBody: string;
    
    req.on('data', (chunk) => {
        body.push(chunk);
        // console.log(`${chunk.toString()}\n`);
    })
        .on('end', () => {
            // msgBody = Buffer.concat(body).toString();
            console.log(msgBody);
        });

    res.on('error', (error) => console.log(error));

    // res.statusCode = 400;
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.setHeader('X-Powered-By', 'bacon');
    // res.setHeader('Connection', 'Keep Alive');

    // res.write('<html>');
    // res.write('<body>');
    // res.write('<h1>Hello, World!</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end(JSON.stringify({ res: "nice" }));

    msgBody = Buffer.concat(body).toString();

    const responseBody = { headers, method, url, msgBody };

    res.end(JSON.stringify(responseBody));

});

server.listen(8080, () => console.log('server started...'));
