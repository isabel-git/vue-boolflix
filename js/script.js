const apiFilms = "https://api.themoviedb.org/3/search/movie?api_key=bbed237dc6562aa068a11a0bbcb33c30&query=ritorno+al+futuro&language=it-IT"

var app = new Vue({
  el: '#app',
  data: {
    films: []
  },
  mounted: function () {
    axios.get(apiFilms)
      .then(risposta => {

        // this.films = risposta.data;
        // console.log(this.films);
      });

  }

});