CJS
CommonJS，只能在 NodeJS 上运行，使用 require("module") 读取并加载模块。

缺点：不支持浏览器，执行后才能拿到依赖信息，由于用户可以动态 require（例如 react 根据开发和生产环境导出不同代码 的写法），无法做到提前分析依赖以及 Tree-Shaking 。

AMD
Asynchronous Module Definition，可以看作 CJS 的异步版本，制定了一套规则使模块可以被异步 require 进来并在回调函数里继续使用，然后 require.js 等前端库也可以利用这个规则加载代码了，目前已经是时代的眼泪了。

UMD
Universal Module Definition，同时兼容 CJS 和 AMD，并且支持直接在前端加载。现在还在广泛使用，不过可以想象 ESM 和 IIFE 逐渐代替它。

IIFE
Immediately Invoked Function Expression，只是一种写法，可以隐藏一些局部变量，前端人要是不懂这个可能学的是假前端。可以用来代替 UMD 作为纯粹给前端使用的写法。

ESM
ECMAScript Module，现在使用的模块方案，使用 import export 来管理依赖。由于它们只能写在所有表达式外面，所以打包器可以轻易做到分析依赖以及 Tree-Shaking。当然他也支持动态加载（import()）。

浏览器直接通过 `<script type="module">` 即可使用该写法。NodeJS 可以通过使用 mjs 后缀或者在 package.json 添加 "type": "module" 来使用，注意他还有一些 实验性的功能 没有正式开启。考虑到大量 cjs 库没有支持，如果要发布 esm 版的库还是通过 rollup 打包一下比较好（同时相关依赖可以放到 devDependencies 里）。

[原文链接](https://blog.csdn.net/weixin_35565522/article/details/112621085)
