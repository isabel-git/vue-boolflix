
var app = new Vue({
  el: '#app',
  data: {
    searchFilm: "",
    films: []
  },

  methods: {
    searchClick: function () {
      let apiFilms = "https://api.themoviedb.org/3/search/movie?api_key=bbed237dc6562aa068a11a0bbcb33c30&language=it-IT&query=" + this.searchFilm;

      if (this.searchFilm !== "") { // evita il click vuoto

        axios.get(apiFilms)
          .then(risposta => {

            this.films = risposta.data.results;
            console.log(this.films);
          });
      }

    }
  }

});

