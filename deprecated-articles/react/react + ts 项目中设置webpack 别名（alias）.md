1. `webpack`配置文件中设置别名
```js
// ...
alias: {
 '@': path.resolve(__dirname, "../xxx")
}
// ...
```

2. `tsconfig.json`文件中配置
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["xxx/*"]
    }
  }
}
```

[`tsconfig.json` 参考文档](https://www.typescriptlang.org/zh/tsconfig)