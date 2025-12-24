# clash订阅鸿蒙Next手机平板(Harmony Next)使用教程

[老版本教程](/clash/harmony_old.md)

---

本文最后更新时间：2025-12-24

Clash Box 下载与安装教程
为数不多完美适配鸿蒙系统的Clash客户端，同样使用clashmeta内核，支持多种代理协议

[官方仓库↗](https://github.com/xiaobaigroup/ClashBox)

Clash Box 下载

| 平台 | 版本 | 代理加速 | GitHub直连 | 备用地址
| ------ | ------ | ------ | ------ |------ |
| HarmonyOS | 1.5.1 | [下载](https://github.clash.guide/clash-clients/ClashNEXT-LTS-1.5.1.hap) | [下载](https://github.com/xiaobaigroup/ClashBox/releases/download/1.5.1/ClashNEXT-LTS-1.5.1.hap) | [下载](https://file.o4o.win/clash/harmony/ClashNEXT-LTS-1.5.1.hap) |

!>
提示：
代理加速：通过跳板机代理Github地址加速访问GitHub，如果GitHub直连太慢的话可以尝试代理加速下载

### ⚠️前情提示

Clash box据说在华为应用市场-港区上线了，没有华为手机无法验证，怎么切换到港区，需要您自己Google。

本文提供的 Clash Box 并非完全开源而且仅提供.hap文件，.hap文件不能直接安装在鸿蒙系统上，如果您没有自签证书的能力，建议您不要选择用它，可以通过卓易通安装Android应用，达到同样的上网效果。[如何使用桌易通安装Clash Box](https://clash.guide/zyt-clash.html#%E5%8D%93%E6%98%93%E9%80%9A%E5%AE%89%E8%A3%85apk%E5%A4%B1%E8%B4%A5%E6%80%8E%E4%B9%88%E5%8A%9E)

----

## 安装步骤

### 1、安装应用

#### 应用自签

##### 第一步：准备工作

电脑一台（Windows 或 Mac 均可）。

数据线：将手机连接到电脑。

开启手机开发者模式：

进入 设置 -> 关于手机 -> 连续快速点击 软件版本 7次，直到提示“您已处于开发者模式”。

返回 设置 -> 系统 -> 开发者选项 -> 开启 USB调试。

##### 第二步：安装工具与侧载

普通用户推荐使用社区开发的自动化安装工具，它能自动帮你申请免费的个人开发者证书并签名。

下载安装器：
在电脑上搜索并下载 "HarmonyOS Next Auto Installer"

[HarmonyOS Next Auto Installer项目地址](https://github.com/likuai2010/auto-installer)

| window64 | macos-arm64| macos-intel |
| ------ | ------ | ------ |
| [下载](https://github.com/likuai2010/auto-installer/releases/download/2.4.0/windows-x64-2.4.zip) | [下载](https://github.com/likuai2010/auto-installer/releases/download/2.4.0/macos-arm64-2.4.zip) | [下载](https://github.com/likuai2010/auto-installer/releases/download/2.4.0/macos-x64-2.4.zip) |

连接手机：
打开安装器，通过数据线连接手机，手机上会弹出“允许USB调试”的弹窗，点击允许。

登录华为账号：
工具通常需要你登录华为账号（为了申请临时的调试证书）。

一键安装：
将你的 `ClashNEXT-LTS-1.5.1.hap` 文件直接拖入安装器窗口。

点击安装/签名。工具会自动完成签名并把应用推送到你的手机上

### 2、获取订阅

#### 打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

> 在`产品管理 > 管理`里面找到`clash订阅链接`复制，直接点击`点我复制`按钮。

![](/img2/mac/m2.png)

### 3、导入订阅

1. 粘贴订阅地址
2. 点击下载订阅

![](/img/harmony/1.png)

### 4、开启代理

- 点击开启代理即可

![](/img/harmony/2.png)

#### 规则模式和全局模式的区别

- **直连模式**：等于没开软件
- **规则模式**：根据配置的规则来判断需不需要走代理，一般是国内网站直连，国外被墙网站走代理。
- **全局模式**：所有连接均走代理，访问所有网站都是，浪费套餐流量，影响国内网站访问速度。

拿访问新浪举例，规则模式会从你手机到新浪服务器，全局模式会从你手机到国外再到新浪服务器（绕一圈）。
一般是推荐使用规则模式，既不会影响访问国内网站速度，也省流量。
如果遇到国外网站如pinterest打不开或者部分图片加载不出来，可能不在配置规则内，这种时候可以临时试下全局模式。