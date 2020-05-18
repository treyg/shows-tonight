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

  <h3 class="mt-4 mb-4" v-if="artistResults">Artist results for "{{ query }}"</h3>
    <ArtistSearchResults v-for="(result, index) in artistResults" 
                          :key="index+10"
                          :artistName="result.displayName"
                          :onTourUntil="result.onTourUntil"
                          :artistPageLink="result.uri"
                          buttonText="Songkick Artist Page"/>

  <h3 class="mt-4 mb-4" v-if="venueResults">Venue results for "{{ query }}"</h3>
    <VenueSearchResults v-for="(result, index) in venueResults"
                        :key="index+5"
                        :venueName="result.displayName"
                        :venueStreet="result.street"
                        :venueCity="result.city.displayName"
                        :venueState="result.metroArea.country.displayName"
                        :venueZip="result.zip"
                        :venueCapacity="result.capacity"
                        :venueSongkickPage="result.uri"
                        linkOneText="Venue Songkick Page"
                        :venueWebsite="result.website"
                        linkTwoText="Venue Website" />


    <hr />
  </div>
</template>


<script>
import axios from "axios";

import ArtistSearchResults from "./ArtistSearchResults";
import VenueSearchResults from "./VenueSearchResults";


export default {
  name: "Search",
  components: {
    ArtistSearchResults,
    VenueSearchResults
  },
  data: function() {
    return {
      apiUrl: "https://api.songkick.com/api/3.0/search",
      apiKey: "eMoOYBIe41vUwDWU",
      query: "",
      selected: "/artists.json?",
      options: [
        { name: "Artists", value: "/artists.json?" },
        { name: "Venues", value: "/venues.json?" }
      ],
      artistResults: null,
      venueResults: null,
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

          this.venueResults = response.data.resultsPage.results.venue;
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