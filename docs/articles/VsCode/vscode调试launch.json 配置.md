# vscode 调试 launch.json 配置

## 配置

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "当前文件",
      "program": "${file}",
      "request": "launch",
      "type": "node"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "runtimeArgs": ["run", "dev"],
      "runtimeExecutable": "npm",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

- [配置文件【官方】](https://code.visualstudio.com/docs/editor/debugging#_launch-configurations)
- [变量参考【官方】](https://code.visualstudio.com/docs/editor/variables-reference)
- [配置文件详解](https://juejin.cn/post/6844904198702645262)
- [参考文档](https://www.barretlee.com/blog/2019/03/18/debugging-in-vscode-tutorial/)
