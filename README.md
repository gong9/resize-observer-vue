# resize-observer-vue

[![NPM version](https://img.shields.io/npm/v/resize-observer-vue.svg?style=flat)](https://npmjs.org/package/resize-observer-vue)
[![NPM downloads](http://img.shields.io/npm/dm/resize-observer-vue.svg?style=flat)](https://npmjs.org/package/resize-observer-vue)

> πββοΈ [docs](https://gong9.github.io/resize-observer-vue/)   
Or if you want to use react  π€ΈββοΈ [for react](https://github.com/react-component/resize-observer)

![ζζ](https://s2.loli.net/2022/12/11/OwD4QZoACyXbBGx.gif)
> The width of the case box is 100% by default. You need to manually switch the viewport width
## whatοΌπ

Whether the size and location of the listening component have changed, Only support vue3

## How to use it? π

`pnpm add resize-observer-vue`

### 1. Similar to the use of react high-order components

import 
```ts
import { createApp } from 'vue'
import ResizeObserver from 'resize-observer-vue'
import App from './example/App.vue'

const app = createApp(App)

app.use(ResizeObserver).mount('#app')
```

Or introduced as a component 

```ts
import { ResizeObserver } from 'resize-observer-vue'
```

use 

```vue
<ResizeObserver :on-resize="callback" :disabled="false">
    <TargetComponent/>
<ResizeObserver/>
```


### 2. The same supports vue instructions

registration Directive

```ts
import { directive } from 'resize-observer-vue'
const app = createApp({})

app.directive('resize', directive)

```

use

```vue
<TargetComponent v-resize:[disabled]="callback" />
```

### 3. No longer provide the way of hooks

Originally, the use of hooks can also be as simple as the following

```ts
const targetRef = ref()
useResize(targetRef, () => {
  // ...
})
```

```vue
<TargetComponent ref="targetRef" />
```
But unfortunately, in the setup syntax of vue3, it is no longer possible to simply obtain instances of subcomponents through ref. Must be exported manually. but i see no value in doing this
## API


| Property | Type                        | Default | Description                     |
| -------- | --------------------------- | ------- | ------------------------------- |
| disabled | boolean                     | false   | Whether to disable observation                            |
| onResize | ({ width, height }) => void | -       | Trigger when child node resized |
