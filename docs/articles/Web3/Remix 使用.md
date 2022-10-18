# Remix 使用

## 使用
1. 安装 `npm install remix-ide remixd -g`
2. `remixd -s <shared folder> --remix-ide https://remix.ethereum.org` 连接目录至某环境

## 关于 `remix-ide` 的bug

q: 启动时 `remixd.Router` 未定义(`undefined`)  
a: `yourpath/lib/node_modules/remix-ide/bin/remix-ide` 注释掉代码  
```js
// var router = new remixd.Router(65520, remixd.services.sharedFolder, { remixIdeUrl: 'http://localhost:8080' }, (webSocket) => {
//   remixd.services.sharedFolder.setWebSocket(webSocket)
//   remixd.services.sharedFolder.setupNotifications(folder)
//   remixd.services.sharedFolder.sharedFolder(folder, false)
// })

// router.start()
```  
q: 部署完合约后不显示对应操作按钮  
a:  可能为某些文件没有加载完成，通过控制台观察  