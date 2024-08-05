import shell from 'shelljs'
import { consola } from 'consola'
import { rmSync } from 'fs'
import fg from 'fast-glob'

const { exec, cp, cd } = shell

const des = '/Users/vanyi/project/vanyi-blog/jason12306.github.io'
const source =
  '/Users/vanyi/project/vanyi-blog/vitepress-blog/docs/.vitepress/dist/*'

async function run() {
  consola.start('开始更新...')

  exec(
    `export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;`
  )
  consola.info('设置终端代理')

  cd(des)
  const entries = await fg(['*'], { onlyFiles: false, dot: false })

  for (const e of entries) {
    rmSync(e, { force: true, recursive: true })
  }

  cp('-R', source, '.')

  const now = new Date()
  const time =
    now.toLocaleDateString().replaceAll('/', '-') +
    ' ' +
    now.toLocaleTimeString()
  exec(`git pull`)
  exec(`git add .`)
  exec(`git commit -am "auto update:${time}"`)
  exec(`git push`)

  consola.success('更新成功...')
}

run()
