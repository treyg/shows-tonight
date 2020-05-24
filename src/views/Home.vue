<template>
  <div class="home-wrapper">
    <GRShows />
  </div>
</template>

<script>
// @ is an alias to /src
import GRShows from '@/components/GRShows.vue'

export default {
  name: 'Home',
  components: {
    GRShows
  }
}
</script>
