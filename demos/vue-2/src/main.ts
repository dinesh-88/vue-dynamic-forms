import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { createDynamicForms } from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms({
  autoValidate: true,
  form: {
    customClass: 'plugin-options-class-added',
    method: 'POST',
    netlify: false,
  },
});

Vue.config.productionTip = false;

Vue.use(VueDynamicForms);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
