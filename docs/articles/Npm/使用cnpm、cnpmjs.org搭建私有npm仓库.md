一、安装 `cnpm、cnpmjs.org`；
二、配置  `~/.cnpmjs.org/config.json` ，若没有则自行创建；参考：https://github.com/cnpm/cnpmjs.org/blob/master/config/index.js


```json
{
  "debug": false, // 是否启动 debug 模式
  "enableCluster": true, // 是否启用 cluster 模式
  "mysqlServers": [ // 数据库配置，以 mysql 为例
    {
      "host": "host",
      "port": 3306,
      "user": "user",
      "password": "password"
    }
  ],
  "mysqlDatabase": "cnpmjs", // 数据库名
  "enablePrivate": true, // 是否启用私有化，这样只有定义在 `admins` 中的用户才能发布
  "admins": { // 管理员配置，可以配置多个
    "senntyou": "xxxx"
  },
  "syncModel": "exist", // 同步模式
  "scopes": [ // 包前缀，如果不是以这个前缀命名的包将不能发布，可以配置多个
    "@test"
  ],
  "registryHost": "your.company.npm.registry.com", // 你的服务器对应的 npm registry 地址
  "sourceNpmRegistry": "https://registry.npm.taobao.org" // 如果在该仓库中找不到的包，会上游到哪里去找
}
```

包默认储存目录：`~/.cnpmjs.org/nfs`
配置文件目录：`~/.cnpmjs.org/config.json`