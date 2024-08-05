# web 安全

## XSS 跨站脚本攻击

简单理解：攻击者脚本嵌入被攻击网站，获取用户 cookie 等隐私信息。  
解决方案：

1. 服务器对输入脚本进行过滤或转码
2. 充分利用 [CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)
3. 使用 HttpOnly 属性

## CSRF 跨站请求伪造

简单理解：已登录用户访问攻击者网站，攻击网站向被攻击网站发起恶意请求（利用浏览器会自动携带 cookie）。  
解决方案：

1. 充分利用好 Cookie 的 SameSite 属性
2. 验证请求的来源站点（Referer、Origin）
3. CSRF Token
