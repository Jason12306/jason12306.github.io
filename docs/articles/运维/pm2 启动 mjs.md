[github issue](https://github.com/Unitech/pm2/issues/4591)

>  I also had the same issue, the workaround I found is to use
`pm2 start node -- .`
This way pm2 starts up node which starts your app. In my case I use . (Starts the main: entry in package.json), but I'm sure you can also use `pm2 start node -- server.js` or `pm2 start npm -- start` (I haven't tried these, but I don't see why they wouldn't work).
I run a discord bot and for some reason if I add `--watch` it restarts my bot every time I do a command, this might be a side effect from using this work around. Although I can't be sure since I can't get my bot to run with `pm2 start server.js`.
I've also tried to run `pm2 start nodemon -- server.js` as a workaround to the `--watch` issue but that throws a syntax error for:
@ECHO off in the nodemon package