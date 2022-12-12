import type { Directive, VNode } from 'vue'
import { observe, unobserve } from '../../utils'
import type { SizeInfoType } from '../SingleObserver'

interface BindingType {
  [key: string]: any
}

const initSizeInfo = {
  width: -1,
  height: -1,
  offsetWidth: -1,
  offsetHeight: -1,
}
type onResize = (arg: SizeInfoType, el: Element) => void
const sizeMap = new Map<Element, SizeInfoType >()
const onResizeMap = new Map<Element, onResize >()

const onInternalResize = (target: Element) => {
  const { width, height } = target.getBoundingClientRect()
  const { offsetWidth, offsetHeight } = target as HTMLElement
  const fixedWidth = Math.floor(width)
  const fixedHeight = Math.floor(height)

  const curSizeInfo = sizeMap.get(target)

  if (
    curSizeInfo!.width !== fixedWidth
      || curSizeInfo!.height !== fixedHeight
      || curSizeInfo!.offsetWidth !== offsetWidth
      || curSizeInfo!.offsetHeight !== offsetHeight
  ) {
    const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight }
    sizeMap.set(target, size)

    if (onResizeMap.get(target)) {
      Promise.resolve().then(() => {
        (onResizeMap.get(target) as onResize)(size, target)
      })
    }
  }
}

const handleObserve = (binding: BindingType, vnode: VNode) => {
  const curElement = (vnode.el) as Element
  const isDisabled = binding?.arg || false

  if (curElement && !isDisabled) {
    sizeMap.set(curElement, initSizeInfo)
    onResizeMap.set(curElement, binding.value)

    observe(curElement, onInternalResize)
  }
}

const clean = (curElement: Element) => {
  if (curElement) {
    if (sizeMap.has(curElement))
      sizeMap.delete(curElement)

    if (onResizeMap.has(curElement)) {
      unobserve(curElement, onInternalResize)
      onResizeMap.delete(curElement)
    }
  }
}

export default {
  mounted(el, binding, vnode, prevVnode) {
    handleObserve(binding, vnode)
  },

  updated(el, binding, vnode, prevVnode) {
    const curElement = (vnode.el) as Element

    if (sizeMap.has(curElement)) {
      if (binding?.arg)
        clean(curElement)
    }
    else {
      handleObserve(binding, vnode)
    }
  },

  unmounted(el, binding, vnode, prevVnode) {
    const curElement = vnode.el

    clean(curElement)
  },
} as Directive
