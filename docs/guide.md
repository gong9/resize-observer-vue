# resize-observer-vue

## 是什么？

监听组件的大小、位置是否发生了改变

## 怎么用

`pnpm add resize-observer-vue`


引入
```ts
import { createApp } from 'vue'
import ResizeObserver from 'resize-observer-vue'
import App from './example/App.vue'

const app = createApp(App)

app.use(ResizeObserver).mount('#app')
```

使用
```vue
<ResizeObserver>
    <TargetComponent/>
<ResizeObserver/>
```