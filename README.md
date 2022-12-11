# resize-observer-vue

[![NPM version](https://img.shields.io/npm/v/marketing-components-pro.svg?style=flat)](https://npmjs.org/package/marketing-components-pro)
[![NPM downloads](http://img.shields.io/npm/dm/marketing-components-pro.svg?style=flat)](https://npmjs.org/package/marketing-components-pro)

> 🏄‍♀️ [docs](https://gong9.github.io/resize-observer-vue/)   
Or if you want use react  🤸‍♂️ [for react](https://github.com/react-component/resize-observer)


## what？🙊

Whether the size and location of the listening component have changed

## How to use it?? 🙈

`pnpm add resize-observer-vue`


import
```ts
import { createApp } from 'vue'
import ResizeObserver from 'resize-observer-vue'
import App from './example/App.vue'

const app = createApp(App)

app.use(ResizeObserver).mount('#app')
```

use
```vue
<ResizeObserver>
    <TargetComponent/>
<ResizeObserver/>
```
