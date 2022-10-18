Error: `npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules`

解决：`sudo chown -R $USER /usr/local/lib/node_modules` 授权即可