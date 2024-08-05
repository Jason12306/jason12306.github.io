import { readdirSync, readFileSync } from "fs";
import algoliasearch from "algoliasearch";

import {
  appId,
  indexNameDev,
  indexNameProd,
} from "./config.mjs";

const isProd = process.env.NODE_ENV === "production";

/**
 * @description 数据结构
 */
const genData = () => {
  return {
    url: "",
    content: null,
    type: "lvl2", // 固定
    hierarchy: {
      lvl0: "技术文章", // 文章
      lvl1: null, // 分类
      lvl2: null, // 标题
      lvl3: null,
      lvl4: null,
      lvl5: null,
      lvl6: null,
    },
    objectID: "",
  };
};

const url = isProd
  ? "https://vanyi0924.github.io/articles"
  : "http://localhost:5173/articles";
/**
 * @description 读取文件
 */
const readLocalDirData = (dir = ".") => {
  const dirs = readdirSync(dir).filter((dir) => !dir.includes("."));
  return dirs.map((perDir) => {
    const fliesName = readdirSync(dir + "/" + perDir); // arr
    return {
      type: perDir,
      names: fliesName,
    };
  });
};

/**
 * @description 生成文件 写入数据
 */
async function genArticlesData(data) {
  /* 
    [
      {
        type: ,
        names: []
      }
    ]
  */
  const results = [];
  data.forEach((art) => {
    art.names.forEach((artItem) => {
      const data = genData();
      const title = artItem.replace("/", "-").replace(".md", "");
      data.url = `${url}/${art.type}/${title}.html`;
      data.hierarchy.lvl1 = art.type;
      data.hierarchy.lvl2 = title;
      data.objectID = data.url;
      results.push(data);
    });
  });
  return results;
  // writeFileSync(`_temp/${filename}`, JSON.stringify(results, null, 4));
}

/**
 * @description 提交数据到远程
 */
async function syncDataToAlgolia() {
  console.log("上传中");
  const client = algoliasearch(
    appId,
    readFileSync("deploy/keys").toString().split("\n")[0]
  );
  const index = client.initIndex(isProd ?  indexNameProd : indexNameDev);
  const objects = await genArticlesData(readLocalDirData("docs/articles"));
  try {
    await index.clearObjects();
    await index.saveObjects(objects);
    console.log("上传完成");
  } catch (err) {
    console.log(err);
    console.error("上传失败");
  }
}

syncDataToAlgolia();
