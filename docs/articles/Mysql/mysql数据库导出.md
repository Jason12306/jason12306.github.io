```shell
backup_dir=/home/backup/mysql

dd=`date +%Y-%m-%d-%H-%M-%S`

tool=mysqldump

username=xxx

password=xxx

database_name=xxx


#导出sql
$tool -u$username -p$password $database_name > $backup_dir/$database_name-$dd.sql

#写创建备份日志
echo "create $backup_dir/$database_name-$dd.dupm" >> $backup_dir/log.txt


```