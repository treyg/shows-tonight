<template>
  <div class="wrap">
    <div class="card mb-4 mt-4">
      <div class="card-body">
        <h5 class="card-title">{{ venueName }}</h5>
        <h6
          class="card-subtitle mb-2 text-muted"
        ><span v-if="venueStreet">{{ venueStreet }},</span> {{ venueCity }} {{ venueState}}, {{ venueZip}}</h6>
        <p v-if="venueCapacity" class="card-text">Capacity: {{ venueCapacity }}</p>
        <a :href="venueSongkickPage" class="mt-4 btn btn-sm btn-dark" target="_blank">{{ linkOneText }}</a>
        <a v-if="venueWebsite" :href="venueWebsite" class="mt-4 float-right btn btn-sm btn-danger" target="_blank">{{ linkTwoText }}</a>
      </div>
    </div>
    </div>

</template>

<script>
export default {
  name: "VenueSearchResults",
  data() {
    return {
      something: null
    };
  },
  props: {
    venueName: {
      type: String
    },
    venueStreet: {
      type: String
    },
    venueCity: {
      type: String
    },
    venueState: {
      type: String
    },
    venueZip: {
      type: String
    },
    venueCapacity: {
      type: Number
    },
    venueSongkickPage: {
      type: String
    },
    linkOneText: {
      type: String
    },
    venueWebsite: {
      type: String
    },
    linkTwoText: {
      type: String
    }
  }
};
</script>

