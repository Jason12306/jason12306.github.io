有的服务器默认未支持 ftp 服务，21端口也默认关闭
操作流程：
1. 检查vsftpd服务状态 `systemctl status vsftpd`
2. 安装服务 `yum install -y vsftpd`
3. 启动服务 `systemctl start vsftpd`
4. 查看ip端口开放情况 `systemctl start vsftpd`
5. 若没有`21`端口则添加，其中 yourindex为要插入的索引， `iptables -I INPUT yourindex -p tcp --dport 21 -j ACCEPT`
6. 查看是否添加成功 `iptables -nL --line-numbers`
7. 加载ip_conntrack_ftp，完成ftp搭建 `modprobe ip_conntrack_ftp`
8. 添加用户 默认的 `root` 无法上传
```
usermod add newuser
usermod -G newuser ftp
```
9.  `passwd newuser` 修改新用户密码

10. 使用ftp工具测试









