<template>
  <div class="wrap">
    <div class="card mb-4 mt-4">
      <div class="card-body">
        <h5 class="card-title">
          {{ artistName }}
          <span v-if="onTourUntil"
                class="text-danger">
                 - On tour through {{onTourUntil | moment("MM/D/YY") }}
                 </span>
        </h5>
        <!-- <a class="btn btn-sm btn-dark" :href="setlist"  target="_blank">Setlist</a> -->
        <a :href="artistPageLink" class="btn btn-sm btn-dark" target="_blank">{{ buttonText }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistSearchResults",
  data() {
      return {
          something: null,
      }
  },
  props: {
      artistName: {
          type: String,
      },
      onTourUntil: {
          type: String,
      },
      setlist: {
          type: String,
      },
      artistPageLink: {
          type: String,
      },
      buttonText: {
          type: String,
      }
  },
};

</script>

