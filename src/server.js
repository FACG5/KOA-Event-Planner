const http = require('http');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const router = require('./router');
const build = require('../database/db_build');

build();
const server = http.createServer(router);
server.listen(port, () => {
    console.log("The Server is runing on port ---> ", port);
});