## 生成CA证书
1. 创建自签证书私钥 `openssl genrsa -out ca.key 1024`

2. 创建证书请求文件 `openssl req -new -out ca.csr -key ca.key`
注：如需要用此证书签发证书，请记住填写的信息
```
Country Name (2 letter code) []:xx
State or Province Name (full name) []:xx
Locality Name (eg, city) [Default City]:xxx
Organization Name (eg, company) [Default Company Ltd]:xxxx
Organizational Unit Name (eg, section) []:xxx
Common Name (eg, your name or your servers hostname) []:xxx
Email Address []:xxx
A challenge password []:xxx
An optional company name []:xxx
```
3. 通过`key`与`csr`文件生成ca证书
`openssl x509 -req -in ca.csr -out ca.crt -signkey ca.key -CAcreateserial -days 365`

## CA证书签发客户端或服务端证书
注：以签发客户端（除去步骤4，其他服务端相同）证书为例：
1. 生成私钥：`openssl genrsa -out client.key 1024`
2. 生成请求文件，信息与CA证书保持一致，`Common Name`填写要使用域名： `openssl req -new -out client.csr -key client.key`
3. 生成经过`CA`证书签名的客户端证书： `openssl x509 -req -in client.csr -out client.crt -signkey client.key -CA ca.crt -CAkey ca.key -CAcreateserial -days 365`
4. 生成适用于浏览器包含公私钥的证书 ：`openssl pkcs12 -export -clcerts -in client.crt -inkey client.key -out client.p12`