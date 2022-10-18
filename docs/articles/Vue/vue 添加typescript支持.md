1. npm install typescript ts-loader tslint tslint-loader -D

初始化 TypeScript 及代码检查配置

2. 添加vue支持
npm install vue-property-decorator vue-class-component -S

[参考文档](https://cn.vuejs.org/v2/guide/typescript.html)

vue.config.js配置如下：
```json
config.resolve.extensions.push(".ts");

 config.module
      .rule("tslint")
      .enforce("pre")
      .test(/\.ts$/)
      .use("tslint-loader")
      .loader("tslint-loader")
      .end();

    config.module
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
```