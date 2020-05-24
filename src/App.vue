<template>
  <div id="app">
  <header class="bg-dark">
    <div class="container">
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
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" right>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>

    <router-view/>

  </div>
</template>

<style>

/** Colors 
 **
grfc steelblue: #467cbf   rgb(70,124,191)

grfc midnightblue: #15345a  rgb(21,52,90)

griffins crimson: #ff2438    rgb(255,36,56)

city of GR yellow: #f9de1b    rgb(249,222,27)

gray : #ccc;

**/

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
</style>
