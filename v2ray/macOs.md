# v2ray订阅macOs使用教程


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

#### 2、下载好客户端后打开安装

> mac客户端下载地址

https://file.o4o.win/v2ray/macOS/V2rayU.dmg (推荐)

http://file.helloking.win/v2ray/macOS/V2rayU.dmg

~~https://github.com/yanue/V2rayU/releases/ （官方最新版本不一定适用kingfast）~~

![](/img/v2rayU.png)

#### 3、复制 `产品管理 > 管理`  的 `v2ray订阅链接`

> 打开用户中心的产品管理，前往套餐详情页复制订阅链接，在`产品管理 > 管理`那里，v2ray订阅链接，`点我复制`。

#### 4、配置订阅链接，获取线路

> 打开软件后，先点订阅设置

![](/img/mac3.png)

![](/img/mac4.png)

#### 5、开启`pac模式`或者`全局模式`试下，服务器列表选择其中一个线路，不同线路可以都试下。

!> 如果出现以下错误，解决办法：偏好设置 》advance 》 1087 。把1087改为其他，例如1089，1090。

![](/img/1087error.png)