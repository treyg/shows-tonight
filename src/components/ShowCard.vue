<template>
  <b-card-group deck>
    <b-card class="mt-4 mb-4 text-left col-md-8">
      <h5>
        {{ name }}
        <span>- {{startDate | moment("dddd, MMMM Do")}}</span>
      </h5>
      <h6 v-if="startTime">{{ startTime | moment("LT") }}</h6>
      <b-card-text>{{venue}} - {{location }}</b-card-text>
      <h6 class="text-danger" v-if="status">{{status}}</h6>
      <b-button :href="eventPageLink" size="sm" variant="primary" target="_blank">{{ buttonText }}</b-button>
    </b-card>
  </b-card-group>
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
    opener: {
      type: String
    },
    venue: {
      type: String
    },
    location: {
      type: String
    },
    startTime: {
      type: String
    },
    status: {
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

  // filters: {
  //   cutAfterComma: function(locationString) {
  //     return locationString.split(",")[0];
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
