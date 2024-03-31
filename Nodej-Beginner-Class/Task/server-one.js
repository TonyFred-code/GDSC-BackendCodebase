const http = require('http');
const date = require('./time-mod');


http.createServer(
  function (req, res) {
      res.writeHead(
          200,{
              'content-type':'text/html'});
              res.write('The time: ' + ' ' + date())
              res.end();
          }
).listen(8080);