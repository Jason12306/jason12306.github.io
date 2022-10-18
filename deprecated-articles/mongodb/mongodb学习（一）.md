1. docker 安装 mongo： https://www.runoob.com/docker/docker-install-mongodb.html；
2. 创建用户并登录
```
# 创建一个名为 admin，密码为 123456 的用户。
>  db.createUser({ user:'admin',pwd:'123456',roles:[ { role:'userAdminAnyDatabase', db: 'admin'}]});
# 尝试使用上面创建的用户信息进行连接。
> db.auth('admin', '123456')
```
3. 分配权限给用户
`db.grantRolesToUser("admin",[{role:"dbOwner",db:"runoob"}]);`

MongoDB 4.0 及以上版本 
 
roles 详解如下：
数据库用户角色（Database User Roles)

read : 授权User只读数据的权限，允许用户读取指定的数据库
readWrite  授权User读/写数据的权限，允许用户读/写指定的数据库
数据库管理角色（Database Admininstration Roles)

dbAdmin：在当前的数据库中执行管理操作，如索引的创建、删除、统计、查看等
dbOwner：在当前的数据库中执行任意操作，增、删、改、查等
userAdmin ：在当前的数据库中管理User，创建、删除和管理用户。
​​​​​​​备份和还原角色（Backup and Restoration Roles)​​​​​​​

backup
restore
跨库角色（All-Database Roles)

readAnyDatabase：授权在所有的数据库上读取数据的权限，只在admin 中可用
readWriteAnyDatabase：授权在所有的数据库上读写数据的权限，只在admin 中可用
userAdminAnyDatabase：授权在所有的数据库上管理User的权限，只在admin中可用
dbAdminAnyDatabase： 授权管理所有数据库的权限，只在admin 中可用
集群管理角色（Cluster Administration Roles)

clusterAdmin：授权管理集群的最高权限，只在admin中可用
clusterManager：授权管理和监控集群的权限
clusterMonoitor：授权监控集群的权限，对监控工具具有readonly的权限
hostManager：管理server
超级角色（super master  Roles)

root ：超级账户和权限，只在admin中可用le