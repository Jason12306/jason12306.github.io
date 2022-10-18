
1. [geth客户端安装](https://geth.ethereum.org/docs/install-and-build/installing-geth)

2. 创建目录存放数据 `mkdir data`

3. 创建账户 `geth --datadir data account new`

4. 配置创世区块
```
{
  "config": {
    "chainId": 1129,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0
  },
  "alloc": {
    "0x0000000000000000000000000000000000000001": {
      "balance": "111111111"
    },
    "0x0000000000000000000000000000000000000002": {
      "balance": "222222222"
    }
  },
  "coinbase": "0x0000000000000000000000000000000000000000",
  "difficulty": "0x20000",
  "extraData": "",
  "gasLimit": "0x2fefd8",
  "nonce": "0x0000000000000042",
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp": "0x00"
}
```
5. 写入创世区块
`geth --datadir data init genesis.json`

6.  启动 `geth --datadir data console`

7. `miner.start()` 开启挖矿