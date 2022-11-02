# 以太坊智能合约与 web3-js 交互

## 如何创建一个 Web3 实例？

```js
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || {RPC地址});
```

## 如何连接 MetaMask 钱包？

```js
web3.eth.requestAccounts();
```

> 该方法将从当前运行环境（Metamask，Status 或 Mist）中请求/启用帐户。 如果你使用默认的 Web3.js provider (WebsocketProvider, HttpProvidder and IpcProvider) 连接节点，则该方法不起作用。 该方法只在你使用像 Status, Mist or Metamask 这些应用的嵌入式 provider 时才有效。

[参考](https://web3js.readthedocs.io/en/v1.8.0/web3-eth.html#requestaccounts)

## 给指定【账户地址】或【智能合约地址】授权(ERC20)

1. 创建合约实例 [api 文档](https://web3js.readthedocs.io/en/v1.8.0/web3-eth-contract.html#new-contract)

```js
// jsonInterface 合约的 ABI
// contractAddress 合约地址
const contractInstance = new web3.eth.Contract(jsonInterface, contractAddress);
```

2. 发起授权交易 [参考文档](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20-approve-address-uint256-)

```js
// approve(address spender, uint256 amount) → bool
// spender 授权地址 amount 剩余可用额度
contractInstance.methods.approve(spender, amount).send({
  from: "交易发送方",
});
```

## 使用已授权地址进行转账  
[参考文档](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20-transferFrom-address-address-uint256-)

### 账户地址

```js
// transferFrom(address from, address to, uint256 amount) → bool
// 代币合约实例
contractInstance.methods.transferFrom(from, to, amount).send({
  from: "交易发送方",
});
```

> Moves `amount` tokens `from` from to `to` using the allowance mechanism. `amount` is then deducted from the caller’s allowance.

> 译: 使用津贴机制将`amount`个代币 从`from`转移到`to`。 然后“amount”会从调用者（交易发送方）的津贴（被授权金额）中扣除。

### 智能合约

1. 实现自定义合约，被授权的自定义合约需要存在一个调用 `transferFrom` 函数的函数

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract YourCustomContract {
    // erc20 代币地址 通过暴露方法可实现多种代币授权
    address token = 0xb7C4E2e8eC47d882F50f77A37722C8535a462CA4; // VY 币

    ERC20 CustomToken = ERC20(token);

    // 该函数用于调用代币的 `transferFrom` 方法
    function vyTransferFrom(address from, address to, uint256 amount) public returns (bool) {
        return CustomToken.transferFrom(from, to, amount);
    }

}
```

2. 调用自定义合约的自定义方法

```js
// 自定义合约实例  
// YourCustomContractABI 合约的 ABI
// YourCustomContractAddress 合约地址
const yourCustomContractInstance = new web3.eth.Contract(
  YourCustomContractABI,
  YourCustomContractAddress
);

yourCustomContractInstance.methods.vyTransferFrom(from, to, amount).send({
  from: "交易发送方", // 任意可付款账户
});
```

> 说明：由于被授权者（spender）为自定义合约，所以交易调用方为自定义合约。
> 参考源码实现，其 spender（ msg.sender） 指向当前自定义合约**而不是**交易发送者。
> 部分源码实现如下：

```solidity{3,13}
  // ...
  function approve(address spender, uint256 amount) public virtual override returns (bool) {
    address owner = _msgSender();
    _approve(owner, spender, amount);
    return true;
  }
  // ...
  function transferFrom(
    address from,
    address to,
    uint256 amount
  ) public virtual override returns (bool) {
    address spender = _msgSender(); // msg.sender
    _spendAllowance(from, spender, amount);
    _transfer(from, to, amount);
    return true;
  }
  // ...
```

[approve源码](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol#L136)  

[transferFrom源码](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol#L158)  
