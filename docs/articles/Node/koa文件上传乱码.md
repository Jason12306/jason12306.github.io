# koa 文件上传乱码

使用`@koa/multer`进行文件上传时中文乱码，转换编码如下

`Buffer.from(file.originalname, 'latin1').toString('utf8')`
