# Kafka常用命令  

## 前置条件
 - 进入kafka目录
 - 按需修改配置 `e.g config/server.properties、zookeeper.properties`

## 启动内置zookeeper  
`bin/zookeeper-server-start.sh config/zookeeper.properties`  

## 启动kafka
`bin/kafka-server-start.sh config/server.properties`

## 常用命令

### 查看主题偏移量  
`bin/kafka-get-offsets.sh --bootstrap-server localhost:9092 --topic xxx --time -1`

### 查看消费组列表  
`bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --list`

### 查看消费组详情
`bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group 组名 --describe`
