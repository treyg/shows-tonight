<template>
 
<div class="wrap">
  <div class="card mb-4 mt-4">
      <div class="card-body">
          <h5 class="card-title">
            {{name}}
            <span> - {{startDate | moment("dddd, MMMM Do")}}</span>
          </h5>
        <p class="card-text">
            {{venue}} - {{location | cutAfterComma}}
        </p>
       <a :href="eventPageLink" class="btn btn-sm btn-dark" target="_blank">{{ buttonText }}</a>
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
      location: {
          type: String,
      },
      eventPageLink: {
          type: String,
      },
      buttonText: {
          type: String
      }

  },
  methods: {
    testMethod: function() {
        // console.log('test')
     }
  },

  created: function() {
    this.testMethod();
  },

  filters: {
  cutAfterComma: function(locationString) {
      return locationString.split(',')[0];
  }
}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
