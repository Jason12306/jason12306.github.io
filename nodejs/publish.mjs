import shell from "shelljs";

shell.cd("/Users/vanyi/project/vanyi-blog/Vanyi0924.github.io");

shell.ls().forEach((filename) => {
  shell.rm("-r", filename);
})


shell.cp(
  "-R",
  "/Users/vanyi/project/vanyi-blog/vitepress-blog/docs/.vitepress/dist/*",
  "."
);

const now = new Date()
const time = now.toLocaleDateString().replaceAll("/", "-") + " " + now.toLocaleTimeString()
shell.exec(`git pull`)
shell.exec(`git add .`)
shell.exec(`git commit -am "auto update:${time}"`)
shell.exec(`git push`)
