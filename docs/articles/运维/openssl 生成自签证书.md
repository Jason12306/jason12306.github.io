## 准备工作
```
#创建index.txt （database index file）
touch /etc/pki/CA/index.txt
#创建新证书编号为01，往下依次类推，为十六进制 （The current serial number）
touch /etc/pki/CA/serial 
#用于吊销证书
touch /etc/pki/CA/crlnumber 
```
## 创建CA自签证书

1. 生成私钥
`openssl genrsa -out /etc/pki/CA/private/cakey.pem`

2. 生成自签文件10年
`openssl req -new -x509 -key /etc/pki/CA/private/cakey.pem -out /etc/pki/CA/cacert.pem -days 3650 `

3. 查看生成的自签证书
`openssl x509 -in /etc/pki/CA/cacert.pem -noout -text`

## 生成客户端证书
1. 生成私钥
`openssl genrsa -out client.key`

2. 生成请求文件
`openssl req -new -key client.key -out client.csr -days 365`

3. 使用CA签发客户端证书(会使用默认配置)
`openssl ca -in client.csr -out client.crt -days 365`

4. 生成浏览器证书
`openssl pkcs12 -export -clcerts -in client.crt -inkey client.key -out client.p12`

## 吊销证书
```
# 吊销证书序列号
echo 01 >/etc/pki/CA/crlnumber

# 吊销
openssl ca -revoke 证书名
# or
openssl ca -revoke /etc/pki/CA/newcerts/对应证书序列号.pem

# 重新写入吊销列表文件
openssl ca -gencrl -out /etc/pki/CA/crl/crl.pem

# 查看吊销证书情况
openssl crl -in /etc/pki/CA/crl/crl.pem -noout -text
# or
cat /etc/pki/CA/index.txt
```

## 术语
- RSA私钥能解密用证书公钥加密后的信息。通常以.key为后缀，表示私钥也称作密钥。是需要管理员小心保管，不能泄露的。

- CSR(Certificate Signing Request)包含了公钥和名字信息。通常以.csr为后缀，是网站向CA发起认证请求的文件，是中间文件。

- 证书通常以.crt为后缀，表示证书文件。

- CA(Certifying Authority)表示证书权威机构，它的职责是证明公钥属于个人、公司或其他的组织。

### [OpenSSL命令详解](https://juejin.cn/post/6844903989469773832)

备忘：
- `nginx`需要配置 `ssl_crl /etc/pki/CA/crl/crl.pem;` 吊销证书列表文件，更新后重启`nginx`
- 存储目录 `/etc/pki/CA/` 可在配置文件里设置
- 默认配置文件 `/etc/pki/CA/openssl.cnf`
- openssl 升级新版本 https://blog.51cto.com/net881004/2116848








