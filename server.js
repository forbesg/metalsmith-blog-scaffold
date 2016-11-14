var express = require('express');
var server = express();
var port = process.env.PORT || 3000;

// Serve from the Metalsmith created 'build' directory
server.use(express.static(__dirname + '/build'));
console.log(__dirname + '/build');
server.listen(port, function () {
  console.log('Listening on port ' + port);
  console.log('View site at http://localhost:' + port)
});

module.exports = server;
