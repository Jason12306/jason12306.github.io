# pnpm 管理器导致 electron-builder 打包依赖缺失
  
>  set `node-linker=hoisted` in `.npmrc`  
>  set `public-hoist-pattern = *` or `hamefully-hoist = true` in `.npmrc` 

选择以上其中任何一个，问题将被解决。  

[参考资料](https://github.com/electron-userland/electron-builder/issues/6289)
