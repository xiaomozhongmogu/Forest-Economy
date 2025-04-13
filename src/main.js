import { createApp } from 'vue'
import pinia from './stores/index.js'
import App from './App.vue'
import router from './router'
// import Echarts from 'echarts'

const app = createApp(App)

// app.config.globalProperties.$echarts = Echarts
app.use(pinia)
app.use(router)
app.mount('#app')
