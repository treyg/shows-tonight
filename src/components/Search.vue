<template>
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
            @keydown.enter.prevent="axiosSearch"
          />
        </div>

        <!-- dropdown selector for search -->
        <div class="col">
          <label for="eventType"></label>

          <select class="form-control" v-model="selected">
            
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >{{ option.name }}</option>
          </select>
        </div>
      </div>
    </form>

    <ArtistSearchResults v-for="(result, index) in artistResults" 
                          :key="index+10"
                          :artistName="result.displayName"
                          :onTourUntil="result.onTourUntil"
                          :artistPageLink="result.uri"
                          buttonText="SongKick Artist Page"/>


    <hr />
  </div>
</template>


<script>
import axios from "axios";

import ArtistSearchResults from "./ArtistSearchResults";

export default {
  name: "Search",
  components: {
    ArtistSearchResults
  },
  data: function() {
    return {
      // test songkick api key
      apiUrl: "https://api.songkick.com/api/3.0/search",
      apiKey: "eMoOYBIe41vUwDWU",
      query: "",
      selected: "/artists.json?",
      options: [
        { name: "Artists", value: "/artists.json?" },
        { name: "Venues", value: "/venues.json?" }
      ],
      artistResults: null
    };
  },

  methods: {
    axiosSearch: function() {
      axios
        .get(`${this.apiUrl}${this.selected}/`, {
          params: {
            apikey: this.apiKey,
            query: this.query,
            per_page: 10
          }
        })
        .then(response => {
          //console.log(response.data.resultsPage.results)

          //Might have to do the same thing for results.venues and set another data option - ie) artist result and venue results
          this.artistResults = response.data.resultsPage.results.artist;
        });
    }
  }

  //   created: function() {
  //     this.searchEvents();
  //  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>