import{_ as n,c as a,o as e,a2 as p}from"./chunks/framework.CnKoBJ9A.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/nginx 配置 ssl证书.md","filePath":"articles/运维/nginx 配置 ssl证书.md"}'),l={name:"articles/运维/nginx 配置 ssl证书.md"};function i(t,s,c,o,r,d){return e(),a("div",null,s[0]||(s[0]=[p(`<h3 id="一、-生成一个-ssl-证书" tabindex="-1">一、 生成一个 SSL 证书 <a class="header-anchor" href="#一、-生成一个-ssl-证书" aria-label="Permalink to &quot;一、 生成一个 SSL 证书&quot;">​</a></h3><p><code>openssl req -x509 -nodes -days 36500 -newkey rsa:2048 -keyout nginx.key -out nginx.crt</code> 字段含义</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Country ，单位所在国家，为两位数的国家缩写，如： CN 就是中国</span></span>
<span class="line"><span>State/Province ，单位所在州或省</span></span>
<span class="line"><span>Locality ，单位所在城市 / 或县区</span></span>
<span class="line"><span>Organization ，此网站的单位名称;</span></span>
<span class="line"><span>Organization Unit，下属部门名称;也常常用于显示其他证书相关信息，如证书类型，证书产品名称或身份验证类型或验证内容等;</span></span>
<span class="line"><span>Common Name ，网站的域名;</span></span>
<span class="line"><span>Email Address ，邮箱地址</span></span></code></pre></div><p><a href="https://freessl.cn/" target="_blank" rel="noreferrer">freessl 申请证书</a></p><h3 id="二、-nginx-配置" tabindex="-1">二、 Nginx 配置 <a class="header-anchor" href="#二、-nginx-配置" aria-label="Permalink to &quot;二、 Nginx 配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>server{</span></span>
<span class="line"><span>  listen 443;</span></span>
<span class="line"><span>  server_name xxxx;</span></span>
<span class="line"><span>  ssl on;</span></span>
<span class="line"><span>  ssl_certificate /xxx/xxx.crt;</span></span>
<span class="line"><span>  ssl_certificate_key /xxx/xxx.key;</span></span>
<span class="line"><span>  ssl_session_timeout 5m;</span></span>
<span class="line"><span>  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;</span></span>
<span class="line"><span>  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;</span></span>
<span class="line"><span>  ssl_prefer_server_ciphers on;</span></span>
<span class="line"><span>  location / {</span></span>
<span class="line"><span>      proxy_pass http://127.0.0.1:8080;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h3><p><code>nginx:[emerg]unknown directive ssl</code> 错误，原因配置这个SSL证书需要引用到nginx的中SSL这模块，然而我们一开始编译的Nginx的时候并没有把SSL模块一起编译进去</p><p>解决步骤：</p><ol><li>进入 nginx 安装包解压目录 执行 <code>./configure --with-http_ssl_module</code></li><li>执行make命令重新编译，不要执行make install 会覆盖安装</li><li>将新的 nginx 命令替换掉之前的 <code>cp objs/nginx /usr/local/nginx/sbin/nginx</code></li><li>检查是否安装 ssl 模块 <code>nginx -V</code>，重启</li></ol>`,10)]))}const h=n(l,[["render",i]]);export{_ as __pageData,h as default};
