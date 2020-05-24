<template>
  <div id="app">
    <Search />

    <GRShows />
    <FormTest />
  </div>
</template>

<script>
import GRShows from "./components/GRShows.vue";
import Search from "./components/Search.vue";
import FormTest from "./components/FormTest.vue";

export default {
  name: "App",
  components: {
    GRShows,
    Search,
    FormTest
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
