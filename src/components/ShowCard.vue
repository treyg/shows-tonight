<template>
 
<div class="wrap">
  <div class="card">
      <p>Name: {{name}}</p>
      <p>Start Date: {{startDate}}</p>
      <p>Venue: {{venue}}</p>
      <p>Area: {{metroArea}}</p>

  </div>
</div>
  
</template>

<script>
export default {
  name: "ShowCard",
  data() {
      return {
          something: null,
      }
  },
  props: {
      name: {
          type: String,
      },
      startDate: {
          type: String,
      },
      venue: {
          type: String,
      },
      metroArea: {
          type: String,
      },

  },
  methods: {
    testMethod: function() {
        console.log('test')
     }
  },

  created: function() {
    this.testMethod();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
