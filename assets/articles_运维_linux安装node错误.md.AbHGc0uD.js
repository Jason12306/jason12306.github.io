import{_ as i,c as a,o as n,a2 as l}from"./chunks/framework.mvN6NjRh.js";const c=JSON.parse('{"title":"linux 安装 node 错误","description":"","frontmatter":{},"headers":[],"relativePath":"articles/运维/linux安装node错误.md","filePath":"articles/运维/linux安装node错误.md"}'),e={name:"articles/运维/linux安装node错误.md"};function p(t,s,h,k,d,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="linux-安装-node-错误" tabindex="-1">linux 安装 node 错误 <a class="header-anchor" href="#linux-安装-node-错误" aria-label="Permalink to &quot;linux 安装 node 错误&quot;">​</a></h1><div class="language-error vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">error</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node: /lib64/libm.so.6: version \`GLIBC_2.27&#39; not found (required by node)</span></span>
<span class="line"><span>node: /lib64/libc.so.6: version \`GLIBC_2.25&#39; not found (required by node)</span></span>
<span class="line"><span>node: /lib64/libc.so.6: version \`GLIBC_2.28&#39; not found (required by node)</span></span>
<span class="line"><span>node: /lib64/libstdc++.so.6: version \`CXXABI_1.3.9&#39; not found (required by node)</span></span>
<span class="line"><span>node: /lib64/libstdc++.so.6: version \`GLIBCXX_3.4.20&#39; not found (required by node)</span></span>
<span class="line"><span>node: /lib64/libstdc++.so.6: version \`GLIBCXX_3.4.21&#39; not found (required by node)</span></span></code></pre></div><p><strong>原因：新版的 node v18 开始，都需要 GLIBC_2.27 支持</strong></p><p>查看系统中 glibc：<code>strings /lib64/libc.so.6 |grep GLIBC\\_</code></p><h2 id="解决办法-更新-glibc" tabindex="-1">解决办法，更新 glibc <a class="header-anchor" href="#解决办法-更新-glibc" aria-label="Permalink to &quot;解决办法，更新 glibc&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://ftp.gnu.org/gnu/glibc/glibc-2.28.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glibc-2.28.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glibc-2.28/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/usr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-profile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable-add-ons</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-headers=/usr/include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-binutils=/usr/bin</span></span></code></pre></div><p>可能出现的错误——最后几行，make 问题</p><h2 id="make-版本低错误-升级-make-默认为-3-升级为-4" tabindex="-1">make 版本低错误：升级 make(默认为 3 升级为 4) <a class="header-anchor" href="#make-版本低错误-升级-make-默认为-3-升级为-4" aria-label="Permalink to &quot;make 版本低错误：升级 make(默认为 3 升级为 4)&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://ftp.gnu.org/gnu/make/make-4.3.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make-4.3.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make-4.3/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/usr/local/make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> make.bak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/make/bin/make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/make</span></span></code></pre></div><h2 id="gcc-版本低错误-升级-gcc-默认为-4-升级为-8" tabindex="-1">gcc 版本低错误：升级 GCC(默认为 4 升级为 8) <a class="header-anchor" href="#gcc-版本低错误-升级-gcc-默认为-4-升级为-8" aria-label="Permalink to &quot;gcc 版本低错误：升级 GCC(默认为 4 升级为 8)&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos-release-scl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> devtoolset-8-gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\*</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 这里可能找不到包，需要手动升级 gcc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/gcc-4.8.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/rh/devtoolset-8/root/bin/gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/gcc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/g++-4.8.5</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/rh/devtoolset-8/root/bin/g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/bin/g++</span></span></code></pre></div><h2 id="手动升级-gcc" tabindex="-1">手动升级 gcc <a class="header-anchor" href="#手动升级-gcc" aria-label="Permalink to &quot;手动升级 gcc&quot;">​</a></h2><ol><li>下载</li></ol><ul><li><a href="https://ftp.gnu.org/gnu/gcc/" target="_blank" rel="noreferrer">gcc 下载地址：https://ftp.gnu.org/gnu/gcc/</a></li></ul><ol start="2"><li><p>解压 <code>tar -zxvf gcc-8.5.0.tar.gz</code></p></li><li><p>运行下载脚本</p></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-8.5.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./contrib/download_prerequisites</span></span></code></pre></div><ol start="4"><li>生成 Makefile 文件 创建 gcc-build-8.5.0 存放编译文件</li></ol><p><code>mkdir gcc-build-8.5.0</code></p><p>进入 gcc-build-8.5.0，执行 configure 脚本，生成 Makefile 文件</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc-build-8.5.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable-checking=release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable-languages=c,c++</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-multilib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/usr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-profile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable-add-ons</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-headers=/usr/include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-binutils=/usr/bin</span></span></code></pre></div><ol start="5"><li><p>执行编译 <code>make -j 2</code></p></li><li><p>执行安装 <code>make install</code></p></li><li><p>查看版本 <code>gcc -v</code></p></li></ol><h3 id="错误-在-make-编译时-出现-c-fatal-error-已杀死-signal-terminated-program-cc1plus" tabindex="-1">错误：在 make 编译时，出现 C++： fatal error:已杀死 signal terminated program cc1plus <a class="header-anchor" href="#错误-在-make-编译时-出现-c-fatal-error-已杀死-signal-terminated-program-cc1plus" aria-label="Permalink to &quot;错误：在 make 编译时，出现 C++： fatal error:已杀死 signal terminated program cc1plus&quot;">​</a></h3><p>可以考虑是虚拟机内存不足</p><ul><li>可以采用 swap 分区的方式解决</li><li><code>make</code>时降低任务数量<code>make -j2</code></li></ul><p>这时所有的问题都已经解决完毕，再重新执行上一步，更新 glibc 即可。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /root/glibc-2.28/build</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --prefix=/usr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --disable-profile</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --enable-add-ons</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-headers=/usr/include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --with-binutils=/usr/bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 需 make &amp;&amp; make install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="上述步骤完成后-执行-node-v-时还有报错" tabindex="-1">上述步骤完成后，执行 node -v 时还有报错 <a class="header-anchor" href="#上述步骤完成后-执行-node-v-时还有报错" aria-label="Permalink to &quot;上述步骤完成后，执行 node -v 时还有报错&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libstdc++.so.6:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CXXABI_1.3.9&#39; not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node: /lib64/libstdc++.so.6: version \`GLIBCXX_3.4.20&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libstdc++.so.6: version \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLIBCXX_3.4.21</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39; not found (required by node)</span></span></code></pre></div><p>通过 strings 命令查看判断是缺少 GLIBCXX_3.4.20，解决方法是升级 libstdc++</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/lib64/libstdc++.so.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GLIBCXX</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strings</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libstdc++.so.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GLIBCXX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> whatprovides</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.x86_64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这个版本的libstdc++.so.6实际上版本比较旧，并不能解决问题。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载稍微新一点的版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://www.vuln.cn/wp-content/uploads/2019/08/libstdc.so_.6.0.26.zip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc.so_.6.0.26.zip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6.0.26</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把原来的命令做备份</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6.bak</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6.0.26</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> libstdc++.so.6</span></span></code></pre></div><p>此时再次通过 strings 查看有没有 GLIBCXX_3.4.20</p><p><code>strings /usr/lib64/libstdc++.so.6 | grep GLIBCXX</code></p><p>至此 <code>node -v</code> 输出 <code>v20.17.0</code></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/even160941/p/17319119.html" target="_blank" rel="noreferrer">解决 nvm 升级 node v18.14.0 时/lib64/libm.so.6: version &#39;GLIBC_2.27&#39; not found (required by node)问题</a></li><li><a href="https://blog.csdn.net/Saladbobo/article/details/100532530" target="_blank" rel="noreferrer">gcc 手动升级</a></li></ul>`,35)]))}const g=i(e,[["render",p]]);export{c as __pageData,g as default};
