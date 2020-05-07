<template>
  <div class="container">
    <div class="col s12 m7">

          <h4 class="header">Upcoming Shows </h4>
          <div class="card horizontal" 
               v-for="event in events" 
               :key="event">
           
            <div class="card-stacked">
              <div class="card-content">

                 <a :href="event.performance[0].artist.uri">
                   <h5 class="heading h5 blue-text text-darken-4">
                     {{ event.performance[0].displayName }}
                     <span > - {{ event.start.date | moment("dddd, MMMM Do") }}</span>
                     </h5>
                 </a>
                  <a :href="event.venue.uri">
                      <h6 class="blue-text text-darken-2"> 
                        {{ event.venue.displayName }} - 
                      <span> {{ event.venue.metroArea.displayName }}</span>
                      </h6>
                  </a>
        
              </div>
              <div class="card-action">
                <a class="red-text text-darken-2" 
                   :href="event.uri">
                   View Event Page
                   </a>
              </div> 
            </div>
          </div>
        </div>
  </div>
</template>

<script>

export default {
  name: 'GRShows',
  data: function() { 
           return { // test songkick api key
            apiUrl: 'https://api.songkick.com/api/3.0',
            apiKey: 'eMoOYBIe41vUwDWU',
            location: '5035',
            events: null,
            dates: null
           }
          }, 
    
          methods: {
            fetchEvents: function() {
              const url = `${this.apiUrl}/metro_areas/${this.location}/calendar.json?apikey=${this.apiKey}`;
    
              fetch(url)
                .then(response => response.json())
                .then(data => {
                  this.events = data.resultsPage.results.event
                  this.dates = data.resultsPage.results.event
                });
            },
  
          },
    
          created: function() {
            this.fetchEvents();
          }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
