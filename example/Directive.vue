<script setup lang='ts'>
import { ref } from 'vue'
import { directive } from '../src/index'
import WrapVue from './wrap.vue'

interface SizeInfoType {
  width: number
  height: number
  offsetWidth: number
  offsetHeight: number
}

const sizeRef = ref<SizeInfoType | null>()
const disabledRef = ref(false)
const vResize = directive

const onResize = (size: SizeInfoType) => {
  sizeRef.value = size
}

const switchDisabled = () => {
  disabledRef.value = !disabledRef.value
}
</script>

<template>
  <div>
    {{ sizeRef?.width }}
    {{ sizeRef?.height }}

    <WrapVue v-resize:[disabledRef]="onResize" />

    <div>
      disabled=> {{ disabledRef }}
      <button class="button" @click="switchDisabled">
        切换disabled
      </button>
    </div>
  </div>
</template>

<style scoped lang='css'>
.button {
    background-color: #4c7faf; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
}
</style>
