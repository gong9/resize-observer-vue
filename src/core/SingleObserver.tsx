import type { VNode } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, context) {
    const defaults = (context.slots as any)?.default() || []
    // const elementRef = ref<VNode | HTMLElement | null>(null)

    // // 假设就一个孩子
    // watchPostEffect(() => {
    //   defaults.forEach((vnode: VNode) => {

    //   })
    // })

    const handleElementVnode = (arrVNode: VNode[]) => {
      return arrVNode.map(
        (VNode) => {
          return VNode
        },
      )
    }

    return () => handleElementVnode(defaults)
  },
})
