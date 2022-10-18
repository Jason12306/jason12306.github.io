> Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

语法：`var proxy = new Proxy(target, handler);`

`new Proxy()`表示生成一个`Proxy`实例，`target`参数表示所要拦截的目标对象，`handler`参数也是一个对象，用来定制拦截行为。

要使得`Proxy`起作用，必须针对`Proxy`实例进行操作，而不是针对目标对象进行操作。