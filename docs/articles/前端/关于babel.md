# 关于 babel

Babel 是一个 JavaScript 编译器。Babel 是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

Babel 转换 JS 代码可以分成以下三个大步骤：

- Parser（解析）：此过程接受转换之前的源码，输出 AST（抽象语法树）。在 Babel 中负责此过程的包为 babel/parser；

- Transform（转换）：此过程接受 Parser 输出的 AST（抽象语法树），输出转换后的 AST（抽象语法树）。在 Babel 中负责此过程的包为 @babel/traverse；

- Generator（生成）：此过程接受 Transform 输出的新 AST，输出转换后的源码。在 Babel 中负责此过程的包为 @babel/generator。

[官网](https://babeljs.io/)  
[中文官网](https://www.babeljs.cn/)  
