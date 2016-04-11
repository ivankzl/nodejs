var http = require ("http");
    port = 1234;

var server = http.createServer(function(request, response){
    response.writeHeader(200, {"Content-type": "text/plain"});
    response.write("Hello HTTP!");
    response.end();
});

server.listen(port);
console.log("Server running");
