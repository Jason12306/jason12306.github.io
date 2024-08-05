# script 标签

## 定义

HTML `<script>` 元素用于嵌入可执行代码或数据，这通常用作嵌入或者引用 JavaScript 代码。

## 部分重要属性

### async

- 对于普通脚本，如果存在 async 属性，那么普通脚本会被并行请求，并尽快解析和执行。
- 对于模块脚本，如果存在 async 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。

### defer

这个布尔属性的设置是为了向浏览器表明，该脚本是要在文档被解析后，但在触发 DOMContentLoaded 事件之前执行的。

包含 defer 属性的脚本将阻塞 DOMContentLoaded 事件触发，直到脚本完成加载并执行。

[参考资料](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script#%E5%B1%9E%E6%80%A7)

## JavaScript 模块

### 其他模块与标准脚本的不同

- 你需要注意本地测试——如果你通过本地加载 HTML 文件（比如一个 file:// 路径的文件），你将会遇到 CORS 错误，因为 JavaScript 模块安全性需要。你需要通过一个服务器来测试。
- 另请注意，你可能会从模块内部定义的脚本部分获得与标准脚本中不同的行为。这是因为模块自动使用严格模式。
- 加载一个模块脚本时不需要使用 defer 属性模块会自动延迟加载。
- 最后一个但不是不重要，你需要明白模块功能导入到单独的脚本文件的范围——他们无法在全局获得。因此，你只能在导入这些功能的脚本文件中使用他们，你也无法通过 JavaScript console 中获取到他们，比如，在 DevTools 中你仍然能够获取到语法错误，但是你可能无法像你想的那样使用一些 debug 技术。  
  [参考资料](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules#%E5%85%B6%E4%BB%96%E6%A8%A1%E5%9D%97%E4%B8%8E%E6%A0%87%E5%87%86%E8%84%9A%E6%9C%AC%E7%9A%84%E4%B8%8D%E5%90%8C)
