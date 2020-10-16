const http = require('http');
const { log } = console;

//http events 
const server = http.createServer((req, res) => {

    res.end("Hello,Node")

    let body = ''
    req.on('data', (chunk) => {
        body += chunk;
        log(body);
    });

    res.on('close', () => {
        log('response close event is called')
    });
    res.on('finish', () => {
        log('response has been sent /committed')
    });
});

server.listen(3000, () => {
    console.log(`Http Server listens @ ${3000}`)
});

//server events
server.on('request', (request, response) => {
    log(`${request.method} ${request.url}`)
});