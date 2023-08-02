const http = require("http");  // package import

const port = 8081; //port number

http.createServer((request, response)=>{
    // callback func
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello world, server started, hi </h1>");
    response.end();
})
.listen(port, ()=>{
    // callback func
    console.log(`Nodejs Server started running on port ${port}`);
});

// http://localhost:8081/
// node server.js
// npm start
// local - npm run customScriptName
// npm run dev
