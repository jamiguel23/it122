// import http from 'http';
// import fs from 'fs';

const http = require('http')
const fs  = require('fs');

function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  console.log(__dirname + path)
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer(function(req,res){
  console.log('createServer got request')
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      serveStatic(res, '/home.html', 'text/html');
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('HELLO AGAIN! my name is Matt Miguel and I am a Year Up student and an Intern at Providence Health Services as a JR Software Developer');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer')