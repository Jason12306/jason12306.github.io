# 一、mapping（映射）
只能作为状态变量，不能在函数体内部使用。
https://github.com/ethereum/dapp-bin

# 二、Struct （结构体）
不能将自己作为类型之一，但是可以放在 `mapping` 中，如果结构体重，存在`mapping`需要跳过。

# 三、类型转换
隐式转换
显式转换
`delete`重置变量

# 四、日期时间
`now` 当前时间戳
`using DateTime for uint`
https://github.com/pipermerriam/ethereum-datetime

# 五、错误异常
1. `assert`
用于检查溢出错误
用于检查不应该发生的异常情况
用于检查合约状态改变后，合约的状态
尽量少用`assert`
通常用于函数中间或结尾

2. `require`
用于检查用户输入；
用于检查合约调用后返回值；
用于检查状态
用于函数开头

3. `revert`
终止执行并还原改变的状态，revert(string reasion)，提供错误信息。

# 六、销毁合约
`selfdestruct(owner)` 合约创建者才能销毁合约，需要小心使用，避免被主调合约调用。









