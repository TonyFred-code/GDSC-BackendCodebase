var http = require("http"); // call my module
var tellDatetime = require('./modOne');

http.createServer(
    function (req, res) {
        res.writeHead(
            200,{
                'content-type':'text/html'});
                res.write('<h1>Alfred the time is</h1>' +tellDatetime.myDateTime());
                res.write('Hello' +' '+  tellDatetime.intro());
                res.end();
            }
).listen(8080);
