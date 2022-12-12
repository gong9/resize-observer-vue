import type { App } from 'vue'
import ResizeObserver from './core/ResizeObserver'
import directive from './core/directive'
export {
  ResizeObserver,
  directive,
}

export default {
  install(app: App) {
    app.component('ResizeObserver', ResizeObserver)
    return app
  },
}
