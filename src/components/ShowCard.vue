<template>
  <b-card class="mt-4 mb-4">
    <h5>
      {{ name }}
      <span>- {{startDate | moment("dddd, MMMM Do")}}</span>
    </h5>

    <b-card-text>{{venue}} - {{location | cutAfterComma}}</b-card-text>
    <b-button :href="eventPageLink" size="sm" variant="primary" target="_blank">{{ buttonText }}</b-button>
  </b-card>
</template>

<script>
export default {
  name: "ShowCard",
  data() {
    return {
      something: null
    };
  },
  props: {
    name: {
      type: String
    },
    startDate: {
      type: String
    },
    venue: {
      type: String
    },
    location: {
      type: String
    },
    eventPageLink: {
      type: String
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
      return locationString.split(",")[0];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
