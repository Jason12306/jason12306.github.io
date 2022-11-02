# MacOS——electron-builder 签名与公证

`notary[ˈnōdərē] 公证人`

## 一、前置条件

1. 拥有苹果开发者账号
2. 权限为账户持有人，非子账户

## 二、生成签名证书并安装

1. 创建证书
2. `Choose File` 选择 `钥匙串访问 -> 证书助理 -> 从证书颁发机构请求证书`
3. 填写相关信息并储存到磁盘
4. 双击证书安装并始终信任

## 三、导出 `.p12` 格式证书

1. 打开 『钥匙串访问』
2. 点击左侧『登录』项，右侧选择『我的证书』
3. 找到对应证书，右键 -> 导出证书，输入密码

## 四、签名
### 方式一
1. 暴露环境变量，在当前命令行执行

```shell
export CSC_LINK=path/to/xxx.p12
export CSC_KEY_PASSWORD=xxx
# 查看环境变量
# echo $CSC_LINK
```

2. 使用 electron-builder 打包

### 方式二
双击 `xxx.p12` 安装证书，再使用 electron-builder 打包
> On a macOS development machine, a valid and appropriate identity from your keychain will be automatically used.

[参考 electron-build 文档](https://www.electron.build/code-signing)

## 五、公证

```shell
xcrun notarytool submit 你的app --apple-id xxx --team-id xxx --password xxx --verbose --output-format json

# 选项
# --apple-id Developer Apple ID.
# --team-id Developer Team ID.
# --password App-specific password for your Apple ID. You will be given a secure prompt on the command line if Apple ID and Team ID are provided and '--password' option is not specified.
# --wait/--no-wait Wait until processing is complete. Optionally set a '--timeout' if waiting. (default: false)
```

上传文件成功返回结果

```json
{ "path": "xxxx", "message": "Successfully uploaded file", "id": "xxxx" }
```

查看公证状态日志

```shell
xcrun notarytool log 上面返回的id notary_log.json --apple-id xxx --team-id xxx --password xxx
```

## 六、补充

### 使用 store-credentials 命令避免明文

1. 命令

```shell
xcrun notarytool store-credentials 存储名称 --apple-id xxx --team-id xxx --password xxx
```

2. 使用
   `xcrun notarytool submit 你的文件 --keychain-profile 存储名称 --wait`

在钥匙串中可以查看储存的信息

## 七、系统策略控制

命令：spctl  
全称： system policy control 系统策略控制   
说明：当系统需要安装非信任第三方的软件时，需要用这个命令把管控解除，安装后再回复系统管控  

```shell
spctl --assess [--type type] [-v] path ... # assessment
       spctl --add [--type type] [--path|--requirement|--anchor|--hash] spec ... # add rule(s)
       spctl [--enable|--disable|--remove] [--type type] [--path|--requirement|--anchor|--hash|--rule] spec # change rule(s)
       spctl --status | --global-enable | --global-disable # system global switch

Developer Mode Usage:
    spctl developer-mode <action>
        enable-terminal
            Add Terminal as a developer tool.
Kernel Extension User Consent Usage:
    spctl kext-consent <action>         ** Modifications only available in Recovery OS **
        status
            Print whether kernel extension user consent is enabled or disabled.
        enable
            Enable requiring user consent for kernel extensions.
        disable
            Disable requiring user consent for kernel extensions.
        add <team-id>
            Insert a new Team Identifier into the list allowed to load kernel extensions without user consent.
        list
            Print the list of Team Identifiers allowed to load without user consent.
        remove <team-id>
            Remove a Team Identifier from the list allowed to load kernel extensions without user consent.
```

## 八、错误

- `Error: codesign The timestamp service is not available`   
解决办法：需要连接到苹果的服务器获取时间，科学上网。  


