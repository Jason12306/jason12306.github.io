# 搭建 vue3 组件库(待完善)

## 项目框架搭建

使用 `pnpm` 构建 Monorepo

1. 初始化 `pnpm init`
2. 配置工作空间，新建 `pnpm-workspace` 文件，并写入：

```yml
packages:
  - 'packages/*'
  - 'docs'
```

3. 新建文件夹 `packages`，添加项目：

## 打包构建

1. 项目根目录下新建 `internal/build` 目录
2. 使用 `pnpm` 初始化项目，项目结构如下：

### 构建说明

1. 采用 `rollup` 构建包，`gulp`管理流程
2. 构建命令 `gulp --require node_modules/@esbuild-kit/cjs-loader`，由于`gulp`不支持`ESM`，使用`@esbuild-kit/cjs-loader`将其转化为`cjs`模块

```ts
import { rollup } from 'rollup'
import path from 'path'
import { buildOutput, pkgRoot, uiRoot } from '../config'
import vue from '@vitejs/plugin-vue'
import esbuild, { minify } from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'

const bundle = await rollup({
  input: path.resolve(uiRoot, 'index.ts'),
  external: ['vue'],
  plugins: [
    alias({
      entries: {
        '@jason': pkgRoot,
      },
    }),
    vue(),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    commonjs(),
    esbuild(),
  ],
})
```

### 输出全量组件包

```ts
    // full es
    bundle.write({
      file: path.resolve(buildOutput, 'full', 'index.full.mjs'),
    }),
    bundle.write({
      plugins: [minify()],
      file: path.resolve(buildOutput, 'full', 'index.full.min.mjs'),
    }),
    // full cjs
    bundle.write({
      exports: 'named',
      format: 'cjs',
      file: path.resolve(buildOutput, 'full', 'index.full.js'),
    }),
    bundle.write({
      exports: 'named',
      plugins: [minify()],
      format: 'cjs',
      file: path.resolve(buildOutput, 'full', 'index.full.min.js'),
    }),
```

### 输出模块组件包

```ts
    // es
    bundle.write({
      dir: path.resolve(buildOutput, 'es'),
      preserveModules: true,
      sourcemap: true,
      entryFileNames: '[name].mjs',
    }),
    // lib
    bundle.write({
      format: 'cjs',
      exports: 'named',
      dir: path.resolve(buildOutput, 'lib'),
      preserveModules: true,
      sourcemap: true,
    }),
```

### 构建声明文件

使用`vue-tsc`生成声明文件，`tsc-alias`处理`tsconfig.json`中定义的`paths`路径别名

```ts
const generateTypes = async () => {
  const tsConfig = path.resolve(projRoot, 'tsconfig.type.json')
  await execa('vue-tsc', ['-p', tsConfig])
  await execa('tsc-alias', ['-p', tsConfig])

  return src(`${buildOutput}/es/**/*.d.ts`).pipe(dest(`${buildOutput}/lib`))
}
```

`tsconfig.type.json` 配置如下

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "dist/es",
    "declaration": true,
    "emitDeclarationOnly": true
  },
  "include": ["packages"],
  "exclude": ["node_modules", "packages/test", "packages/theme-chalk"]
}
```

### 构建样式文件

```ts
import path from 'path'
import { dest, src } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cssnano from 'cssnano'
import postcss from 'gulp-postcss'
import { buildOutput, pkgRoot } from '../config'

const distFolder = path.resolve(buildOutput, 'theme-chalk')
const sourceFiles = path.resolve(pkgRoot, 'theme-chalk', 'src/*.scss')

export function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base|display)/
  return src(sourceFiles)
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(postcss([cssnano]))
    .pipe(dest(distFolder))
}
```
