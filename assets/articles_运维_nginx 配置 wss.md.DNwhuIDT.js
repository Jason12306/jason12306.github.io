import{_ as n,c as a,o as p,a2 as e}from"./chunks/framework.CnKoBJ9A.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/nginx 配置 wss.md","filePath":"articles/运维/nginx 配置 wss.md"}'),l={name:"articles/运维/nginx 配置 wss.md"};function t(i,s,c,r,o,_){return p(),a("div",null,s[0]||(s[0]=[e(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server{</span></span>
<span class="line"><span>  listen 443;</span></span>
<span class="line"><span>  server_name 域名;</span></span>
<span class="line"><span>  ssl on;</span></span>
<span class="line"><span>  ssl_certificate 证书公钥;</span></span>
<span class="line"><span>  ssl_certificate_key 证书私钥;</span></span>
<span class="line"><span>  ssl_session_timeout 5m;</span></span>
<span class="line"><span>  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span>  ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>      # 启用支持websocket连接</span></span>
<span class="line"><span>      proxy_set_header Upgrade $http_upgrade;</span></span>
<span class="line"><span>      proxy_set_header Connection &quot;upgrade&quot;;</span></span>
<span class="line"><span>      proxy_pass http://127.0.0.1:xxxx;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)]))}const u=n(l,[["render",t]]);export{h as __pageData,u as default};
