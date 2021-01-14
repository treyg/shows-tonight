<template>
  <b-card-group deck>
    <b-card class="mt-4 mb-4 text-left col-md-8">
      <h5>
        {{ name }}
        <span>- {{ startDate | moment("dddd, MMMM Do") }}</span>
      </h5>
      <h6 v-if="specialGuest">Special Guest: {{ specialGuest }}</h6>
      <h6 v-if="startTime">Start time: {{ startTime | moment("LT") }}</h6>
      <b-card-text>{{ venue }} - {{ location | cutAfterComma }}</b-card-text>
      <h6 class="text-danger" v-if="status">{{ status }}</h6>

      <div class="d-flex justify-content-between">
        <b-button
          size="sm"
          v-if="pleaseNote"
          v-b-toggle="id"
          variant="link"
          class="text-decoration-none "
          >Event Notes<b-icon-arrow-down></b-icon-arrow-down
        ></b-button>
        <b-button
          :href="eventPageLink"
          size="sm"
          variant="primary"
          class="m-1 ml-auto"
          >{{ buttonText }}</b-button
        >
      </div>
      <!-- collapsable event notes -->
      <b-collapse class="mt-4" v-if="pleaseNote" :id="id">
        <b-card>
          <h6 class="text-danger">{{ pleaseNote }}</h6>
        </b-card>
      </b-collapse>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  name: "ShowCard",
  data() {
    return {
      something: null,
    };
  },
  props: {
    name: {
      type: String,
    },
    specialGuest: {
      type: String,
    },
    startDate: {
      type: String,
    },
    opener: {
      type: String,
    },
    venue: {
      type: String,
    },
    location: {
      type: String,
    },
    startTime: {
      type: String,
    },
    status: {
      type: String,
    },
    id: {
      type: [String, Number],
    },
    pleaseNote: {
      type: String,
    },
    eventPageLink: {
      type: String,
    },
    buttonText: {
      type: String,
    },
  },
  methods: {
    testMethod: function() {
      // console.log('test')
    },
  },

  created: function() {
    this.testMethod();
  },

  filters: {
    cutAfterComma: function(locationString) {
      return locationString.split(",")[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
