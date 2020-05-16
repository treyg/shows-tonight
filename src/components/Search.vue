<template v-if="searchedArtists" >

  <div class="container">
    <form>
      <div class="form-row mt-4">
        <div class="col-md-10">
          <label for="searchTerm"></label>
          <input
            type="text"
            class="form-control"
            placeholder="Search events, locations, or artists"
            name="query" 
            v-model="query" 
            @keydown.enter.prevent="searchArtists"
          />
        </div>

        <!-- Current Search is for artists only -->
<!-- dropdown selector for search -->
        <div class="col">
          <label for="eventType"></label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Artists</option>
            <option>Venues</option>
            <option>Locations</option>
          </select>
        </div>

      </div>
    </form>

<!-- Card to display searched items --> <!--
<div class="wrap" v-for="artist in searchedArtists" :key="artist.id">
  <div class="card mb-4 mt-4">
      <div class="card-body">
          <h5 class="card-title">
            {{ artist.displayName }}
              <span 
              class="text-success"
              v-if="artist.onTourUntil"> - On tour until
               {{ artist.onTourUntil | moment("MMMM Do")}}
              </span>
          </h5>
        <p class="card-text">
            
        </p>
       <a :href="artist.uri" class="btn btn-sm btn-primary" target="_blank">Songkick Artist Page</a>
      </div>

  </div>
</div> -->
  
<div class="wrap">
  <ShowCard v-for="artist in searchedArtists" :key="artist.id"
    v-bind:name="artist.displayName"
    buttonColor="blue"
    textColor="#fff" />
  </div>
</div>

</template>

<script>
import ShowCard from './ShowCard'

export default {
  name: "Search",
    components: {
     ShowCard
   },
  data: function() {
    return {
      // test songkick api key
      apiUrl: "https://api.songkick.com/api/3.0",
      apiKey: "eMoOYBIe41vUwDWU",
      events: null,
      searchedArtists: null,
      query: null
    };
  },

  methods: {
    searchArtists: function() {
      const url = `${this.apiUrl}/search/artists.json?apikey=${this.apiKey}&query=${this.query}&per_page=10`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log(data.resultsPage.results.artist);
          this.searchedArtists = data.resultsPage.results.artist
        });
    }
  }

  //   created: function() {
  //     this.fetchEvents();
  //  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>