const http = require("http");

function fnListener(req, res) {}

http.createServer(fnListener);

// Using Annomymous Function
http.createServer(function (req, res) {});

// arrow functon

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
