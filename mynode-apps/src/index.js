const express = require('express');
const MessageRouter = require('./routers/messagerouter');
const BooksRouter = require('./routers/booksrouer');
const bodyParser = require('body-parser');


const { log } = console;
const port = 3000;
//create application object
const app = express();

//bind parsers
app.use(bodyParser.json())

//connect Routers with application object
app.use('/api/message',MessageRouter)
app.use('/api/books',BooksRouter);


app.get('/', (request, response) => {
    response.end('Home')
});
//start server
app.listen(port, () => {
    log('Express server is running @', port);
});
