
<template>
  <section class="blog mt-4">
    <h1>Locally Submited Events</h1>
    <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner v-if="loadingResults" variant="primary" label="Text Centered"></b-spinner>
    </div>

    <div class="container mb-4" v-for="post in posts" :key="post.id" >
      <b-card>
        <h3>{{ post.title.rendered }}</h3>
        <h5>{{post.acf.event_start_time}}</h5>
        <p>{{ post.excerpt.rendered }}</p>
        <p>{{ post.acf.event_tags }}</p>

        <b-link href="#" class="btn btn-primary">View event</b-link>
      </b-card>
    </div>

  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Blog",

  data: function() {
    return {
      loadingResults: false
    };
  },

  methods: {
    fetchPosts: function() {
      this.loadingResults = true;
      axios
        .get("http://domain2a0cda.stackstaging.com/wp-json/wp/v2/posts")
        .then(response => (this.info = response))
        .then(response => {
          this.posts = response.data;
          this.loadingResults = false;
        });
    }
  },

  created: function() {
    this.fetchPosts();
  }
};
</script>


