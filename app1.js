const http = require("http");

const express = require("express");

const app = express();

// arrow functon

const server = http.createServer(app);

server.listen(3000);
