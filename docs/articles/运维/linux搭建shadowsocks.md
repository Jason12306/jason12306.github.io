# linux 搭建 shadowsocks

## 安装

`pip3 install shadowsocks`

## 配置

```json
{
  "server": "0.0.0.0",
  "local_address": "127.0.0.1",
  "local_port": 1080,
  "port_password": {
    "9527": "xxxxx"
  },
  "method": "aes-256-cfb",
  "timeout": 300,
  "fast_open": false
}
```

## 进程管理

- 启动进程
  `ssserver -c /etc/shadowsocks.json -d start`

- 关闭进程
  `ssserver -c /etc/shadowsocks.json -d stop`

- 重启进程
  `ssserver -c /etc/shadowsocks.json -d restart`

## 错误

E: "AttributeError: /lib64/libcrypto.so.1.1: undefined symbol: EVP_CIPHER_CTX_cleanup"
A: 找到报错的文件 `/xxx/pythonX/dist-packages/shadowsocks/crypto/openssl.py`, 将所有`EVP_CIPHER_CTX_cleanup`替换成为`EVP_CIPHER_CTX_reset`
