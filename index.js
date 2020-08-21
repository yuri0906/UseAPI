new Vue({
    el: '#app',
    data: function () {
        return {
            summary: ""
        };
    },
    methods: {
        showMessage: function () {
            const url = 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1';
            const apikey = 'DZZftGjQWTvlOiUcrmHoyvwENpdYIb3n';
            var params = new URLSearchParams();
            params.append("apikey",apikey);
            params.append("sentences", document.querySelector('textarea').value);
            axios.post(url,params)
                .then(response =>{
                    this.summary = JSON.stringify(response.data.summary[0],null,2);
            }).catch(error => {
                    return error;
            });
        }
    }
});