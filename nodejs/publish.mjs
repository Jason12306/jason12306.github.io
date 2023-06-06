import shell from "shelljs";

const TO = "/Users/vanyi/self/Vanyi0924.github.io";
const FROM = "/Users/vanyi/self/vitepress-blog/docs/.vitepress/dist/*";

shell.cd(TO);

shell.ls().forEach((filename) => {
  shell.rm("-r", filename);
});

shell.cp("-R", FROM, ".");

const now = new Date();
const time =
  now.toLocaleDateString().replaceAll("/", "-") +
  " " +
  now.toLocaleTimeString();
shell.exec(`git pull`);
shell.exec(`git add .`);
shell.exec(`git commit -am "auto update:${time}"`);
shell.exec(`git push`);
