<script setup lang='ts'>
import { ref } from 'vue'
import type { SizeInfoType } from '../core/SingleObserver'
import ResizeObserver from '../core/ResizeObserver'
import WrapVue from './wrap.vue'
const sizeRef = ref<SizeInfoType | null>()

const onResize = (size: SizeInfoType) => {
  console.log(sizeRef.value)

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
