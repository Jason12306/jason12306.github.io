# 一、安装
`npm install web3 truffle @truffle/contract`

#  二、实例化web3
`web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");`
> 然后你需要创建一个 web3 的实例，设置一个 provider。 支持以太坊的浏览器如 Mist 或 MetaMask 会有提供一个 ethereumProvider 或 web3.currentProvider。对于 web3.js 来说，可以检查 Web3.givenProvider ，如果属性为 null 再连接本地或远程的节点。

> 新的 Dapp 浏览器或 MetaMask 的新版本，注入了一个 ethereum 对象到 window 对象里，使用 ethereum.enable() 来请求用户授权访问链接账号。`if (window.ethereum) window.ethereum.enable()`

# 三、实例化智能合约
```
  let MyContract = TruffleContract(Adoption)
  MyContract.setProvider(web3.currentProvider);
  this.contract = await MyContract.deployed();
```

# 四、调用合约方法
`this.contract.yourMethod(args, { from: accounts[0] })` 这里与不使用 `truffle` 调用有一些差别