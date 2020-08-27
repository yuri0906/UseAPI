const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
const apikey = 'XXXXXXXXXXXXXXXXXX';

var button = document.getElementById("btn");

button.addEventListener("click", event => {
    var lang = document.getElementById("lang").value; //言語設定を取得
    var separation = "";　//句読点
    var sentence = document.getElementById("sentence").value; //入力文章を取得
    //言語によって句読点分岐
    switch (lang){
        case "ja":
          separation = "。";
          break;
        case "en":
            separation = ".";
          break;
        default:
            console.log('言語を選択してください');
      }

    const params = new URLSearchParams();
    params.append("apikey",apikey);
    params.append("sentences",sentence);
    params.append("linenumber",1);
    params.append("separation",separation);
    
    axios.post(url,params)
        .then(result =>
            //要約結果を代入、HTMLで表示
            {document.getElementById("summarized").innerHTML = JSON.stringify(result.data.summary[0],null,2);})
        .catch(error => {console.log(error);
    });

});

