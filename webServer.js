const http = require('http');
const url = require("url");
const fs = require('fs');
const path = require('path');

var server = http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //var q = url.parse(req.url, true).query;
  //var txt = q.fname + " " + q.lname;
  var q = url.parse(req.url,true);
  var FilePath = "."+req.url;
  if( FilePath === "./")FilePath = "./index.html";

  const extname = path.extname(FilePath);
  let ContentTybe = "text/html";
  if (extname ==='.css') ContentTybe = "text/css";
  if (extname ==='.xml') ContentTybe = "text/xml";

  fs.readFile(FilePath,function(err,htmlDoc){
    if(err){
        res.writeHead(404,{'Content-Type': 'text/html'});
        return res.end("404 File not Found !!!!");
    }
    res.writeHead(200, {'Content-Type': ContentTybe});
    res.write(htmlDoc);
    res.end();

  });
  
  
})

server.listen(8080);
