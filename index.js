const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
const apikey = 'DZZftGjQWTvlOiUcrmHoyvwENpdYIb3n';

var sentence = document.getElementById("sentence").value;
var button = document.getElementById("btn");

button.addEventListener("click", event => {
    var sentence = document.getElementById("sentence").value;
    const params = new URLSearchParams();
    params.append("apikey",apikey);
    params.append("sentences",sentence);
    params.append("linenumber",1);
    params.append("separation","。");
    
    axios.post(url,params)
        .then(result =>
            {document.getElementById("summarized").innerHTML = JSON.stringify(result.data.summary[0],null,2);})
        .catch(error => {console.log(error);
    });

});

