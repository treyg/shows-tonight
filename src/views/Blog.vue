
<template>
  <div class="blog">
    <h1>This is a Blog page</h1>
    <button v-on:click="fetchPosts">button</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "GRShows",
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
  // mounted () {
  //   axios
  //     .get('http://domain2a0cda.stackstaging.com/wp-json/wp/v2/posts')
  //     .then(response => (this.info = response))
  //     .then(response => {
  //       console.log(response.data)
  //      console.log('data')
  //     })
  // },

  methods: {

     fetchPosts: function() {
      axios
      .get('http://domain2a0cda.stackstaging.com/wp-json/wp/v2/posts')
      .then(response => (this.info = response))
      .then(response => {
        console.log(response.data)
       console.log('data')
      })
     },


  },

};
</script>


