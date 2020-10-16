const { findAll } = require('./services/TodoService');
const http = require('http');

const port = 3000;

const server = http.createServer(async (req, res) => {
    const todos = await findAll();
    //set content-type, status code header
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(todos);

});

server.listen(port, () => { console.log(`TodoServer is running @ ${port}`) })

