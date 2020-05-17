<template>
  <div id="app">
    <Search />
    <GRShows />
  </div>
</template>

<script>

import GRShows from './components/GRShows.vue'
import Search from './components/Search.vue'


export default {
  name: 'App',
  components: {
    GRShows,
    Search,

  }
}
</script>

<style>

</style>
