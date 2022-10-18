# 常用 JS 代码

## 元素是否全屏显示
```ts
export const isFullScreenElement = (el: HTMLElement) => {
   return window.document.fullscreenElement === el
}
```

## 使元素全屏显示
```ts
export const beFullScreen = (el: HTMLElement) => {
  el.requestFullscreen()
}
```
