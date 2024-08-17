# 关于 vue-router 的一些

使用`useRouter`和`useRoute`时，内部调用了 `vue` 的 `indejct` 方法进行注入（`src/useApi.ts`）

其提供是在 router 插件安装（install）时`app.provide`(`src/router.ts:1291`)

## RouterLink

RouterLink 默认渲染为`<a>`标签，存在`custom`则渲染`children`

```ts
// RouterLink.ts:310
const children = slots.default && slots.default(link)
return props.custom
  ? children
  : h(
      'a',
      {
        'aria-current': link.isExactActive ? props.ariaCurrentValue : null,
        href: link.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: link.navigate,
        class: elClass.value,
      },
      children
    )
```

## RouterView

RouterView 为匹配到的组件渲染出口

```ts
// RouterView.ts:199
return (
  // pass the vnode to the slot as a prop.
  // h and <component :is="..."> both accept vnodes
  normalizeSlot(slots.default, { Component: component, route }) || component
)
```
