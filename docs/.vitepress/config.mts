import { readdirSync, readFileSync, lstatSync, link } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vitepress'

export const appId = 'PBT7FOA8CB'
export const apiKey = '9864ce31d8bc76699e7a9ded76e13ed8'
export const indexName = 'vanyi0924io'

const DS_STORE = '.DS_Store'

const docsDir = resolve(__dirname, '..')

const isDirectory = (path) => {
  const result = lstatSync(path)
  return result.isDirectory()
}

const isMD = (name) => {
  return name.endsWith('.md')
}
const isNotIndex = (name) => {
  return !name.endsWith('index.md')
}

const isTodo = (name: string) => {
  const nameArray = name.split('/')
  const filename = nameArray[nameArray.length - 1]
  return filename.toLowerCase().startsWith('todo')
}

const removeMDSuffix = (name) => {
  return name.replace('.md', '')
}

const dirs = readdirSync(docsDir)
  .filter((name) => !name.startsWith('.'))
  .filter((name) => !name.includes('index.md'))
  .filter((name) => !name.includes('public'))
  .map((name) => resolve(docsDir, name))

const getdata = (path, rootPath) => {
  const results = readdirSync(path)

  const returnValues: any[] = []
  for (const result of results) {
    const absPath = resolve(path, result)
    if (isDirectory(absPath)) {
      const o: { text: string; items: any[]; collapsed: boolean } = {
        text: result,
        items: [],
        collapsed: true,
      }
      o.items.push(...getdata(absPath, rootPath))
      returnValues.push(o)
    } else {
      isMD(absPath) &&
        !isTodo(absPath) &&
        isNotIndex(absPath) &&
        returnValues.push({
          text: removeMDSuffix(result),
          link: removeMDSuffix(absPath.replace(rootPath, '')),
        })
    }
  }
  return returnValues
}

const genSidebar = (arr) => {
  const result = {}
  for (const data of arr) {
    const lastWord = data.match(/[^\/]+$/)[0]
    const typeKey = `/${lastWord}/`
    const absPath = data
    const rootPath = absPath.replace(`/${lastWord}`, '')
    // 最后一个单词为文件夹名称
    result[typeKey] = {
      text: lastWord,
      items: getdata(absPath, rootPath),
    }
  }

  return result
}

const sidebar = genSidebar(dirs)

// 将一下文章分类放到头部
const toHeadArticles: string[] = [
  'CSS',
  'HTML',
  'JavaScript',
  'Node',
  'Vue',
  'React',
  'Express',
  '设计模式',
  '前端',
]
// 将一下文章分类放到尾部
const toEndArticles: string[] = ['运维', '区块链', 'Kafka', '资源']

const customSortArticle = (sidebar) => {
  for (const text of toHeadArticles.sort(() => -1)) {
    const items = sidebar['/articles/'].items
    const index = items.findIndex((item) => item.text === text)

    if (index !== -1) {
      const r = items.splice(index, 1)
      items.unshift(...r)
    }
  }

  for (const text of toEndArticles) {
    const items = sidebar['/articles/'].items
    const index = items.findIndex((item) => item.text === text)

    if (index !== -1) {
      const r = items.splice(index, 1)
      items.push(...r)
    }
  }

  return sidebar
}

customSortArticle(sidebar)

export default defineConfig({
  lang: 'zh-Hans',
  title: '前端小栈',
  description: '个人网站',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: false,
  themeConfig: {
    siteTitle: '前端小栈',
    logo: '/favicon.ico',
    nav: [
      { text: '📝 技术文章', link: '/articles/CSS/CSS网格布局(Grid)' },
      { text: '🤖 部署脚本', link: '/deployment-scripts/Linux安装Nginx' },
      { text: '💪 解决方案', link: '/solutions/前端首屏加载优化' },
      {
        text: '🛠️ 在线工具',
        link: '/online-tools/在线工具/css-clip-path 裁剪路径在线生成',
      },
      { text: '🧠 思维导图', link: '/mindmap/', target: '_blank' },
    ],
    sidebar,
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Jason Zhang',
    },
    search: {
      provider: 'algolia',
      options: {
        appId,
        apiKey,
        indexName,
        // searchParameters: {
        //   facetFilters: ["lang:zh-Hans"],
        // },
      },
    },
  },
})
