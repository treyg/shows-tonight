<template>
  <div class="container mb-4">
  
<!-- Input for search -->
    <b-form class="mt-4">
      <div class="form-row">
        <div class="form-group col-md-7">
          <label class="sr-only" for="query">Search Term</label>
          <input
            type="text"
            class="form-control"
            id="query"
            placeholder="Search events, locations, or artists"
            name="query"
            v-model="query"
            @keydown.enter.prevent="axiosSearch"
          />
        </div>
  <!-- dropdown selector for search -->
        <div class="form-group col-md-3">
          <select class="form-control" v-model="selected">
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >{{ option.name }}</option>
          </select>
        </div>
  <!-- Button for search -->
        <div class="form-group col-md-2">
          <button type="submit" @click.prevent="axiosSearch" class="btn btn-primary float-right float-md-left">Search</button>
        </div>
      </div>
    </b-form>

    <!-- Search Result components - Show depending on type of search -->
    <!-- Artist Search Results -->
    <h3 class="mt-4 mb-4" v-if="artistResults">Artist results for "{{ query }}"</h3>
    <ArtistSearchResults
      v-for="(result, index) in artistResults"
      :key="index+10"
      :artistName="result.displayName"
      :onTourUntil="result.onTourUntil"
      :artistPageLink="result.uri"
      buttonText="Songkick Artist Page"
    />

    <!-- Venue Seasrch results -->
    <h3 class="mt-4 mb-4" v-if="venueResults">Venue results for "{{ query }}"</h3>
    <VenueSearchResults
      v-for="(result, index) in venueResults"
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
      linkTwoText="Venue Website"
    />

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
      venueResults: null
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


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>