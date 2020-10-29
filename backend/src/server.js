const express = require('express');
const server = express();
const routes = require('./routes');
const cors = require('cors');
require('./config/connection');

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);