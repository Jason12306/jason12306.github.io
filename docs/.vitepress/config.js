import { readdirSync, readFileSync, statSync } from "fs";
import { dirname, resolve } from "path";

const dirs = readdirSync(resolve(__dirname, "../articles"));

const articlesSidebar = dirs
  .filter((dirname) => !dirname.startsWith(".") && dirname !== "index.md")
  .map((dirname) => {
    const articlesPath = resolve(__dirname, `../articles/${dirname}`);
    const articles = readdirSync(articlesPath);
    const article = articles.map((art) => {
      return {
        text: art.replace(".md", ""),
        link: `/articles/${dirname}/${art}`,
      };
    });

    return {
      text: dirname,
      collapsible: true,
      items: article,
    };
  });

const isProd = process.env.NODE_ENV === "production";

export default {
  title: "凡伊",
  description: "个人网站",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  themeConfig: {
    siteTitle: "凡伊的个人网站",
    // logo: '/favicon.ico',
    nav: [
      { text: "技术文章", link: "/articles/" },
      { text: "常用代码", link: "/commonly-used-codes/" },
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
      },
    ],
    sidebar: {
      "/articles/": articlesSidebar,
      "/commonly-used-codes/": [
        {
          text: "常用代码",
          items: [
            {
              text: "CSS",
              link: `/commonly-used-codes/css`,
            },
            {
              text: "JavaScript",
              link: `/commonly-used-codes/js`,
            },
          ],
        },
      ],
    },
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
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
