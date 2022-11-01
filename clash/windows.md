# clash订阅windows使用教程

一字不漏的看完下面文字，按教程操作

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。
#### 1、首先在官网购买一个套餐

<!-- https://kingfast.cc/buy

如果上面的网址打不开看下面的教程：

https://www.zybuluo.com/hellozubuluo/note/1728024 -->

#### 2、下载客户端版本安装（推荐新版本）

> 客户端下载地址:

![](/img/new-clash.png)

现在的电脑一般都是64位，先下载64位的，如果提示不行，那就下载32位的。

适用新的clash订阅： https://file.o4o.win/clash/windows/Clash.for.Windows.Setup.0.19.5.exe （版本0.19.5, 64位的电脑）

适用新的clash订阅： http://file.helloking.win/clash/windows/Clash.for.Windows.Setup.0.19.5.exe （版本0.19.5，64位的电脑）

适用新的clash订阅： https://file.o4o.win/clash/windows/Clash.for.Windows.Setup.0.19.5.ia32.exe （版本0.19.5，32位的电脑）

适用新的clash订阅： http://file.helloking.win/clash/windows/Clash.for.Windows.Setup.0.19.5.ia32.exe （版本0.19.5，32位的电脑）

---
![](/img/old-clash.png)

适用旧的clash订阅：https://file.o4o.win/clash/windows/Clash.for.Windows.Setup.0.9.11.exe （版本0.9.11）

适用旧的clash订阅：http://file.helloking.win/clash/windows/Clash.for.Windows.Setup.0.9.11.exe （版本0.9.11）

---

https://github.com/Fndroid/clash_for_windows_pkg/releases （官方最新版本，不建议，不保证能用）



#### 3、打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，注意区分新旧版本，可以点击`点我复制`按钮。

#### 4、配置订阅链接，获取线路

> 安装好软件后，双击打开软件，按照下面图操作

![](/img/w1.png)

![](/img/w2.png)

![](/img/w3.png)

![](/img/w4.png)

> 更新完订阅之后，右击屏幕右下角的软件图标，关闭其他代理软件，`System Proxy(系统代理)`勾选上，就可以选择节点来使用了。

> 你目前使用的节点是在 （节点选择 > xxx） , xxx就是你目前使用的节点，如果xxx是自动选择，就是软件自动给你选可用节点，你也通过修改来指定节点。

> 出站规则推荐用`Rule(规则判断)`，如果这样某些国外网站也上不了，可以用`Global(全局连接)`。

#### 出站规则：Rule(规则判断)和Global(全局连接)的区别

- **Rule(规则判断)**：根据配置的规则来判断需不需要走代理，一般是国内网站直连，国外被墙网站走代理。
- **Global(全局连接)**：所有连接均走代理，访问所有网站都是，浪费套餐流量，影响国内网站访问速度。

拿访问新浪举例，Rule模式会从你手机到新浪服务器，Global模式会从你手机到国外再到新浪服务器。
一般是推荐使用Rule模式，既不会影响访问国内网站速度，也省SS流量。
如果遇到国外网站如pinterest打不开或者部分图片加载不出来，可能不在配置规则内，这种时候可以试下Global模式。

