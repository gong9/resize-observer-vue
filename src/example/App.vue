<script setup lang='ts'>
import { ref } from 'vue'
import type { SizeInfoType } from '../core/SingleObserver'
import WrapVue from './wrap.vue'
const sizeRef = ref<SizeInfoType | null>(null)

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
