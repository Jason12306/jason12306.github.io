### [go-ethereum Github 地址](https://github.com/ethereum/go-ethereum)

### [安装](https://geth.ethereum.org/docs/install-and-build/installing-geth)

### 常用命令
- geth 启动
- geth console 启动控制台
- geth --datadir value 指定数据存储目录
- geth --dev 开发者模式
- geth --rpc 启用rpc方式
- geth --rpccorsdomain  允许跨域请求

### 搭建私有链
Operating a private network:  https://github.com/ethereum/go-ethereum
也可使用 puppeth 生成配置文件

### 节点集群搭建（P15）
注意事项：
1. 需要不同的 --datadir
2. 不同的端口
3. 每个节点ipc唯一或禁用ipc

多节点建立连接
admin.addPeer 添加节点
net.peerCount 节点数量
miner.start()开启挖矿

### pm2 启动
```
[
  {
    "name": "geth",
    "cwd": "/home/gethData",
    "script": "/usr/local/bin/geth",
    "args": "--datadir . --dev --http --http.addr '0.0.0.0'  --http.corsdomain '*' --http.vhosts '*' console"
  }
]
```
geth --datadir . --dev --http  --http.corsdomain '*' --http.vhosts '*' console 2>>geth.log 

### npm install keythereum 获取私钥
```
const keythereum = require("keythereum")
var keyObject = keythereum.importFromFile(address, 'datadir');
privateKey = keythereum.recover(password, keyObject);
console.log(privateKey.toString('hex'));
```