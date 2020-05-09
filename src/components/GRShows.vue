<template>
 
<div class="container">
  <div class="card mb-4 mt-4" v-for="event in events" :key="event.id">
    <div class="card-body" >
      <a :href="event.performance[0].artist.uri">
        <h5 class="card-title">
          {{ event.performance[0].displayName }}
          <span>- {{ event.start.date | moment("dddd, MMMM Do") }}</span>
        </h5>
      </a>
      <p class="card-text">
        {{ event.venue.displayName }} -
        {{ event.venue.metroArea.displayName }}
      </p>
      <a :href="event.uri" class="btn btn-dark">Songkick Event Page</a>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "GRShows",
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
