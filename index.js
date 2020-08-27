const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
const apikey = 'XXXXXXXXXXXXXXXXXXXXXX';

const button = document.getElementById("btn");

button.addEventListener("click", event => {
    const lang = document.getElementById("lang").value; //言語設定を取得
    const separation = "";　//句読点
    const sentence = document.getElementById("sentence").value; //入力文章を取得
    const linenumber = parseInt(document.getElementById("linenumber").value); //要約文章数を指定

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

    const params = new URLSearchParams(); //パラメータを設定
    params.append('apikey',apikey);
    params.append('sentences',sentence);
    params.append('linenumber',linenumber);
    params.append('separation',separation); 

    axios.post(url,params) 
      .then(result =>{
        console.log(result.data.summary.join(separation) + separation);
        document.getElementById("summarized").innerHTML = result.data.summary.join(separation)+separation;
      })
      .catch(error => {console.log(error);
    });

});