### 一、JSX 防止注入攻击
你可以安全地在 JSX 当中插入用户输入内容，React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止XSS（cross-site-scripting, 跨站脚本）攻击。

### 二、`React State`
`State` 的更新可能是异步的，出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。要解决这个问题，可以让 `setState()` 接收一个函数而不是一个对象。这个函数用上一个 `state` 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

### 三、事件处理
React 元素的事件处理和 DOM 元素事件处理差别：
1. `React` 事件的命名采用小驼峰式（`camelCase`），而不是纯小写
2. 使用 `JSX` 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
3. 另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault` 

`this`指向：
    1. 在 JavaScript 中，`class` 的方法默认不会绑定 `this`。如果你忘记绑定 `this.handleClick` 并把它传入了 `onClick`，当你调用这个函数的时候 `this` 的值为 `undefined`。[参考](https://react.docschina.org/docs/handling-events.html)
    2. 使用箭头函数绑定`this`，此语法问题在于每次渲染 该组件时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 `prop` 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 `class fields` 语法来避免这类性能问题。

### 四、条件渲染
React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI：
1. 与运算符 && 
2. 三目运算符 
3. 阻止组件渲染

阻止组件渲染：在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。在组件的 render 方法中返回 null 并不会影响组件的生命周期。

### 五、受控组件
在 `React` 中，可变状态（mutable state）通常保存在组件的 `state` 属性中，并且只能通过使用 `setState()`来更新，使 `React` 的 `state` 成为“唯一数据源”。渲染表单的 `React` 组件还控制着用户输入过程中表单发生的操作。被 `React` 以这种方式控制取值的表单输入元素就叫做“受控组件”。
`input type="file"` 因为它的 `value` 只读，所以它是 `React` 中的一个非受控组件。

5.1 处理多个输入
当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作。

### 六、组合 vs 继承
`React` 有十分强大的组合模式。我们推荐使用**组合而非继承**来实现组件间的代码重用。

6.1 包含关系
有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。
我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中

6.2 类`slot`插槽
 `React` 中没有“槽”这一概念的限制，你可以将任何东西作为 `props` 进行传递。[参考](https://react.docschina.org/docs/composition-vs-inheritance.html)