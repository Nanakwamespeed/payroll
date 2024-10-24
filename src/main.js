import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import "@/assets/css/nucleo-icons.css";
import "@/assets/css/nucleo-svg.css";
import MaterialDashboard from "@/material-dashboard";
import 'material-icons/iconfont/material-icons.css';



const app = createApp(App);
app.use(router);
app.use(store);
app.use(MaterialDashboard);
app.mount('#app');
