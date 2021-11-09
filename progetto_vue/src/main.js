import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

// I don't use it by default.
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
