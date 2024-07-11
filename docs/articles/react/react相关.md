# react相关

## 组件
react组件是一段可以使用标签进行扩展的JS函数，组件名称必须以大写字母开头，否则无法使用。React 仅在渲染之间存在差异时才会更改 DOM 节点。

## 组件被渲染两次
React 提供了 “严格模式”，在严格模式下开发时，它将会调用每个组件函数两次。通过重复调用组件函数，严格模式有助于找到违反这些规则的组件。([参考](https://zh-hans.react.dev/learn/keeping-components-pure))

## JSX 规则
1. 只能返回一个根元素，JSX 虽然看起来很像 HTML，但在底层其实被转化为了 JavaScript 对象，你不能在一个函数中返回多个对象，除非用一个数组把他们包装起来。这就是为什么多个 JSX 标签必须要用一个父元素或者 Fragment 来包裹。
2. 标签必须闭合 
3. 使用驼峰式命名法给 所有 大部分属性命名

## hook
在 React 中，useState 以及任何其他以“use”开头的函数都被称为 Hook。
Hook 是特殊的函数，只在 React 渲染时有效（我们将在下一节详细介绍）。它们能让你 “hook” 到不同的 React 特性中去。

>Hooks ——以 use 开头的函数——只能在组件或自定义 Hook 的最顶层调用。 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。([参考](https://zh-hans.react.dev/learn/state-a-components-memory))