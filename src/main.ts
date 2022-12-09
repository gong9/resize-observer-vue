import { createApp } from 'vue'
import App from './example/App.vue'
import ResizeObserver from './index'

const app = createApp(App)

app.use(ResizeObserver).mount('#app')
