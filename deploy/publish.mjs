import shell from "shelljs";
const des = "/Users/vanyi/project/vanyi-blog/Vanyi0924.github.io";
const source =
  "/Users/vanyi/project/vanyi-blog/vitepress-blog/docs/.vitepress/dist/*";

shell.cd(des);

shell.ls().forEach((filename) => {
  shell.rm("-r", filename);
});

shell.cp("-R", source, ".");

const now = new Date();
const time =
  now.toLocaleDateString().replaceAll("/", "-") +
  " " +
  now.toLocaleTimeString();
shell.exec(`git pull`);
shell.exec(`git add .`);
shell.exec(`git commit -am "auto update:${time}"`);
shell.exec(`git push`);
