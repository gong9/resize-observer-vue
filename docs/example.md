# 基本使用

<script setup>
import Example from '../example/App.vue'
</script>



## 监听组件

<Example />

main
```ts
import { createApp } from 'vue'
import ResizeObserver from 'resize-observer-vue'
import App from './example/App.vue'

const app = createApp(App)

app.use(ResizeObserver).mount('#app')

```


App
```vue
<script setup lang='ts'>
import { ref } from 'vue'
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

```

WrapVue

```vue
<script setup lang='ts'>
import { } from 'vue'
</script>

<template>
  <div>
    <div>
      <textarea id="" class="textarea" name="" cols="30" rows="10" />
    </div>
  </div>
</template>

<style scoped lang='css'>
.textarea{
  border: 1px solid red;
}
</style>

```