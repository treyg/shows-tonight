<template>
 
<div class="container">
  
  <ShowCard v-for="event in events" :key="event.id"
    name={event.performance[0].displayName}
    startDate="thursday" 
    venue="intersection"
    metroArea="detroit" />
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
