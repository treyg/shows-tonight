<template>
  <div id="app">
    <Search />

    <GRShows />
  </div>
</template>

<script>
import GRShows from "./components/GRShows.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    GRShows,
    Search
  },
  data: function () {
  return {
    page: 'GRShows'
  }
}
};

 // routing from scratch https://vuejs.org/v2/guide/routing.html
</script>

<style>
</style>
