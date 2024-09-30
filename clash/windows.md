# clash订阅windows使用教程

## 一字不漏的看完下面文字，按教程操作

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。可以打开https://time.is 对比一下时间。
#### 1、首先在官网购买一个套餐

<!-- https://kingfast.cc/buy

如果上面的网址打不开看下面的教程：

https://www.zybuluo.com/hellozubuluo/note/1728024 -->

#### 2、下载客户端版本安装

> 客户端下载地址（2024.9更新）:

!> Clash Verge不支持Win7，需要升级Win10或11。

!> win7参考这个教程：[win7教程](/clash/win7.md)

**Clash Verge软件版本1.7.7** (更新版本不一定兼容，升级后如果出现问题回退到这个版本)

不知道系统是多少位的普通用户安装64的就行，如果不行再换32位的。

| windows64位 | windows32位
| ------ | ------ |
| [windows64位下载](https://file.o4o.win/clash/clash-verge/windows/Clash.Verge_1.7.7_x64-setup.exe) | [windows32位下载](https://file.o4o.win/clash/clash-verge/windows/Clash.Verge_1.7.7_x86-setup.exe) | 
| [windows64位备用下载1](http://file.helloking.top/clash/clash-verge/windows/Clash.Verge_1.7.7_x64-setup.exe) | [windows32位备用下载1](http://file.helloking.top/clash/clash-verge/windows/Clash.Verge_1.7.7_x86-setup.exe) | 
| [windows64位备用下载2](https://ghp.ci/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x64-setup.exe) | [windows32位备用下载2](https://ghp.ci/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v1.7.7/Clash.Verge_1.7.7_x86-setup.exe) |

安装提示webview2的问题，下载[此版本](https://file.o4o.win/clash/clash-verge/windows/Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe)

Clash Verge安装/运行不正常（闪退，不显示等），到"控制面板/应用管理"修复或下载安装Webview 2：https://go.microsoft.com/fwlink/p/?LinkId=2124703

如Webview2安装失败，请下载常青独立安装程序，右键“管理员模式运行”安装包：https://developer.microsoft.com/zh-cn/microsoft-edge/webview2

IP Guard问题，可能导致无法运行Verge（点“任务栏图标“无反应），请以win8兼容模式运行Verge，参考：https://jingyan.baidu.com/article/925f8cb816b94a81dce05658.html


!> 安装和运行Clash Verge, 360等提示”系统修改“，一律允许；强烈建议卸载360，使用非国产杀毒软件。


---

> 安装教程:

下载后用管理员权限打开，双击下一步安装就行。

#### 3、打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，直接点击`点我复制`按钮。

![](/img2/mac/m2.png)

#### 4、在软件配置订阅链接使用

> 在整个电脑屏幕右下角找到clash verge小猫图标右击，然后 `打开面板 > 订阅 > 右侧粘贴订阅链接 > 导入`，按下图提示操作

!> 如果导入失败，尝试将订阅链接里面的`sub.o4o`替换成`sub2.o4o`再试下，还是不行，联系客服。

!> 后续使用，需要每天更新下订阅(默认是24小时自动更新，不一定总生效)，获取最新线路，同时也能查询最新流量使用情况。

![](/img2/mac/w1.png)

![](/img2/mac/m3.png)

> 点击“代理”，选择你需要的代理类型（推荐规则）和节点

![](/img2/mac/m4.png)

> 点击"设置"启用系统代理，开始使用

![](/img2/mac/m5.png)


> 代理模式推荐用`规则`，如果这样某些国外网站还是上不了，可以用`全局`，不推荐长期开着全局，影响国内网站速度甚至打不开，流量用的还很快。

#### 规则模式和全局模式的区别

- **规则模式**：根据配置的规则来判断需不需要走代理，一般是国内网站直连，国外被墙网站走代理。
- **全局模式**：所有连接均走代理，访问所有网站都是，浪费套餐流量，影响国内网站访问速度。

拿访问新浪举例，规则模式会从你手机到新浪服务器，全局模式会从你手机到国外再到新浪服务器（绕一圈）。
一般是推荐使用规则模式，既不会影响访问国内网站速度，也省流量。
如果遇到国外网站如pinterest打不开或者部分图片加载不出来，可能不在配置规则内，这种时候可以临时试下全局模式。

#### clash verge Tun模式介绍

菜单设置里会有个`Tun模式`，这个模式的作用，相当于开了个虚拟网卡接管你电脑的所有网络，例如终端，WhatsApp电脑端。
不开启Tun模式的时候，你开启规则模式或者全局模式，只是对你电脑的`浏览器`起作用和部分遵循系统代理的软件，你电脑的其他应用，例如qq，微信，终端，这些一般是不起作用的，但是有时开了系统代理，浏览器也不起作用，可以考虑开启tun模式，或者浏览器安装个插件，[点我查看](/others/omega.md.md)。

服务模式安装报错`找不到VCRUNTIME140.dll`，看这个[解决办法](/clash/140.md)

!> 一般情况下，不需要使用Tun模式，开启的话，用规则模式也没问题，用全局模式流量用得很快，而且影响国内网站速度。一般在你需要终端需要走代理，或者特定客户端软件如（WhatsApp电脑端）也需要走代理的情况下才使用。

![](/img2/mac/m6.png)
![](/img2/mac/tun.png)

#### 常见问题排查方法：

问题1：所有线路的延迟都是timeout<br/>
解决办法：
- 看下流量是否用完了
- 打开https://time.is/ 网站，检查系统时间是否准确，如果有误差，需要进行校准。

问题2：线路有延迟但是浏览器无法打开google.com等国外网站<br/>
解决办法：
- 设置为系统代理，有没勾选上，检查一下，如果已勾选，试下取消勾选再重新勾选。
- 有延迟的线路肯定能用的。试下能不能打开https://ip.sb ? 有没显示国外的IP? 如果显示国内IP，那是浏览器设置问题，把chrome跟代理相关的插件停用就行了，不知道哪个就用排除法。或者换其他浏览器试下。
- 如果还不行，开启tun模式试下。
- 如果tun模式开启了也不行，[点我终极解决办法](/others/omega.md.md)

问题3：退出软件后，浏览器什么网站都打不开<br/>
解决办法：
- 退出软件之前，先取消勾选`System Proxy(系统代理)`

