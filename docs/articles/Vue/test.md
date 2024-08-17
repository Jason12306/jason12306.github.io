createApp
render
createApp
app 实例
mount 方法

mount 方法调用根的 render 函数
根 render 执行 patch，在此之前会创建根 vnode
patch -> processComp -> mountComp

更新函数被设置为 setReactiveEffect 并执行

更新函数内执行组件的 render 生成虚拟节点，作为子树 subTree

subTree 会进行 patch 进行 processElement mountElement 此时类型变为 element 并创建真实节点

遇到 children 进行递归进行 processEle processComp 进行挂载（深度优先遍历）

最终 insert 插入到页面
