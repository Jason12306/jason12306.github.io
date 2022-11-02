# 给 process env 对象自定义属性添加ts类型声明

```ts
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CUSTOM_ATTR1: string;
      CUSTOM_ATTR2: string;
    }
  }
}

```  

注：类型应该始终为 `string`
