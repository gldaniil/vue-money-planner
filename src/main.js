import './assets/fonts.css';
import './assets/icons.css';
import './assets/main.css';

import { PrimeVue } from '@primevue/core';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);

app.mount('#app');
