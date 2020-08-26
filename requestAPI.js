/**
 * nodeでAPIを叩く
 */

module.exports = function(sentences){
  const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
  const apikey = 'DZZftGjQWTvlOiUcrmHoyvwENpdYIb3n';
  var request = require('request');
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