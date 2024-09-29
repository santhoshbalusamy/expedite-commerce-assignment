import '@/assets/main.scss';

import { createApp } from 'vue';
import { createStore } from '@/stores/store';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createStore());
app.use(router);

app.mount('#app');
