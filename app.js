// We require http module from npm who is used to create a server and communicate server with an user 
const http = require('http');
// fs module contains a read file and we use it to read html file
const fs = require('fs').promises;
const date = require('./myDate');

http.createServer(function (req, res){
    let dateInstance = date.module();
    res.writeHead(200, {"content-Type": "aplication/json"})
    res.write(dateInstance);
    res.end
}).listen(3030, console.log('The port 3030 is listening'));

// Here we can read an html file with fs module and send it to the client
// http.createServer(function(req, res){
//     fs.readFile(__dirname + "./index.html")
//         .then (contents => {
//             res.setHeader("content-Type", "text/html");
//             res.writeHead(200);
//             res.end(contents);
//         })
//         .catch(err => {
//             res.writeHead(500);
//             res.end(err);
//             return;
//         });
// });
