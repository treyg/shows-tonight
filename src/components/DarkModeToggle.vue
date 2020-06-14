<template>
    <div id="dark-mode-toggle" class="d-flex justify-content-center align-items-center">
        <div class="icon-wrap">
            <img 
              src="../assets/darkmode-moon.png"  
              v-bind:class="{ active: !isDarkModeOn }" 
              v-on:click="this.toggleDarkMode" 
              alt="moon icon" 
            />
            <img 
              src="../assets/darkmode-sun.png"  
              v-bind:class="{ active: isDarkModeOn }" 
              v-on:click="this.toggleDarkMode"
              alt="sun icon" 
            />
        </div>
    </div>
</template>

<script>
//import

export default {
  name: "DarkModeToggle",
  data() {
    return {
      something: null,
      isDarkModeOn: false
    };
  },
 
  methods: {
    toggleDarkMode: function() {
      console.log('dark mode switch')
      this.isDarkModeOn = !this.isDarkModeOn;

      // emit even for parent to listen for
       this.$emit('toggleBtnClicked')
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dark-mode-toggle .icon-wrap {
  max-width: 30px;
}
.icon-wrap img {
  max-width: 100%;
  display: none;
  animation: scaleUp 200ms ease-in;
}
.icon-wrap img.active {
  display:block;
}
.sun {
  border-radius: 100%;
}

@keyframes scaleUp {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
