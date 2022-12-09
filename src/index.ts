import type { App } from 'vue'
import ResizeObserver from './core/ResizeObserver'
export {
  ResizeObserver,
}

export default {
  install(app: App) {
    app.component('ResizeObserver', ResizeObserver)
    return app
  },
}
