# clash订阅鸿蒙Next手机平板(Harmony Next)使用教程

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。可以打开https://time.is 对比一下时间。

!> 只支持鸿蒙Next系统（Harmony Next）第三方开发移植，不保证一定可以用。

!> 项目Github：https://github.com/likuai2010/ClashMeta/releases

!> 项目Github：https://github.com/likuai2010/auto-installer

### 警告必看⚠️

- next搭载先进技术，在webview内实现了云端网址安全审查，在用户访问网址时，将访问网址、设备信息、系统语言等内容上传至云端审查，若判定该访问不安全，则显示保护页面，届时可实现实时对特定人群或区域开展防护，针对性和实时性远超现有技术。而next又要求应用必须使用系统组件，所以无论是官方浏览器还是第三方，亦或是有访问网站功能的应用，都不能逃离安全审查，无死角且有效地保护用户，避免用户被危险网站威胁安全。该视频旨在证实该技术存在，以展现next在技术上的先进性，自主性和可控性

- 说人话，就是你所有的访问数据都会被上传到云端进行审查，从底层屏蔽手机厂商认为不安全的页面。据说是可以关闭，但是上传数据是少不了的，猜测可能是审查但是并不阻止你访问。但是这不代表日后不秋后算账。我们的建议是不要使用鸿蒙手机来FQ，如果你认为自己的安全与隐私不重要，那么可以继续安装。

### 再次提示⚠️

- 默认不允许侧载。需要安装auto-installer：

- Auto installer(小白鸿蒙开源自助餐)是一款在 Harmony Next 安装任意hap应用的工具。登录华为账号, 开启手机开发者模式和usb调试，即可安装任意hap应用 (tip: 必须保持开发者模式才能正常使用哦)。

- 不能保证未来还可以继续侧载应用。

- 再次强调，十分不建议使用鸿蒙手机来FQ

### 下载软件

| Auto installer(Windows安装) | Clash meta |
| ------ | ------ |
| [点我下载](https://file.o4o.win/clash/harmony/AutoInstaller.Setup.1.2.0.exe) | [点我下载](https://file.o4o.win/clash/harmony/entry-default-signed.hap) |
| [点我下载](https://dl.fastconnect.cc/https://github.com/likuai2010/auto-installer/releases/download/1.2.0/AutoInstaller.Setup.1.2.0.exe) | [点我下载](https://fajskdasl.lanzouv.com/iXXJJ2gxejsd) |

### 安装软件

1. 下载auto-installer
2. 下载特殊鸿蒙版本clash-meta
3. 打开开发者模式，安装clash,连续点击版本号——进入开发者模式——找到开发者选项——usb调试打开——无限调试打开——输入手机的ip地址——直接拖拽hap包到电脑软件中——登录华为账号
4. 最后一次强调，十分不建议使用鸿蒙手机来FQ

### 1. 先购买一个套餐

### 2. 获取clash订阅链接
> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，可以点击`点我复制`按钮，安装好软件也可以`一键导入clash`。

### 3. 具体使用步骤

![](/img/android/1.png)
![](/img/android/2.png)
![](/img/android/3.png)

> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，可以点击`点我复制`按钮。

![](/img/android/41.png)
![](/img/android/5.png)
![](/img/android/6.png)
![](/img/android/7.png)
![](/img/android/8.png)
![](/img/android/9.png)

> 启动后，可以点击`代理`进去选择节点

![](/img/android/10.png)

!> 测试延迟仅供检验是否连通，不能用作速度快慢的参考，快慢要以你实际体验为准，同一个线路不同运营商不同地区速度都不一样，建议测试不同的线路对比。

![](/img/android/11.png)

> 切换规则模式和全局模式方法

![](/img/android/12.png)
![](/img/android/13.png)

#### 规则模式和全局模式的区别

- **直连模式**：等于没开软件
- **规则模式**：根据配置的规则来判断需不需要走代理，一般是国内网站直连，国外被墙网站走代理。
- **全局模式**：所有连接均走代理，访问所有网站都是，浪费套餐流量，影响国内网站访问速度。

拿访问新浪举例，规则模式会从你手机到新浪服务器，全局模式会从你手机到国外再到新浪服务器（绕一圈）。
一般是推荐使用规则模式，既不会影响访问国内网站速度，也省流量。
如果遇到国外网站如pinterest打不开或者部分图片加载不出来，可能不在配置规则内，这种时候可以临时试下全局模式。