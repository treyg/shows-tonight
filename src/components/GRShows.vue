<template>
  <div class="container">
    <h2>Upcoming Local Shows</h2>

    <!-- <ShowCard
      v-for="event in events"
      :key="event.id"
      v-bind:name="event.performance[0].displayName"
      v-bind:startDate="event.start.date"
      v-bind:startTime="event.start.datetime"
      v-bind:venue="event.venue.displayName"
      v-bind:location="event.location.city"
      v-bind:status="event.status === 'cancelled' ? 'Event has been cancelled' : ''"
      v-bind:eventPageLink="event.uri"
      buttonText="Songkick Artist Page"
    />-->

    <ShowCard
      v-for="event in allEvents"
      :key="event.id"
      v-bind:name="event.name"
      v-bind:startDate="event.startDate"
      v-bind:startTime="event.startTime"
      v-bind:venue="event.venue"
      v-bind:location="event.location"
      v-bind:status="event.status === 'cancelled' ? 'Event has been cancelled' : ''"
      v-bind:pleaseNote="event.pleaseNote"
      v-bind:id="event.id"
      v-bind:eventPageLink="event.url"
      buttonText="Event page"
    />

    <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner v-if="loadingResults" variant="primary" label="Text Centered"></b-spinner>
    </div>

    <div class="col-md-8 text-center">
      <b-button v-on:click="changeAmountShown" variant="outline-primary" class="mb-4">
        <b-spinner small v-if="loadingResults"></b-spinner>
        {{perPage >= 40 ? "Show Less" : "Show More"}}
      </b-button>
    </div>
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
      loadingResults: false,
      //Songkick api data
      skUrl: "https://api.songkick.com/api/3.0",
      location: "5035",
      events: null,
      perPage: 5,
      //Tickemaster API data
      tmUrl: "https://app.ticketmaster.com/discovery/v2/events.json",
      //Master list array for events
      allEvents: null
    };
  },

  methods: {
    // songkickFetch: function() {
    //   this.loadingResults = true;
    //   const url = `${this.skUrl}/metro_areas/${this.location}/calendar.json?apikey=${process.env.VUE_APP_SONGKICK_API}&per_page=${this.perPage}`;
    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //       //console.log(data.resultsPage.results.event)
    //       this.events = data.resultsPage.results.event;
    //       this.loadingResults = false;

    //       //this.allEventsArray.push(this.events)
    //     });
    // },

    // ticketMasterFetch: function() {
    //   const url = `${this.tmUrl}?apikey=${process.env.VUE_APP_TICKET_MASTER_API}&radius=75&unit=miles&locale=*&sort=date,desc&city=grand%20rapids`;

    //   fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //       this.allEventsArray = data._embedded.events;
    //       console.log(this.allEventsArray);
    //     });
    // },

//Test fetching events with promise.all
    fetchAllEvents: function() {
      const urls = [
        `${this.tmUrl}?apikey=${process.env.VUE_APP_TICKET_MASTER_API}&radius=75&unit=miles&locale=*&sort=date,desc&city=grand%20rapids`,
        `${this.skUrl}/metro_areas/${this.location}/calendar.json?apikey=${process.env.VUE_APP_SONGKICK_API}&per_page=${this.perPage}`
      ];

      Promise.all(urls.map(url => fetch(url)))
        .then(resp => Promise.all(resp.map(r => r.json())))
        .then(result => {
          
          // console.log(result[0]._embedded.events);
          // console.log(result[1].resultsPage.results.event);

          const tmResults = result[0]._embedded.events
          const skResults = result[1].resultsPage.results.event

          console.log(skResults);
          console.log(tmResults);


       skResults.forEach(function(event) {
            event.name = event.displayName
            event.startDate = event.start.date
            event.startTime = event.start.time
            event.venue = event.venue.displayName
            event.location = event.location.city
            event.url = event.uri
          })


          
       tmResults.forEach(function(event) {
            event.startDate = event.dates.start.localDate
            event.startTime = event.dates.start.localTime
            event.venue = event._embedded.venues[0].name
            event.location = event._embedded.venues[0].city.name
    
          })

        //console.log(JSON.parse(JSON.stringify(skResults)));

         this.allEvents = [...skResults, ...tmResults]

         this.allEvents.sort((a, b) => a.startDate > b.startDate ? 1 : -1)

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
    }
  },

  created: function() {
    this.fetchAllEvents();
  }
};
</script>

<style  scoped>
</style>

