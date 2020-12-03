
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

      let piene;
      console.log(this.films.length);
      
      for (let j = 0; j < this.films.length; j++) {
        
        piene = Math.round(this.films[j].vote_average / 2);
        
        console.log('le stelle piene sono: ',piene);
  
        for (let i = 1; i <= piene; i++) {
          this.stars.push("fa fa-star")
        }
        let obj = {stelle: this.stars}
        console.log(obj);
        // this.films[j].push({...obj}) ////////// NON FUNZIONA IL PUSH E NON SO PERCHÈ //////////

        this.stars = [];
      }
    }

  }

});

