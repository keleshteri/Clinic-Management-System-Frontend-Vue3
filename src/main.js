/**Core */
import { createApp } from 'vue'
//tailwind css
import './css/index.css'
//router & store
import router from "./router";
import store from "./store";
//Main App
import App from './App.vue'


/**createApp */
const app = createApp(App);
//store
app.use(store);
//router
app.use(router);

app.mount('#app')
