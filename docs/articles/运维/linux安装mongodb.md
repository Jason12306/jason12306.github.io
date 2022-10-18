## 下载安装
curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-rhel62-4.0.18.tgz    # 下载
tar -zxvf mongodb-linux-x86_64-rhel62-4.0.18.tgz                                   # 解压

mv  mongodb-linux-x86_64-rhel62-4.0.18 /usr/local/mongodb                         # 将解压包拷贝到指定目录

## 添加path路径
export PATH=[mongodb-install-directory]/bin:$PATH
[mongodb-install-directory] 为 MongoDB 的安装路径 /usr/local/mongodb 

## 创建数据库目录
MongoDB的数据存储在data目录的db目录下，但是这个目录在安装过程不会自动创建，所以你需要手动创建data目录，并在data目录中创建db目录。
注意：/data/db 是 MongoDB 默认的启动的数据库路径(--dbpath)。
`mkdir -p /data/db`

## 命令行中运行 MongoDB 服务
命令行中执行mongo安装目录中的bin目录执行mongod命令来启动mongdb服务。  
`./mongod`
`./mongod --dbpath=/data/db  --logpath=/data/logs`

## 后台启动mongo服务（常驻 --fork）
`./mongod --dbpath=/data/db  --fork --logpath=/data/logs`

> 后台启动成功除非手动关掉mongo服务或者关机等意外，否则mongo服务一直是开启状态

## 使用nginx代理
mongodb接口走的是tcp，不是http
```
stream {
    server {
        listen      92;
        proxy_pass mongo;
        proxy_connect_timeout 1s;
        proxy_timeout 3s;
    }
    upstream mongo{
        server 127.0.0.1:27017;
    }
}

```



