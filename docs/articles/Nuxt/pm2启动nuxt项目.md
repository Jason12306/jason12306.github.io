# pm2启动nuxt项目

- `pm2 start npm --name '项目名' -- run start`
- 添加到 `package.json` 中
```json
// package.json
"scripts": {
     ...
    "pm2": "pm2 start npm --name '项目名' -- run start"
     ...
}
```

