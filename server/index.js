const http = require('http');
const static = require('node-static');
const Server = static.Server;
const file = new Server('.');
const port = 1234;

const app = http.createServer(function(req, res) {
  file.serve(req, res);
});

app.listen(port);

console.log(`Server running on port ${port}`);