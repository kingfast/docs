# SSR订阅macOs使用教程

一字不漏的看完下面文字，按教程操作

#### 0.首先打开下面网址订购一个套餐

https://kingfast.cc/buy

如果上面的网址打不开看下面的教程：

https://shimo.im/docs/gcrf4W32B44qRegj/ 



#### 1.先设置下电脑权限，不然安装可能不成功

> 打开「终端」。

![](/img/mac1.png)

> 在终端的窗口中输入如下指令，并按下回车键。

```
sudo spctl --master-disable
```

> 由于申请了 sudo 权限，需要输入你当前电脑的`开机密码`，在 Shell 中输入密码是不可见的，只需要输入密码后按下回车即可。

> 再次访问「安全性与隐私」页面，将可以看到你的 macOS 已经允许「任何来源」的应用程序运行。

![](/img/mac2.png)

#### 2、下载客户端版本（必须下载右边的版本👉） [点我下载](https://file.o4o.win/Mac/ShadowsocksX-NG-R8.dmg)

![](/img/mac3.png)


#### 3、打开用户中心的产品管理，前往套餐详情页复制订阅链接，在产品管理 > 管理 那里写着点我复制。

![](/img/mac4.png)

#### 4、运行`ShadowsocksX-NG-R8` ，点按屏幕顶部菜单栏中的 `灰色小飞机` 图标弹出主菜单。

#### 5、前往「服务器」>「编辑订阅」进入订阅设置窗口。

#### 6、点按订阅设置窗口左下角的「+」，粘贴`第 3 步`的复制的订阅网址后点按「OK」。

#### 7、前往「服务器」>「手动更新订阅」以同步服务器节点。(更新完要看下加密方式是不是none, 如果不是,手动更改下）

#### 8、前往「主菜单」选择「pac模式」。

#### 9、前往「服务器」选择合适的节点。

#### 10、点按主菜单`打开shadowsocks`即可【上网】，如果不行，试下白名单模式和全局模式，完全退出浏览器，试下Safari和Chrome，Chrome上跟代理相关的插件全部卸载。

#### 11、可以正常上google后，前往「主菜单」>「代理设置」> 从 GFWList 更新 PAC 以及更新全部白名单(这个步骤不成功也没关系)。


> PAC自动模式：大部分被墙的网址会自动走代理，推荐使用。

> 全局模式：所有网址都走代理，加速国外网站访问，但是影响国内网站访问速度。

> 如果订阅成功，试了所有线路都不行，pac模式和全局模式都不行，Safari和Chrome都不行，那么试下这个版本，[点我下载](https://file.o4o.win/Mac/electron-ssr-0.2.6.dmg)，使用方法差不多。

#### 如果仔细看完上面教程操作，SSR订阅还是用不了，使用产品管理的v2ray订阅线路。
