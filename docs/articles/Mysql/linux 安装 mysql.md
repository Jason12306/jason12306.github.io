简书： https://www.jianshu.com/p/276d59cbc529  

一、mysql8.0 设置root用户允许外网连接 
`alter user 'root'@'%' identified with mysql_native_password by 'password';`

二、MySQL里host为%是什么意思
mysql的%虽然表示是任何主机，但是它只是针对于通过TCP/IP连接过来的主机。类似于mysql -h 172.16.0.3这种。
另外还有两种：

1、localhost

2、127.0.0.1
%不能替代上面两种，也就是说，你在本机用mysql -hlocalhost（等同于mysql 不指定-h)，mysql -h127.0.0.1方式连接数据库，MySQL的权限验证模块都会采用不同的方式。

