<template>
  <div id="app" v-bind:class="{ darkmode: isDarkModeOn }">
    <header class="bg-dark">
      <div class="container">
        <div class="d-flex justify-content-between">
          <b-navbar toggleable="lg" type="dark" class="dark" variant="faded">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item>
                  <router-link class="text-gray" to="/">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="text-gray" to="/blog">Blog</router-link>
                </b-nav-item>
                <b-nav-item>
                  <router-link class="text-gray" to="/submit"
                    >Submit</router-link
                  >
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
          <DarkModeToggle v-on:toggleBtnClicked="this.switchDarkMode" />
        </div>
      </div>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import DarkModeToggle from "@/components/DarkModeToggle.vue";

export default {
  name: "NavBar",
  data() {
    return {
      isDarkModeOn: false,
    };
  },
  components: {
    DarkModeToggle,
  },
  methods: {
    switchDarkMode: function() {
      console.log("dark mode switch");
      this.isDarkModeOn = !this.isDarkModeOn;
    },
  },
};
</script>
