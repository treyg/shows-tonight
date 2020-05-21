<template>
  <div class="container text-center">
    <h2>Upcoming Local Shows</h2>

  
    <ShowCard
      v-for="event in events"
      :key="event.id"
      v-bind:name="event.performance[0].displayName"
      v-bind:startDate="event.start.date"
      v-bind:venue="event.venue.displayName"
      v-bind:location="event.location.city"
      v-bind:eventPageLink="event.uri"
      buttonText="Songkick Artist Page"
    />

  <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner v-if="loadingResults" variant="primary" label="Text Centered"></b-spinner>
    </div>

    <b-button v-on:click="changeAmountShown" variant="outline-primary" class="mb-4">
      <b-spinner small v-if="loadingResults"></b-spinner>
      {{perPage >= 40 ? "Show Less" : "Show More"}}
    </b-button>
  </div>
</template>

<script>
import ShowCard from "./ShowCard";

export default {
  name: "GRShows",
  components: {
    ShowCard
  },
  data: function() {
    return {
      apiUrl: "https://api.songkick.com/api/3.0",
      apiKey: "eMoOYBIe41vUwDWU",
      location: "5035",
      events: null,
      perPage: 5,
      loadingResults: false
    };
  },

  methods: {
    fetchEvents: function() {
      this.loadingResults = true;
      const url = `${this.apiUrl}/metro_areas/${this.location}/calendar.json?apikey=${this.apiKey}&per_page=${this.perPage}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          //console.log(data.resultsPage.results.event)
          this.events = data.resultsPage.results.event;
          this.loadingResults = false;
        });
    },

    changeAmountShown: function() {
      if (this.perPage < 10) {
        this.perPage = 50;
        this.fetchEvents();
      } else if (this.perPage > 40) {
        this.perPage = 5;
        this.fetchEvents();
      }
    }
  },

  created: function() {
    this.fetchEvents();
  }
};
</script>

