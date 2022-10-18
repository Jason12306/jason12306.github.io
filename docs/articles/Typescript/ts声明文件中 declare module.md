

`declare module` 如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 `declare module` 扩展原有模块：
```js
// types/moment-plugin/index.d.ts

import * as moment from 'moment';

declare module 'moment' {
    export function foo(): moment.CalendarKey;
}
```

`declare module` 也可用于在一个文件中一次性声明多个模块的类型
```js
// types/foo-bar.d.ts

declare module 'foo' {
    export interface Foo {
        foo: string;
    }
}

declare module 'bar' {
    export function bar(): string;
}
```

```js
// src/index.ts

import { Foo } from 'foo';
import * as bar from 'bar';

let f: Foo;
bar.bar();
```

[参考资料](https://ts.xcatliu.com/basics/declaration-files.html#declare-module)