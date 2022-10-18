# express 配置跨域（koa同理）

```js{5-8}
const app = express();

app.all("*", function (req, res, next) {
  // 获取请求ip
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") { //处理 options 请求
    res.send(200);
  } else {
    next();
  }
});
```