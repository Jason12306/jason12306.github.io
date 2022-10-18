###  mac 连接linux 服务器：ssh root@www.xxx.com


### find /文件夹 -name 名称

### du xxx 查看文件或文件夹大小

### df -h 查看磁盘空间大小

### 查看进程号 pgrep xxx -l

### 查看进程 ps -ef | grep 进程号

### Mac上传文件或文件夹到Linux上：
`scp mac-path  username@ip:linux-path`
若为文件夹则添加参数  `scp -r`
绝对路径：`scp /username/xxx username@ip:/usr/xxx/xxx/`
上传文件夹：`scp -r /username/xxx username@ip:/usr/xxx/xxx/`

### 文件夹 权限获取 chmod -R 777 ‘文件夹’

### 查看版本信息 lsb_release -a

### 查看32/64位 uname -a

###  查看文件夹大小`du -sh [dirname]`

### 查看端口被何应用程序占用 `lsof -i tcp:port`

### 使用**curl**发送请求
`curl -v -X POST "http://xxx.xxx.com/path`

### netstat -ntlp 查看端口使用情况

### 开启gzip压缩
```
#开启和关闭gzip模式
gzip on;
#gizp压缩起点，文件大于1k才进行压缩
gzip_min_length 1k;

# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间
gzip_comp_level 6;

# 进行压缩的文件类型。
gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json image/png image/gif image/jpeg;

#nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩
# gzip_static on|off

# 是否在http header中添加Vary: Accept-Encoding，建议开启
gzip_vary on;

# 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区 
gzip_buffers 4 16k;

# 设置gzip压缩针对的HTTP协议版本
# gzip_http_version 1.1;
```






