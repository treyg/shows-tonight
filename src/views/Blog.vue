
<template>
  <section class="blog">
    <h1>A Blog page</h1>
     <!-- Show spinner if page is events are being fetched -->
    <div class="text-center mb-4">
      <b-spinner v-if="loadingResults" variant="primary" label="Text Centered"></b-spinner>
    </div>
    <div class="container" v-if="!loadingResults">
      <div class="posts text-left">
        <div 
          class="post" 
          v-for="post in posts"
          :key="post.id">
            <h3 class="post-title">{{post.title.rendered}}</h3>
            <p v-html="post.excerpt.rendered" class="post-excerpt" />
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: "Blog",

   data: function() {
    return {
      loadingResults: false
    }
  },

  methods: {
     fetchPosts: function() {
      this.loadingResults = true;
      axios
      .get('http://domain2a0cda.stackstaging.com/wp-json/wp/v2/posts')
      .then(response => (this.info = response))
      .then(response => {

        this.posts = response.data
        this.loadingResults = false;

      })
     },

  },
  
  created: function() {
    this.fetchPosts();
  }

};
</script>


