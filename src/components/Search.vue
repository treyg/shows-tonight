<template>
  <div class="container">
    <form>
      <div class="form-row mt-4">

        <div class="col-md-10">
          <label for="searchTerm"></label>
          <input type="text" class="form-control" placeholder="Search events, locations, or artists" />
        </div>

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
  </div>
</template>

<script>
export default {
  name: "Search",
  data: function() {
    return {
      // test songkick api key
      apiUrl: "https://api.songkick.com/api/3.0",
      apiKey: "eMoOYBIe41vUwDWU",
      location: "5035",
      events: null
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

//   created: function() {
//     this.fetchEvents();
//  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>