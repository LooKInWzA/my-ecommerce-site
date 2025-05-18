var http = require('http');

http.createServer(function (req, res) {
    res.setHeader('Access-control-Allow-Origin','*')
    res.setHeader('Access-control-Allow-Methods','GET,POST')
    res.setHeader('Access-control-Allow-Headers','Content-Type')

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"contactSubject":["General Enquery","Classes","Schedules","Instructer","Prices","Other"]}');
}).listen(5000);