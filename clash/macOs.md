# clash订阅macOs使用教程

一字不漏的看完下面文字，按教程操作

#### 0、首先在官网购买一个套餐

<!-- https://kingfast.cc/buy

如果上面的网址打不开看下面的教程：

https://www.zybuluo.com/hellozubuluo/note/1728024 -->



#### 1、先设置下电脑权限，不然安装可能不成功

> 打开「终端」。

![](/img/mac1.png)

> 在终端的窗口中输入如下指令，并按下回车键。

```
sudo spctl --master-disable
```

> 由于申请了 sudo 权限，需要输入你当前电脑的`开机密码`，在 Shell 中输入密码是不可见的，只需要输入密码后按下回车即可。

> 再次访问「安全性与隐私」页面，将可以看到你的 macOS 已经允许「任何来源」的应用程序运行。

![](/img/mac2.png)

#### 2、下载客户端版本安装(推荐新版本)

> 客户端下载地址:

![](/img/new-clash.png)

适用新的clash订阅：https://file.o4o.win/clash/macOS/ClashX-1.91.1.dmg （版本1.91.1）

适用新的clash订阅：http://file.helloking.win/clash/macOS/ClashX-1.91.1.dmg （版本1.91.1）

---
![](/img/old-clash.png)

适用旧的clash订阅：https://file.o4o.win/clash/macOS/ClashX.dmg （版本1.20.1）

适用旧的clash订阅：http://file.helloking.win/clash/macOS/ClashX.dmg （版本1.20.1）

---

https://github.com/yichengchen/clashX/releases （官方最新版本，不建议，不保证能用）

> 安装教程:

![](/img/clashx1.png)

#### 3、打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，注意区分新旧版本，可以点击`点我复制`按钮。

#### 4、配置订阅链接，获取线路

> 单击菜单栏的clashx图标，然后 `配置 > 托管配置 > 管理`，按下图提示操作

![](/img/clashx2.png)

> 更新完订阅之后，再点击clashx菜单，关闭其他代理软件，`设置为系统代理`勾选上，就可以选择节点来使用了。

> 出站规则推荐用`规则判断`，如果这样某些国外网站也上不了，可以用`全局连接`。

#### 出站规则：Rule(规则判断)和Global(全局连接)的区别

- **Rule(规则判断)**：根据配置的规则来判断需不需要走代理，一般是国内网站直连，国外被墙网站走代理。
- **Global(全局连接)**：所有连接均走代理，访问所有网站都是，浪费套餐流量，影响国内网站访问速度。

拿访问新浪举例，Rule模式会从你手机到新浪服务器，Global模式会从你手机到国外再到新浪服务器。
一般是推荐使用Rule模式，既不会影响访问国内网站速度，也省SS流量。
如果遇到国外网站如pinterest打不开或者部分图片加载不出来，可能不在配置规则内，这种时候可以试下Global模式。

