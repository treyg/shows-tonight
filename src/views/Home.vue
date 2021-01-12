<template>
  <div class="home-wrapper">
    <Search />
    <GRShows />
  </div>
</template>

<script>
// @ is an alias to /srcz
import Search from "@/components/Search.vue";
import GRShows from "@/components/GRShows.vue";

export default {
  name: "Home",
  components: {
    GRShows,
    Search,
  },
};
</script>
