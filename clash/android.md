# clash订阅android使用教程

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。可以打开https://time.is 对比一下时间。

### 0、首先在官网购买一个套餐


### 1、下载客户端APP

> ClashMetaForAndroid客户端下载地址(2024.9更新): 

clash安卓软件下载地址1：https://file.o4o.win/clash/android/cmfa-2.10.4-meta-universal-release.apk (版本2.10.4)

clash安卓软件下载地址2：http://file.helloking.top/clash/android/cmfa-2.10.4-meta-universal-release.apk (版本2.10.4)

经测试，发现小米手机自带浏览器可能下载上面软件下不动，去应用商店下载“夸克”，然后用夸克浏览器就可以下载了。

FlClash也完美支持我们clash订阅，也可以下载尝试，[下载地址](https://github.com/chen08209/FlClash/releases)

---

https://github.com/MetaCubeX/ClashMetaForAndroid/releases/ （官方最新版本，不建议，不保证能用）

> 客户端项目地址：

https://github.com/MetaCubeX/ClashMetaForAndroid/

### 2、获取clash订阅链接
> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，可以点击`点我复制`按钮，安装好软件也可以`一键导入clash`。

### 3、具体使用步骤：

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