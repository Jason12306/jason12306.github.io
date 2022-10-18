# nuxt3自定义指令
## 一、编写指令  

```ts
import { App } from 'vue'

export default (vueApp: App) => {
  vueApp.directive('loading', {
    mounted(el, binding) {
      console.log(el, binding);
    }
  })
}
```
## 二、注册指令  

```ts
import { defineNuxtPlugin } from '#app'
import registeDirectives from 'path/to/directives'

export default defineNuxtPlugin(nuxtApp => {
    registeDirectives(nuxtApp.vueApp)
})
```
## 三、`nuxt` 配置  
  
```ts
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      directiveTransforms: {
        focus: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  }
})
```