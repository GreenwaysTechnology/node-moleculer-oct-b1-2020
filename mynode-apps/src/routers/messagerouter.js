const express = require('express');
const { log } = console;

const router = express.Router();

router.get('/hai', (request, response) => {
    response.end('Hi')
});
router.get('/hello', (request, response) => {
    response.end('Hello')
});
router.get('/hello/:name', (request, response) => {
    //read parameter
    const name = request.params.name;
    log(name);
    response.end('Hello' + name);
});
router.post('/hello', (request, response) => {
    //read data  from client
    let body = ''
    request.on('data', chunk => {
        body += chunk;
    });
    request.on('end', () => {
        response.end('Hello -POST' + body);
    });

});
router.put('/hello', (request, response) => {
    response.end('Hello -PUT')
});
router.delete('/hello', (request, response) => {
    response.end('Hello -DELETE')
});

module.exports = router;
