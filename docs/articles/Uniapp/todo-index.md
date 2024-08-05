# Uniapp 相关

## 一、基本语法
发起请求 `uni.request(OBJECT)` 通常封装为 `Promise`
[网络](https://uniapp.dcloud.net.cn/api/request/request.html)
新建页面  uni-app中的页面，默认保存在工程根目录下的pages目录下。每次新建页面，均需在pages.json中配置pages列表

条件编译 ifdef
[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E6%8B%A9%E6%9D%A1%E4%BB%B6%E7%BC%96%E8%AF%91%E5%A4%84%E7%90%86%E8%B7%A8%E7%AB%AF%E5%85%BC%E5%AE%B9)

在 C 语言中，通过 #ifdef、#ifndef 的方式，为 Windows、Mac 等不同 OS 编译不同的代码。

uni-app 团队参考这个思路，为 uni-app 提供了条件编译手段，在一个工程里优雅的完成了平台个性化实现。

uniapp 安装npm包

npm i -D unplugin-auto-import


拦截器 addInterceptor

`uni.addInterceptor('request', OBJECT)` ，将拦截 `uni.request()`

https://uniapp.dcloud.net.cn/api/interceptor.html#addinterceptor


api 工厂 https://www.yuque.com/apifm/nu0f75/ms21ki

pages.json -> subPackages
https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages

https://uview-plus.jiangruyi.com/components/popup.html
