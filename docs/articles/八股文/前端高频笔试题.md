# 前端高频笔试题

## 第一题：树深度优先 或 数组扁平化

```js
/** 
  输入：
  [
    ['戴尔', '苹果', '联想'],
    ['笔记本', '平板电脑', 'PC机', '上网本'],
    ['黑色', '银色', '白色'],
  ]
  输出：['戴尔-笔记本-黑色', '戴尔-笔记本-银色', '戴尔-笔记本-白色','戴尔-平板电脑-黑色', ....]
 */
// 解法一
function genProducts(pInfo) {
  const arr1 = pInfo[0];
  if (!arr1.length) {
    return;
  }

  const arr2 = pInfo[1];
  if (!arr2?.length) return arr1;

  const returnValue = [];
  for (const a1 of arr1) {
    for (const a2 of arr2) {
      returnValue.push(a1 + "-" + a2);
    }
  }

  pInfo.splice(0, 2);

  if (pInfo.length) {
    return genProducts([returnValue, ...pInfo]);
  } else {
    return returnValue;
  }
}
// 解法二

const genProducts2 = (sourceArr) => {
  if (sourceArr.length <= 1) {
    return sourceArr;
  }

  const result = sourceArr.slice(1).reduce((pre, current) => {
    const res = [];
    for (let i = 0; i < pre.length; i += 1) {
      for (let j = 0; j < current.length; j += 1) {
        res.push(`${pre[i]}-${current[j]}`);
      }
    }
    return res;
  }, sourceArr[0]);
  return result;
};
```

## 第二题：控制异步并发个数

## 第三题
/**
实现这个函数： function cacheAsyncFnWrap(fn) {} 
满足如下要求： 
1. 如果第一次调用，那就等待调用返回 
2. 如果第二次调用，那就等待第一次调用结束之后一起返回结果 
3. 如果第三次调用，已经有结果了，那么直接返回结果 
**/

第四道题考察递归：对给定的数组进行组合，产出所有可能的数字组合

第五道题：简单实现洋葱模型
第六道题：对下面的数组进行去重

```js
const data = [
  3,
  1,
  [1],
  1,
  [1],
  true,
  /123/,
  function func() {},
  true,
  {},
  "1",
  new String("a"),
  "a",
  NaN,
  undefined,
  NaN,
  undefined,
  {},
  /123/,
  null,
  null,
  function func() {},
  new String("a"),
];
```
