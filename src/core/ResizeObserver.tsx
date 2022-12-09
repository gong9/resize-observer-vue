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
    return () => (
      <div>
       { ((context.slots as any)?.default() || []).map((node: VNode) => {
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
