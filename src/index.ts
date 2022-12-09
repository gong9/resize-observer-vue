import type { App } from 'vue'
import ResizeObserver from './core/resizeObserver.vue'

export default {
  install(app: App) {
    app.component('ResizeObserver', ResizeObserver)
    return app
  },
}
