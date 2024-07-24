import http from 'node:http';

const server = http.createServer((req, res) => {

    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);

    let body: Uint8Array[] = [];
    let msg: string;
    req.on('data', (chunk) => {
        body.push(chunk);
        console.log(`${chunk.toString()}\n`);
    })
    .on('end', () => {
        msg = Buffer.concat(body).toString();
        console.log(msg);
    });


    res.end(JSON.stringify( { response: "nice" } ));
});

server.listen(8080, () => console.log('server started...'));
