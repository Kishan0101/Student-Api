const http = require('http');
const app = require('./app')

const server = http.createServer(app)
server.listen(2000, console.log('app is running on http://localhost:2000'))