### 一、 生成一个 SSL 证书
`openssl req -x509 -nodes -days 36500 -newkey rsa:2048 -keyout nginx.key -out nginx.crt`
字段含义

```
Country ，单位所在国家，为两位数的国家缩写，如： CN 就是中国
State/Province ，单位所在州或省
Locality ，单位所在城市 / 或县区
Organization ，此网站的单位名称;
Organization Unit，下属部门名称;也常常用于显示其他证书相关信息，如证书类型，证书产品名称或身份验证类型或验证内容等;
Common Name ，网站的域名;
Email Address ，邮箱地址
```
[freessl 申请证书](https://freessl.cn/)

### 二、 Nginx 配置
```
server{
  listen 443;
  server_name xxxx;
  ssl on;
  ssl_certificate /xxx/xxx.crt;
  ssl_certificate_key /xxx/xxx.key;
  ssl_session_timeout 5m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
  ssl_prefer_server_ciphers on;
  location / {
      proxy_pass http://127.0.0.1:8080;
  }
}
```

### 问题
`nginx:[emerg]unknown directive ssl` 错误，原因配置这个SSL证书需要引用到nginx的中SSL这模块，然而我们一开始编译的Nginx的时候并没有把SSL模块一起编译进去

解决步骤：
1. 进入 nginx 安装包解压目录 执行 `./configure --with-http_ssl_module`
2. 执行make命令重新编译，不要执行make install 会覆盖安装
3. 将新的 nginx 命令替换掉之前的 `cp objs/nginx /usr/local/nginx/sbin/nginx`
4. 检查是否安装 ssl 模块 `nginx -V`，重启












