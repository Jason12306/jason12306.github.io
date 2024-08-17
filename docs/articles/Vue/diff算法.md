# diff 算法

核心 diff 算法只关心新旧 vnode 都存在一组子节点的情况（p218）

虚拟节点数在创建的过程，也在创建对应的 dom 元素，在 vnode 上有一个 el 属性用于保存真实的 dom 节点。

为什么要使用 diff 算法而不是将所有就得节点都卸载掉重新挂载新的节点？因为 web 页面创建太多 dom 元素存在性能瓶颈，diff 目的是尽可能减少开销提高性能

diff 算法进行节点更新时，主要目的在于其对应的真实 dom 而不是虚拟节点本身，本质上是更新前后节点的差异来表示不同，并作用到对应的真实节点上。减少 dom 节点的创建，提高性能。

## 关于 key

虚拟节点中使用 key 作为唯一标识，当 key 与 vnode.type 相同时，认为新旧 vnode 相同可以进行 DOM 复用。注意，DOM 复用并不意味不需要更新

```ts
// packages/runtime-core/src/vnode.ts:339

export function isSameVNodeType(n1: VNode, n2: VNode): boolean {
  if (
    __DEV__ &&
    n2.shapeFlag & ShapeFlags.COMPONENT &&
    hmrDirtyComponents.has(n2.type as ConcreteComponent)
  ) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false
  }
  return n1.type === n2.type && n1.key === n2.key
}
```

## diff 流程

响应式数据发生改变 render 函数产生新的 vnode
遍历：遍历新旧节点通过 key 找到对应 vnode
更新：新旧 vnode 进行 patch 更新 DOM 内容
移动：移动节点是指移动一个虚拟节点对应的真实 DOM 节点。每次寻找可复用节点时，会记录该可复用节点在旧的一组子节点中的索引。将旧节点的真实 DOM 赋给新节点的 vnode.el（复用 DOM 节点）

## 简单 diff 算法

关于判断是否要进行移动：
存储 lastIndex 具体为新 vnode 在旧 vnode 中最大索引，默认值为 0，若后续新 vnode 在旧 vnode 的索引值小于该值，则说明需要进行移动（p228）

移动：
具体移动方式为，如果找不到新 vnode 的前一个节点则说明他是第一个不需要移动（p232），否则将其移动到前一个 vnode 的真实节点后面，具体实现是 insertBefore，需要找到前一个真实节点的兄弟元素作为锚点

添加新元素：
直接挂载到新 vnode 的真实 DOM 下

移除旧元素：
当基本更新对比完后，遍历旧的一组 vnode 在新的一组 vnode 中是否存在，不存在这移除

## 快速 diff 算法

快速 diff 算法借鉴了纯文本 diff 算法中预处理步骤

### 关于预处理

对于新旧 vnode 组中，相同的前置和后置节点只需要进行 patch 打补丁(p273)，无需进行 DOM 节点移动

具体实现：使用变量 j 指向两组节点的开头，通过`isSameVNodeType`判断是否为同一个 vnode，是则进行 patch 预处理并且 j++，否则通过 newEnd 和 oldEnd 指向新旧 vnode 组结尾，进行遍历并在循环中递减 1，直至不相同节点为止，此时预处理完成

### 判断是否进行 DOM 移动（p282）

首先，我们使用 source 记录旧节点组在新节点组中索引，默认值为-1，稍后用于计算最长递增子序列（为不需要移动 DOM 的虚拟节点）。

另外，需要一个 patched 标记已更新的节点，多余的 vnode 将卸载

### 移动（p290）

通过 source 求得最长递增子序列 seq，变量 s 为 seq 索引，i 为新的子节点索引，均从末尾开始。对新 vnode 组进行遍历，seq 均向前移动直至为 0。
判断逻辑：
`if (source[i] === -1)`则说明为新增节点执行挂载
`if (source[i] === seq[s])`存在于最长递增子序列中不需要移动
`else` 说明该节点非新增节点，并且不存在与最长递增子序列中需要进行移动，移动方式与简单 diff 算法中类似
