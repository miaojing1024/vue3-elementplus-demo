import _axios from './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
console.log(_axios);

// 全局挂载axios
app.config.globalProperties.$axios = _axios

app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
