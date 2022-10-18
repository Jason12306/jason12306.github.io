### 一、什么是MVVM模式
`MVVM（Model-View-ViewModel）`是一种设计方式，`Model`数据层代表数据模型，`View`视图层，ViewModel 是一个同步View和Model的对象。在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

### 二、响应式原理
Vue: 在生成vue实例时，为对传入的data进行遍历，使用`Object.defineProperty`把这些属性转为`getter/setter`。每个vue实例都有一个watcher实例，它会在实例渲染时记录这些属性，并在setter触发时重新渲染。

React: React是通过this.setState去改变数据，然后根据新的数据重新渲染出虚拟DOM，最后通过对比虚拟DOM找到需要更新的节点进行更新。

也就是说React是依靠着虚拟DOM以及DOM的diff算法做到这一点的。

### 三、vue中是如何监听数组变化？
vue重写了数组的push、splice、pop等方法，除了将数组方法名对应的原始方法调用一遍并将执行结果返回外，还通过执行ob.dep.notify()将当前数组的变更通知给其订阅者，这样当使用重写后方法改变数组后，数组订阅者会将这边变化更新到页面中。

### 四、对比`Object.defineProperty()`和`proxy`对数组监听的处理
`Object.defineProperty()`方法用于给对象添加属性
问题：
1. 不能监听数组的变化，数组的以下几个方法不会触发 set,push、pop、shift、unshift、splice、sort、reverse
2. 必须遍历对象的每个属性，使用 Object.defineProperty() 多数要配合 Object.keys() 和遍历，于是多了一层嵌套
3. 必须深层遍历嵌套的对象

proxy可以直接代理数组，可以发现proxy不但可以直接监听数组，而且代理数组后可以监听到数组常用的方法对数组产生的改变，比Object.defineProperty()更方便更强大，这也是Vue 3.0使用proxy进行数据监听的原因。
能够解决：
  1. 针对对象，Proxy 是针对 整个对象obj 的。因此无论 obj 内部包含多少个 key ，都可以走进 set。(并不需要通过Object.keys() 的遍历)
2. 支持数组,Proxy 不需要对数组的方法进行重载，省去了众多 hack，减少代码量等于减少了维护成本
3. 嵌套支持，Proxy 也是不支持嵌套的，这点和 Object.defineProperty() 是一样的。因此也需要通过逐层遍历来解决。Proxy 的写法是在 get 里面递归调用 Proxy 并返回
```
let obj = {
  info: {
    name: eason,
    blogs: [webpack, babel, cache]
  }
}
let handler = {
  get (target, key, receiver) {
    console.log(get, key)
    // 递归创建并返回
    if (typeof target[key] === object && target[key] !== null) {
      return new Proxy(target[key], handler)
    }
    return Reflect.get(target, key, receiver)
  },
  set (target, key, value, receiver) {
    console.log(set, key, value)
    return Reflect.set(target, key, value, receiver)
  }
}
let proxy = new Proxy(obj, handler)
// 以下两句都能够进入 set
proxy.info.name = Zoe
proxy.info.blogs.push(proxy)
```


`const p = new Proxy(target, handler)`
target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为，get、set等。

`Object.defineProperty(obj, prop, descriptor)`
          	         configurable	enumerable	value	writable	get	         set
数据描述符	 可以           	可以	                可以	         可以 	不可以	不可以
存取描述符	可以	          	可以	          	不可以	不可以	可以          可以

```
let obj = []
  const arrProxy = new Proxy(obj, {
    get(target, prop, receiver) {
      console.log("获取值", prop);
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      console.log("设置值", value);
      target[prop] = value
      return Reflect.get(target, prop, value);
    }
  })
```
>Reflect.get 和 Reflect.set 可以理解为类继承里的 super，即调用原来的方法

### 五、Vue.nextTick 的原理
1. 异步：Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新;
2. 事件循环：Vue在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。

### 六、vue-router 路由传参
在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。使用 props 将组件和路由解耦：

1. 布尔模式
如果 props 被设置为 true，route.params 将会被设置为组件属性。

2. 对象模式
如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。

3.函数模式
你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

[官方文档](https://router.vuejs.org/zh/guide/essentials/passing-props.html)

### 七、`v-model`等价如下
绑定属性，监听`input`事件
```
<custom-input
  v-bind:value="searchText"
  v-on:input="searchText = $event"
></custom-input>
```