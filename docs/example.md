# 基本使用

<script setup>
import Example from '../example/App.vue'
import Directive from '../example/Directive.vue'
</script>



## 监听组件
> 案例盒子的宽度默认100%，需要手动切换视口宽度
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
      <div class="core" />
    </div>
  </div>
</template>
```

## 使用指令

<Directive/>

更改App代码如下「当然最好选择指令全局注册」
```ts
import { directive } from 'resize-observer-vue'
const app = createApp({})

app.directive('resize', directive)

```

```vue
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

```

## API

| Property | Type                        | Default | Description                     |
| -------- | --------------------------- | ------- | ------------------------------- |
| disabled | boolean                     | false   | 是否禁用观察器                            |
| onResize | ({ width, height }) => void | -       | 组件发生resize之后的回调 |