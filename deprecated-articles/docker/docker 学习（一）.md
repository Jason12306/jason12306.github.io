## 常用命令
1. docker pull
2. docker images
3. docker run 
4. docker ps
5. docker stop
6. docker exec
7. docker start
8. docker logs
 
### options:
  `-i,--interactive`: Keep STDIN open even if not attached 即使未连接STDIN也保持打开状态
`-t,--tty`: Allocate a pseudo-TTY 分配伪TTY
`-d, --detach`:  Run container in background and print container ID
`-e, --env list`: Set environment variables
`-p, --publish list`: Publish a container s ports to the host
`-v, --volume list`: Bind mount a volume 绑定装入卷
`-P, --publish-all`: Publish all exposed ports to random ports
                                       

### 以mysql为例
1. 运行容器：`docker run -d -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=yourpassword mysql`

2. 进入容器内部：`docker exec -it contain-id /bin/sh 修改远程权限：alter user root@% identified with mysql_native_password by yourpassword;`

3. 启动mysql并自定义配置文件

`docker run --name mysqlname -p 3306:3306 -v /home/mysql56/data:/var/lib/mysql -v /home/mysql56/conf:/etc/mysql/ -e MYSQL_ROOT_PASSWORD=password -d mysql`

说明：

`-v /home/mysql56/conf:/etc/mysql` 指定本地目录/home/mysql56/conf映射到docker镜像的/etc/mysql, 这样就可以在/home/mysql56/conf目录下建立配置文件my.cnf,并使之起作用.

`-v /home/mysql56/data:/var/lib/mysql`  把镜像数据库路径映射到本地的/home/mysql56/data

### 问题
1. docker权限管理 如何避免容器被别人误删？