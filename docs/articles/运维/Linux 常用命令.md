### mac 连接 linux 服务器：ssh root@www.xxx.com

### find /文件夹 -name 名称

### du xxx 查看文件或文件夹大小

### df -h 查看磁盘空间大小

### 查看进程号 pgrep xxx -l

### 查看进程 ps -ef | grep 进程号

### Mac 上传文件或文件夹到 Linux 上：

`scp mac-path  username@ip:linux-path`
若为文件夹则添加参数 `scp -r`
绝对路径：`scp /username/xxx username@ip:/usr/xxx/xxx/`
上传文件夹：`scp -r /username/xxx username@ip:/usr/xxx/xxx/`

### 文件夹 权限获取 chmod -R 777 ‘文件夹’

### 查看版本信息 lsb_release -a

### 查看 32/64 位 uname -a

### 查看文件夹大小`du -sh [dirname]`

### 查看端口被何应用程序占用 `lsof -i tcp:port`

### 使用**curl**发送请求

`curl -v -X POST "http://xxx.xxx.com/path`

### netstat -ntlp 查看端口使用情况

### 检测服务器端口

`curl ip:port`
`telnet ip port`
