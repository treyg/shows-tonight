<template>
  <div class="container">
    <h2>Upcoming Local Shows</h2>

    <ShowCard
      v-for="event in allEvents"
      :key="event.id"
      v-bind:name="event.name.split('at')[0].trim()"
      v-bind:specialGuest="event.specialGuest"
      v-bind:startDate="event.startDate"
      v-bind:startTime="event.startTime"
      v-bind:venue="event.venue"
      v-bind:location="event.location"
      v-bind:status="
        event.status === 'cancelled'
          ? 'Event has been cancelled'
          : '' || event.status === 'postponed'
          ? 'Event has been postponed'
          : ''
      "
      v-bind:pleaseNote="event.pleaseNote"
      v-bind:id="event.id"
      v-bind:eventPageLink="event.url"
      buttonText="Event page"
    />

    <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner
        v-if="loadingResults"
        variant="primary"
        label="Text Centered"
      ></b-spinner>
    </div>

    <div class="col-md-8 text-center">
      <b-button
        v-on:click="changeAmountShown"
        variant="outline-primary"
        class="mb-4"
      >
        <b-spinner small v-if="loadingResults"></b-spinner>
        {{ perPage >= 40 ? "Show Less" : "Show More" }}
      </b-button>
    </div>
  </div>
</template>

<script>
import ShowCard from "./ShowCard";

export default {
  name: "GRShows",
  components: {
    ShowCard,
  },
  data: function() {
    return {
      loadingResults: false,
      //Songkick api data
      skUrl: "https://api.songkick.com/api/3.0",
      location: "5035",
      events: null,
      perPage: 5,
      //Tickemaster API data
      tmUrl: "https://app.ticketmaster.com/discovery/v2/events.json",
      tmPerPage: 10,
      //Master list array for events
      allEvents: null,
    };
  },

  methods: {
    //Fetching events with promise.all
    fetchAllEvents: function() {
      const urls = [
        `${this.tmUrl}?apikey=${process.env.VUE_APP_TICKET_MASTER_API}&radius=75&unit=miles&locale=*&sort=date,desc&city=grand%20rapids&size=${this.tmPerPage}`,
        `${this.skUrl}/metro_areas/${this.location}/calendar.json?apikey=${process.env.VUE_APP_SONGKICK_API}&per_page=${this.perPage}`,
      ];

      Promise.all(urls.map((url) => fetch(url)))
        .then((resp) => Promise.all(resp.map((r) => r.json())))
        .then((result) => {
          const tmResults = result[0]._embedded.events;
          const skResults = result[1].resultsPage.results.event;

          console.log(skResults);
          console.log(tmResults);

          skResults.forEach(function(event) {
            //event.name = event.performance[0].displayName

            if (event.performance > 0) {
              event.name = event.performance[0].displayName;
            } else {
              event.name = event.displayName;
            }
            if (event.performance.length > 1) {
              event.specialGuest = event.performance[1].displayName;
            }
            event.startDate = event.start.date;
            event.startTime = event.start.datetime;
            event.venue = event.venue.displayName;
            event.location = event.location.city;
            event.url = event.uri;
          });

          tmResults.forEach(function(event) {
            event.name = event._embedded.attractions[0].name;

            if (event._embedded.attractions.length > 1) {
              event.specialGuest = event._embedded.attractions[1].name;
            }
            event.startDate = event.dates.start.localDate;
            event.startTime = event.dates.start.dateTime;
            event.venue = event._embedded.venues[0].name;
            event.location = event._embedded.venues[0].city.name;
          });

          this.allEvents = [...skResults, ...tmResults];

          this.allEvents.sort((a, b) => (a.startDate > b.startDate ? 1 : -1));

          console.log(this.allEvents);
        });
    },

    changeAmountShown: function() {
      if (this.perPage < 10) {
        this.perPage = 50;
        this.fetchAllEvents();
      } else if (this.perPage > 40) {
        this.perPage = 5;
        this.fetchAllEvents();
      }
    },
  },

  created: function() {
    this.fetchAllEvents();
  },
};
</script>

<style scoped></style>
