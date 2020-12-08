const apiKey = "bbed237dc6562aa068a11a0bbcb33c30";
var apiFilmCast; //bonus
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
      let apiFilms = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=it-IT&query=" + this.searchFilm;
      let apiTvSeries = "https://api.themoviedb.org/3/search/tv?api_key=" + apiKey + "&language=it-IT&page=1%20di%20carta&include_adult=false&query=" + this.searchFilm;

      if (this.searchFilm !== "") { // evita il click vuoto

        const rispostaOne = axios.get(apiFilms);
        const rispostaTwo = axios.get(apiTvSeries);

        axios.all([rispostaOne, rispostaTwo])
          .then(risposta => {

            this.films = risposta[0].data.results; // rispostaOne
            console.log(this.films);

            this.tvSeries = risposta[1].data.results; // rispostaTwo
            console.log(this.tvSeries);

            this.voto(this.tvSeries);
            this.voto(this.films);
          });
      }
    },
    voto: function (serieFilm) { 

      for (let i = 0; i < serieFilm.length; i++) {
        // STELLINE
        let piene = Math.ceil(serieFilm[i].vote_average / 2); // trasformo il voto in base 5

        for (let j = 1; j <= 5; j++) {
          j <= piene ? this.stars.push("fa fa-star") : this.stars.push("fa fa-star-o"); // condizione che sceglie se la stella è piena o vuota
        }

        serieFilm[i].stelle = this.stars; // inserisco stars
        this.stars = []; // pulisco stars
      }
    },
    titleControll: function (titolo, titoloOriginale) { // controllo tra titolo e titolo originale (di film e serieTv)
      if (titolo !== titoloOriginale) {
        return true
      }
    }
  }

});