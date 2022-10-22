# solidity 编写 编译 部署 调用
## 一、编写
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.8.0;

// 一个简单储存数字的 智能合约

// 关键字 pragma 的含义是，一般来说，pragmas（编译指令）是告知编译器如何处理源代码的指令的

contract SimpleStorage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}

```

## 二、编译

### 方式一： 使用 solc 编译 
```shell
solcjs --help
Usage: solcjs [options]

Options:
  -V, --version                        output the version number
  --version                            Show version and exit.
  --optimize                           Enable bytecode optimizer.
  --bin                                Binary of the contracts in hex.
  --abi                                ABI of the contracts.
  --standard-json                      Turn on Standard JSON Input / Output mode.
  --base-path <path>                   Automatically resolve all imports inside the given path.
  -o, --output-dir <output-directory>  Output directory for the contracts.
  -h, --help                           output usage information
  ```

注：`--base-path` 设置编译目录，避免打包时 `import` 找到不到目录

### 方式二：使用 remix 在线编译
`https://remix.ethereum.org/`
  
## 三、部署
### 场景一、部署到本地测试链
```js
// 实例化一个合约 abi 即 应用二进制接口
  const myContract = new this.web3Instance.eth.Contract(abi)

  myContract.deploy({ // 部署合约
    data: bin // 合约字节码
  }).send({ // 发起一个创建合约的交易
    from: "address", // 账号
    gas: 'number',
  }).then(newContractInstance => {
  })
```
### 场景二、部署到测试链
通过 `https://remix.ethereum.org/` 部署到测试链

## 四、调用
### 场景一、本地调用
```js
    async getValue() {
      const res = await this.contractInstance.methods.getVal().call()
      console.log("getVal", res);
    },
    async setValue() {
      const res = await this.contractInstance.methods.setVal(9).send({
        from: "xxxx", // 提供gas的账户
      })
      console.log(res);
    },
    init() {
    // web3 实例
      this.web3Instance = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')
    // 获取 智能合约 实例 contractAddress 为部署生成的地址
      this.contractInstance = new this.web3Instance.eth.Contract(abi, contractAddress)
    }
```
### 场景二、测试链调用
```js
 const encodedABI = await  this.contractInstance.methods.set("参数").encodeABI();

  const tx = {
    from: "address", // 地址
    to: "合约地址", // contractAddress
    gas: "number",
    data: encodedABI,
  };

  //  签名交易
  const signed = await web3.eth.accounts.signTransaction(
    tx,
    "地址私钥"
  );

  //  发送已签名交易
  const trans = await web3.eth.sendSignedTransaction(signed.rawTransaction);
```
