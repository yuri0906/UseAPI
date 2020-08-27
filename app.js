var http = require('http');   
var fs = require("fs");         
var url = require("url");
 
var server = http.createServer();    
server.on("request", doRequest).listen(8080, '127.0.0.1');
console.log("server runnnig");

function doRequest(req, res){
  fs.readFile('./index.html', 'UTF-8', function(err, data){
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
  });
}

function showSummary(sentences){
  var options = {
    uri: url,
    json: true,
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    form: {
      "apikey": apikey,
      "sentences": sentences
    }
  };
  request.post(options, function(error, response, body){
     console.log(body.summary[0]);
     return body.summary[0]; 
  }); 
};
