# linux(cenos) 安装 mysql

## 一、下载
`wget https://cdn.mysql.com/archives/mysql-5.7/mysql-server_5.7.42-1ubuntu18.04_amd64.deb-bundle.tar`
注：也可本地下载再上传

## 二、解压、移动、重命名
`tar -xvf mysql-5.7.44-linux-glibc2.12-x86_64.tar.gz`  
`mv mysql-5.7.44-linux-glibc2.12-x86_64 /usr/local/`  
`mv mysql-5.7.44-linux-glibc2.12-x86_64/ mysql-5.7.44`  
`ln -s mysql-5.7.44-linux-glibc2.12-x86_64/  mysql-5.7.44`（软链接[可选]）  

## 三、创建用户组、用户，数据目录赋予mysql用户权限
`groupadd mysql` 
`useradd -r -g mysql mysql` 
`mkdir -p /usr/local/data/mysql` 
`chown mysql:mysql -R /usr/local/data/mysql` 

## 四、配置参数
创建 /etc/my.cnf
```conf
[mysqld]
nd-address=0.0.0.0
port=3306
user=mysql
basedir=/usr/local/mysql-5.7.44
datadir=/usr/local/data/mysql
socket=/usr/local/tmp/mysql.sock
log-error=/usr/local/data/mysql/mysql.err
pid-file=/usr/local/data/mysql/mysql.pid
#character config
character_set_server=utf8mb4
symbolic-links=0
```

## 五、初始化
`/usr/local/mysql-5.7.44/bin/mysqld --defaults-file=/etc/my.cnf --basedir=/usr/local/mysql-5.7.44/ --datadir=/usr/local/data/mysql/ --user=mysql --initialize`

## 六、启动mysql
<!-- TODO -->
## 参考资料

[5 分钟搞定 Linux 安装 Mysql5.7](https://blog.51cto.com/u_16130732/6354410)  
[Linux 安装 mysql5.7.44 --（傻瓜版 3 分钟搞定）](https://cloud.tencent.com/developer/article/1451186)
