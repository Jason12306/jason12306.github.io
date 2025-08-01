import{_ as s,c as a,o as p,a2 as i}from"./chunks/framework.CnKoBJ9A.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/nginx 开启 gzip 资源压缩.md","filePath":"articles/运维/nginx 开启 gzip 资源压缩.md"}'),t={name:"articles/运维/nginx 开启 gzip 资源压缩.md"};function e(l,n,c,_,o,g){return p(),a("div",null,n[0]||(n[0]=[i(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    # ...</span></span>
<span class="line"><span>    gzip  on;</span></span>
<span class="line"><span>	#gizp压缩起点，文件大于1k才进行压缩</span></span>
<span class="line"><span>	gzip_min_length 1k;</span></span>
<span class="line"><span>	## gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间</span></span>
<span class="line"><span>	gzip_comp_level 6;</span></span>
<span class="line"><span>	#</span></span>
<span class="line"><span>	## 进行压缩的文件类型。</span></span>
<span class="line"><span>	gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/xml text/javascript application/json image/png image/gif image/jpeg;</span></span>
<span class="line"><span>	#</span></span>
<span class="line"><span>	##nginx对于静态文件的处理模块，开启后会寻找以.gz结尾的文件，直接返回，不会占用cpu进行压缩，如果找不到则不进行压缩</span></span>
<span class="line"><span>	## gzip_static on|off</span></span>
<span class="line"><span>	#</span></span>
<span class="line"><span>	## 是否在http header中添加Vary: Accept-Encoding，建议开启</span></span>
<span class="line"><span>	gzip_vary on;</span></span>
<span class="line"><span>	#</span></span>
<span class="line"><span>	## 设置压缩所需要的缓冲区大小，以4k为单位，如果文件为7k则申请2*4k的缓冲区 </span></span>
<span class="line"><span>	gzip_buffers 4 16k;</span></span>
<span class="line"><span>    # ... </span></span>
<span class="line"><span>}</span></span></code></pre></div>`,1)]))}const m=s(t,[["render",e]]);export{d as __pageData,m as default};
