# Import '.json' extension in ES6 Node.js throws an error

1. 变更引用方式
```js
import types from "xxx.json" assert { type: "json" };
```
2. 执行  
```js 
node --experimental-json-modules xxx.mjs
```

[参考资料](https://stackoverflow.com/questions/60205891/import-json-extension-in-es6-node-js-throws-an-error)
