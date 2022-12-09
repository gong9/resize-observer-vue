<script setup lang='ts'>
import { ref } from 'vue'
import { ResizeObserver } from '../dist/vue-resize-observer.mjs'
import WrapVue from './wrap.vue'

interface SizeInfoType {
  width: number
  height: number
  offsetWidth: number
  offsetHeight: number
}

const sizeRef = ref<SizeInfoType | null>()
const onResize = (size: SizeInfoType) => {
  sizeRef.value = size
}
</script>

<template>
  <div>
    {{ sizeRef?.width }}
    {{ sizeRef?.height }}

    <ResizeObserver :on-resize="onResize">
      <WrapVue />
    </ResizeObserver>
  </div>
</template>

<style scoped lang='scss'>
</style>
