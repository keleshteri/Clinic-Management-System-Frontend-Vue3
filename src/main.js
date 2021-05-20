/**Core */
import { createApp } from 'vue'
//tailwind css
import './css/index.css'
//router & store
import router from "./router";
import store from "./store";
//Main App
import App from './App.vue'

//fortawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
 
//
import DashboardLayout from './layouts/DashboardLayout.vue';
import EmptyLayout from './layouts/EmptyLayout.vue';

/**createApp */
const app = createApp(App);
//

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);
//
app.component("fa-icon", FontAwesomeIcon)
//store
app.use(store);
//router
app.use(router);

app.mount('#app')
