# Linux 安装 Nginx

```sh
#!/bin/bash
set -e
version=1.24.0
dirname=nginx-$version
file=$dirname.tar.gz

# 安装依赖
apt install gcc make libpcre3-dev zlib1g-dev openssl libssl-dev

cd /usr/local/
pwd
# 如果不存在则下载
if test -f $dirname; then
    echo "$dirname 已存在"
else
    wget https://nginx.org/download/$file
    tar zxvf $file
fi

cd $dirname

echo "当前目录: $PWD"
./configure --prefix=/usr/local/nginx --with-http_ssl_module
make
make install
/usr/local/nginx/sbin/nginx -v
ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/
echo "$dirname 安装完成"

```
