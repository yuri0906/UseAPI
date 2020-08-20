const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
const apikey = 'XXXXXXXXXXXXXXXXXXX';

var button = document.getElementById("btn");

button.addEventListener("click", event => {
    var sentence = document.getElementById("sentence").value; //入力文章を取得
    const params = new URLSearchParams();
    params.append("apikey",apikey);
    params.append("sentences",sentence);
    params.append("linenumber",1);
    params.append("separation","。");
    
    axios.post(url,params)
        .then(result =>
            //要約結果を代入、HTMLで表示
            {document.getElementById("summarized").innerHTML = JSON.stringify(result.data.summary[0],null,2);})
        .catch(error => {console.log(error);
    });

});

