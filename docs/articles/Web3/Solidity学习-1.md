# Solidity学习-1

## 一、整型
`int` / `uint` ：分别表示有符号和无符号的不同位数的整型变量。 支持关键字 `uint8` 到 `uint256` （无符号，从 8 位到 256 位）以及 `int8` 到 `int256`，以 8 位为步长递增。 `uint` 和 `int` 分别是 `uint256` 和 `int256` 的别名。
`uint8` 的长度为 `2**8 - 1` 即：[0, 255]，`int8`即[-128,127]；
需要注意整型溢出的问题，属于程序问题
解决方案：
1. 使用`assert` 断言
2. 使用 `safemath` 库

## 二、地址
以太坊中的地址的长度为20字节，一字节等于8位，一共160位，所以`address`也可以用`uint160`来声明。以太坊钱包地址是以16进制的形式呈现，十六进制的数字占4位，`160 ／ 4 = 40`，所以钱包地址的长度为40。

## 三、memory 与 storage 
memory关键字告诉solidity应当在该函数运行时为变量创建一块空间，使其大小和结构满足函数运行的需要。
Storage 变量是指永久存储在区块链中的变量。 Memory 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。
局部变量默认是storage类型，状态变量是强制为storage类型。

[速查表](https://learnblockchain.cn/docs/solidity/cheatsheet.html#id3)

## 四、转账
4.1 `transfer()` 从当前合约向某个地址转资产，大多数情况使用
4.2 `send()` 
发生异常时，不抛出错误，返回`false`，所以使用时需要检查返回值
异常：
    `Gas` 花费超过 2300

相同点：
都有 `2300 gas` 限制，当合约接收以太币时，很容易失败，以下操作消耗会大于 `2300 gas`：
>  
1. 写入储存（storage）
2. 创建一个合约
3. 执行一个外部(external)函数调用，会花费很多`gas`
4. 发送 `ether`



4.3 `call()`
合约环境是调用的合约环境
4.4 `delegatecall()`
合约环境是当前合约环境，地址为发起调用的账号地址

即`call()` ，`delegatecall()`本质区别

## 五、函数类型
1. 外部函数（`external`）
消耗 `gas` 比较多
2. 内部函数（`internal`）
3. 函数选择器（`selector`）
返回一个哈希值，`EVM`中实际上通过该哈希值进行函数匹配的，只有外部函数拥有。

## 六、引用类型
与`JavaScript`中表现一致
储存位置：`storage`（区块链中）、`memory`（EVM内存中）
1. `storage `
状态变量，复杂类型的局部变量
2. `memory`
局部变量即参数
3. 数组
`length` 获取长度
`push` 添加元素，仅限变长数组，`memory`数组不支持

## 七、 字节(bytes)与字符串(string)
字符串库（`solidity-stringutils`）