
var app = new Vue({
  el: '#app',
  data: {
    searchFilm: "",
    stars: [], // "fa fa-star", "fa fa-star-o"
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

            this.voto();
          });
      }
    },
    voto: function () {

      for (let j = 0; j < this.films.length; j++) {

        let piene = Math.round(this.films[j].vote_average / 2);

        for (let i = 1; i <= 5; i++) {
          // if (i <= piene) {
          //   this.stars.push("fa fa-star")
          // }else {
          //   this.stars.push("fa fa-star-o")
          // }
          i <= piene ? this.stars.push("fa fa-star") : this.stars.push("fa fa-star-o");
        }

        this.films[j].stelle = this.stars
        this.stars = [];
      }
    }

  }

});

