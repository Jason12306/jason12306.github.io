1. vscode 设置  `"vetur.validation.template": false`

2. eslint 配置规则   
```json
vue/no-parsing-error: [2, {
      x-invalid-end-tag: false
    }]
```

3. vscode 格式化typescript
```
// settings.json
    eslint.validate: [
      "typescript"
    ]
```