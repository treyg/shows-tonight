<template>
 
<div class="container">
  <h2>Upcoming Local Shows</h2>
  <ShowCard v-for="event in events" :key="event.id"
    v-bind:name="event.performance[0].displayName"
    v-bind:startDate="event.start.date" 
    v-bind:venue="event.venue.displayName"
    v-bind:location="event.location.city" 
    v-bind:eventPageLink="event.uri"
    buttonText="Songkick Artist Page" 
    />
  </div>
  
</template>

<script>
import ShowCard from './ShowCard'

export default {

  
  name: "GRShows",
   components: {
    ShowCard
  },
  data: function() {
    return {
      // test songkick api key
      apiUrl: "https://api.songkick.com/api/3.0",
      apiKey: "eMoOYBIe41vUwDWU",
      location: "5035",
      events: null,
    };
  },

  methods: {
    fetchEvents: function() {
      const url = `${this.apiUrl}/metro_areas/${this.location}/calendar.json?apikey=${this.apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log(data.resultsPage.results.event)
          this.events = data.resultsPage.results.event;
        });
    }
  },

  created: function() {
    this.fetchEvents();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
