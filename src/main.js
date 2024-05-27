
import 'ymaps'
import { createApp } from 'vue';
import store from './store'
import App from './App.vue';
import router from './router'; // добавляем роутер
import GlobalHeader from './components/GlobalHeader.vue'; // предполагаемый путь к вашему компоненту навигации

const app = createApp(App);
app.use(router).use(store); // используем роутер
app.component('GlobalHeader', GlobalHeader); // регистрируем компонент навигации
app.mount('#app');
