# vue 初始化流程

当我们调用`createApp`时内部调用如下

createApp

```ts
export const createApp = (...args) => {
  const app = ensureRenderer().createApp(...args)

  return app
}
```

ensureRenderer

```ts
// packages/runtime-dom/src/index.ts

// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
// 延迟创建渲染器 - 如果用户仅从 Vue 导入响应式程序，这会使核心渲染器逻辑可进行摇树优化。
let renderer: Renderer<Element | ShadowRoot> | HydrationRenderer
// l:42
function ensureRenderer() {
  return (
    renderer ||
    (renderer = createRenderer<Node, Element | ShadowRoot>(rendererOptions))
  )
}
```

createRenderer 内部调用并返回 baseCreateRenderer

```ts
//packages/runtime-core/src/renderer.ts:343~2358

function baseCreateRenderer(
  options: RendererOptions,
  createHydrationFns?: typeof createHydrationFunctions
): any {
  // 定义了 以下 函数
  const patch = () => {}
  const processElement = () => {}
  const mountElement = () => {}
  const mountChildren = () => {}
  const patchProps = () => {}
  const processComponent = () => {}
  const mountComponent = () => {}
  const setupRenderEffect = () => {}
  // 根渲染函数
  const render: RootRenderFunction = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true)
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG)
    }
    flushPostFlushCbs()
    container._vnode = vnode
  }

  return {
    render,
    createApp: createAppAPI(render, hydrate),
  }
}
```

createAppAPI

```ts
// /packages/runtime-core/src/apiCreateApp.ts

let uid = 0

export function createAppAPI<HostElement>(
  render: RootRenderFunction,
  hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
    const context = createAppContext()
    const installedPlugins = new Set()

    let isMounted = false
    const app = {
      _uid: uid++,
      _component: rootComponent as ConcreteComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      get config() {
        return context.config
      },

      set config(v) {
        if (__DEV__) {
          warn(
            `app.config cannot be replaced. Modify individual options instead.`
          )
        }
      },

      use(plugin: Plugin, ...options: any[]) {},
      component(name: string, component?: Component): any {},
      directive(name: string, directive?: Directive) {},
      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {
        if (!isMounted) {
          const vnode = createVNode(
            rootComponent as ConcreteComponent,
            rootProps
          )
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          vnode.appContext = context

          //  通过闭包，柯里化函数 存储了render
          render(vnode, rootContainer, isSVG) // vy: 虚拟节点 渲染为 真实节点

          isMounted = true

          app._container = rootContainer

          return getExposeProxy(vnode.component!) || vnode.component!.proxy
        }
      },
    }

    return app
  }
}
```

createVNode

```ts
// http://localhost:52330/packages/runtime-core/src/vnode.ts

function createBaseVNode() {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
  } as VNode

  return vnode
}
```

app.mount() ->
根 render->
patch -> processComponent -> mountComponent
↓
-> createComponentInstance
-> setupComponent(instance)
-> setupRenderEffect(组件实例，初始虚拟节点)

setupRenderEffect -> componentUpdateFn
创建组件实例
调用生命周期函数 beforeMounted
->
instance.subTree = renderComponentRoot(instance)
-> 调用组件 render 生成虚拟节点 vnode 并返回赋值给 subtree
再进行 patch(
null,
subTree,
container,
anchor,
instance,
parentSuspense,
isSVG
)

shapeFlag = 17
processElement()
mountElement()
CreateElement
mountChildren() 深度优先遍历
组件生命周期函数 mounted
insert()
结束
