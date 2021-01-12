<template>
  <NavBar />
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  data() {
    return {
      something: true,
    };
  },
  components: {
    NavBar,
  },
};
</script>

<style>
/*
Colors

grfc steelblue: #467cbf   rgb(70,124,191)

grfc midnightblue: #15345a  rgb(21,52,90)

griffins crimson: #ff2438    rgb(255,36,56)

city of GR yellow: #f9de1b    rgb(249,222,27)

gray : #ccc; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

/* Global Classes to override bootstrap default */
body .bg-dark {
  background-color: #15345a !important;
}

body .bg-dark nav a.router-link-exact-active {
  color: #f9de1b;
}

.text-crimson {
  color: #ff2438;
}
.text-yellow {
  color: #f9de1b;
}
.text-steel-blue {
  color: #467cbf;
}
.text-gray {
  color: #efefef;
}

/* Dark Mode */
#app.darkmode,
#app.darkmode * {
  background-color: #2c3e50;
  background: #2c3e50;
  color: #fff;
}
#app.darkmode h1,
#app.darkmode h2,
#app.darkmode h3 {
  color: #f9de1b;
}

#app.darkmode a {
  color: #467cbf;
}

/* transition animations */
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}
</style>
