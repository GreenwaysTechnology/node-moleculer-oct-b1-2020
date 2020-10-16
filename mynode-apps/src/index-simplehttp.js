const http = require('http');


//step-1 ; create server
//step 2 ; request-response handler
//req - is variable points to ClientRequest Object
//res - is variable points to ServerResponse Object
const server = http.createServer((req,res)=>{
     //send response ; by calling end; end close the stream and send data
    res.end("Hello,Node")
});

//step 3; start server
server.listen(3000,()=>{
    console.log(`Http Server listens @ ${3000}`)
});
