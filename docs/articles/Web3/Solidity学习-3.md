# Solidity学习-3

## 一、函数修改器（modifier）
1. 可以被继承
2. 可以传递参数
3. 多个可以同时使用，使用空格隔开
4. 在修改器或函数体内使用`return`语句，仅会跳出当前修改器或函数，`_`会继续执行。

## 二、payable 
表示函数可以接受以太币进行调用

## 三、view
一个函数不能修改状态。
被认为修改了状态的操作有：
1. 写状态变量
2. 触发事件（event）
3. 创建其他合约
4. `call`调用附加了以太币
5. 调用了任何没有被`view` 或 `pure`修饰的函数
6. 使用了低级别的调用

## 四、pure
一个函数不读取状态，也不修改状态。
1. 读状态变量
2. 访问了`.balance`属性
3. 访问了`block`、`tx`、`msg`成员（`msg.sig` 和 `msg.data`）除外
4. 调用了任何没有`pure`修饰的函数

## 五、继承
1. 继承的合约可以访问所有非 `private` 成员
2. `is`可用于继承，或者通过复制代码实现继承
可见性：`external`，`public`，`internal`，`private`
3. 构造函数：派生合约需要调用父合约的构造函数，如果有参数则需要提供参数调用父合约的构造函数。

## 六、事件监听

```solidity
//  v1.3.0
event SetSuccess(string, uint8);
emit SetSuccess(name, age);
```
对于触发的事件，可以直接通过 `Promise` 对象获取结果
```js
 const result = await yourContract.methods.yourMethod(...args).send({
      from: xxx
  })
 console.log(result.events);
```