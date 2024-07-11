import { readdirSync, readFileSync, lstatSync, link } from "fs";
import { resolve } from "path";

const isProd = process.env.NODE_ENV === "production";
const DS_STORE = ".DS_Store";

const docsDir = resolve(__dirname, "..");

const isDirectory = (path) => {
  const result = lstatSync(path);
  return result.isDirectory();
};

const isMD = (name) => {
  return name.endsWith(".md");
};
const isNotIndex = (name) => {
  return !name.endsWith("index.md");
};

const removeMDSuffix = (name) => {
  return name.replace(".md", "");
};

const dirs = readdirSync(docsDir)
  .filter((name) => !name.startsWith("."))
  .filter((name) => !name.includes("index.md"))
  .filter((name) => !name.includes("public"))
  .map((name) => resolve(docsDir, name));

const getdata = (path, rootPath) => {
  const results = readdirSync(path);

  const returnValues = [];
  for (const result of results) {
    const absPath = resolve(path, result);
    if (isDirectory(absPath)) {
      const o = {
        text: result,
        items: [],
      };
      o.items.push(...getdata(absPath, rootPath));
      returnValues.push(o);
    } else {
      isMD(absPath) && isNotIndex(absPath) &&
        returnValues.push({
          text: removeMDSuffix(result),
          link: removeMDSuffix(absPath.replace(rootPath, "")),
        });
    }
  }
  return returnValues;
};

const genSidebar = (arr) => {
  const result = {};
  for (const data of arr) {
    const lastWord = data.match(/[^\/]+$/)[0];
    const typeKey = `/${lastWord}/`;
    const absPath = data;
    const rootPath = absPath.replace(`/${lastWord}`, "");
    // 最后一个单词为文件夹名称
    result[typeKey] = {
      text: lastWord,
      items: getdata(absPath, rootPath),
      // items: [
      //   {
      //     text: "xxx",
      //     items: getdata(absPath, rootPath),
      //   }
      // ]
    };
  }

  return result;
};

export default {
  title: "凡伊",
  description: "个人网站",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    siteTitle: "凡伊的网站",
    logo: "/favicon.ico",
    nav: [
      { text: "技术文章", link: "/articles/CSS/CSS网格布局(Grid)" },
      { text: "部署脚本", link: "/deployment-scripts/Linux安装Nginx" },
      /*  { text: "常用代码", link: "/commonly-used-codes/" },
      {
        text: "🛠️ 小工具",
        items: [
          {
            text: "本地 http 服务",
            link: "https://github.com/Vanyi0924/local-server",
          },
          {
            text: "本地 ws 服务",
            link: "https://github.com/Vanyi0924/local-ws-server",
          },
          {
            text: "electron+vue3项目模板",
            link: "https://github.com/Vanyi0924/electron-vue3-template",
          },
        ],
      }, */
    ],
    sidebar: genSidebar(dirs),
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2018-present Vanyi Zhang",
    },
    algolia: {
      appId: "A1DKKY63GX",
      apiKey: "8eedfe85a99647ca6190cd8409cd8c09",
      indexName: isProd ? "prod_vite_blog" : "test_vite_blog",
      searchParameters: {
        // facetFilters: ["tags:cn"],
      },
    },
  },
};
