import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';

const pinia = createPinia();

// Use pinia on the Vue instance
const app = createApp(App);
app.use(pinia);

app.mount('#app');
