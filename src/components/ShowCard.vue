<template>
 
<div class="wrap">
  <div class="card mb-4 mt-4">
      <div class="card-body">
          <h5 class="card-title">
            {{name}}
            <span> - {{startDate}}</span>
          </h5>
        <p class="card-text">
            {{venue}} - {{metroArea}}
        </p>
       <a :href="eventPageLink" class="btn btn-dark" target="_blank">Songkick Event Page</a>
      </div>

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
      eventPageLink: {
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
