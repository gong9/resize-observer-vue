import type { VNode } from 'vue'
import { defineComponent } from 'vue'
import ResizeObserver from './SingleObserver'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
    },
    onResize: {
      type: Function,
      default: () => {},
    },
  },
  setup(props, context) {
    const defaults = (context.slots as any)?.default() || []

    return () => (
      <div>
       { defaults.map((node: VNode) => {
         return (
          <ResizeObserver {...props}>
            {node}
          </ResizeObserver>
         )
       })}
      </div>
    )
  },
})
