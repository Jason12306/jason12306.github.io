# Git 常用操作

克隆仓库：git clone https://github.com/xxx.git  
创建分支：git branch [name]  
切换分支: git checkout [name]  
检出分支: git checkout -b [name]  
新增远程分支：git push --set-upstream origin xxx  
抓取远程分支：git fetch origin [name]  
同步远程分支：git pull origin [name]  
删除本地分支：git branch -d [name]  
删除远程分支：git push origin --delete [name]  
查看远程仓库地址：git remote -v  
添加远程仓库：git remote add origin https://github.com/xxx/xxx.git  
抓取远程仓库：git fetch [remote-name]  
同步远程仓库：git pull [remote-name]  
查看标签：git tag  
添加用户：git config --global user.name  
注销用户：git config --global --unset user.name  
初始化本地库：git init  
发布新建的本地分支到远程分支： git push -u origin xxx  
更新远程分支列表：git remote update origin --prune  
放弃已追踪的某个文件：git update-index --assume-unchanged filename  
撤销放弃已追踪的某个文件：git update-index --no-assume-unchanged filename  
关闭大小写不敏感：git config core.ignorecase false

[Git 官方文档](https://git-scm.com/book/zh/v2)  
[工作流钩子](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)  
[husky](https://typicode.github.io/husky/)
