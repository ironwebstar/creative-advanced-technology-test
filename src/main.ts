import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import lazyPlugin from 'vue3-lazy'

import './assets/styles/index.css'
import loading from './assets/images/loading.svg'
import errorImg from './assets/images/b.png'

const app = createApp(App)
app.use(lazyPlugin, {
  loading: loading,
  error: errorImg
})

app.use(store).use(router).mount('#app')
