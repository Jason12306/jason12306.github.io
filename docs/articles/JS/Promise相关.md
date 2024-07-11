# Promise 相关

## Promise 解决了什么问题？

1. 回调地狱，第一个函数的输出往往是第二个函数的输入，通过`Promise`的链式调用可以解决；
2. 异步请求并发，使用`Promise.all`获取合并多个任务的错误处理。

## 手写简单的 Promise

```js
const PENDING = "Pending";
const FULFILLED = "Fulfilled";
const REJECTED = "Rejected";

function handlePromise(rawPromise, returnVal, resolve, reject) {
  if (rawPromise === returnVal) {
    reject(new TypeError("禁止循环引用！"));
  }

  try {
    // 若为Promise
    if (returnVal?.then) {
      returnVal.then((data) => {
        // 递归处理
        handlePromise(data, resolve);
      });
    } else {
      resolve(returnVal);
    }
  } catch (err) {
    reject(err);
  }
}

class MyPromise {
  constructor(exactor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledList = [];
    this.onRejectList = [];

    const resolve = (value) => {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledList.forEach((fn) => fn());
    };

    const reject = (reason) => {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectList.forEach((fn) => fn());
    };

    try {
      exactor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    const p2 = new MyPromise((resolve, reject) => {
      // 缺省处理为空
      if (typeof onFulfilled !== "function") {
        onFulfilled = (v) => v;
      }

      if (typeof onRejected !== "function") {
        onRejected = (err) => {
          throw err;
        };
      }

      if (this.status === PENDING) {
        this.onFulfilledList.push(() => {
          const returnVal = onFulfilled(this.value);
          handlePromise(p2, returnVal, resolve, reject);
        });

        this.onRejectList.push(() => {
          try {
            const returnVal = onRejected(this.reason);
            handlePromise(p2, returnVal, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }

      if (this.status === FULFILLED) {
        const returnVal = onFulfilled(this.value);
        handlePromise(p2, returnVal, resolve, reject);
      }

      if (this.status === REJECTED) {
        const returnVal = onRejected(this.reason);
        handlePromise(p2, returnVal, resolve, reject);
      }
    });
    return p2;
  }

  catch(reject) {
    return this.then(undefined, reject);
  }
}

const myPormise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello myPormise");
  }, 500);
});

myPormise
  .then((res) => {
    console.log("res 1", res);
    return 2;
  })
  .then()
  .catch((err) => {
    console.log("catch错误", err);
  })
  .then((res) => {
    console.log("res 2", res);
  });
```
