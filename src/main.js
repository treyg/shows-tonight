import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueMoment from 'vue-moment';

Vue.use(VueMoment);


new Vue({
  render: h => h(App),
}).$mount('#app')
