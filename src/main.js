import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Add moment js for formatting dates
import VueMoment from "vue-moment";
Vue.use(VueMoment);

//Add bootstrap-vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
