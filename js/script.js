
var app = new Vue({
  el: '#app',
  data: {
    searchFilm: "",
    stars: [], // "fa fa-star", "fa fa-star-o"
    films: [],
    tvSeries: []
  },

  methods: {
    searchClick: function () {
      let apiFilms = "https://api.themoviedb.org/3/search/movie?api_key=bbed237dc6562aa068a11a0bbcb33c30&language=it-IT&query=" + this.searchFilm;
      let apiTvSeries = "https://api.themoviedb.org/3/search/tv?api_key=bbed237dc6562aa068a11a0bbcb33c30&language=it-IT&page=1%20di%20carta&include_adult=false&query=" + this.searchFilm;

      
      if (this.searchFilm !== "") { // evita il click vuoto

        const rispostaOne = axios.get(apiFilms);
        const rispostaTwo = axios.get(apiTvSeries);
        
        axios.all([rispostaOne, rispostaTwo])
          .then(risposta => {

            this.films = risposta[0].data.results;
            console.log(this.films);

            this.tvSeries = risposta[1].data.results;
            console.log(this.tvSeries);

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

