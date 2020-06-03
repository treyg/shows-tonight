
<template>
  <section class="blog mt-4">
    <h1>A Blog page</h1>
    <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner v-if="loadingResults" variant="primary" label="Text Centered"></b-spinner>
    </div>
    <!-- <div class="container" v-if="!loadingResults">
      <div class="posts text-left">
        <div 
          class="post" 
          v-for="post in posts"
          :key="post.id">
            <h3 class="post-title">{{post.title.rendered}}</h3>
            <p class="post-excerpt" />{{post.excerpt.rendered }}</p>

          </div>
      </div>
    </div>-->

    <div v-for="post in posts" :key="post.id" class="container mb-4">

      <b-card img-alt="Image" img-top style="max-width: 20rem;" class="mb-2">
        <h3>{{ post.title.rendered }}</h3>
        <b-card-text>{{post.acf.event_start_time}}</b-card-text>
        <b-card-text>{{post.excerpt.rendered}}</b-card-text>
        <b-card-text>{{post.acf.event_tags}}</b-card-text>
        
        <b-button href="#" variant="primary">Go somewhere</b-button>
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


