# clash订阅linux使用教程

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。可以打开https://time.is 对比一下时间。


## clash gui版本使用  （推荐）
- `clash verge rev` [项目地址](https://github.com/clash-verge-rev/clash-verge-rev/releases/tag/v1.7.7) 自行下载自己linux发行版的安装包安装，使用教程参考windows的

<!-- https://archive.org/details/clash_for_windows_pkg -->

## 其他可以用客户端（自行研究）

- https://github.com/juewuy/ShellCrash
- https://github.com/JohanChane/clashtui/blob/main/README_ZH.md
- https://github.com/GUI-for-Cores/GUI.for.Clash

## clash命令行版本配合web ui教程
我们直接使用Clash Core，首先到Github下载Clash Core（Clash作者已经提供了各个平台的预编译文件），`选择自己对应的平台下载就行`，linux一般下载`mihomo-linux-amd64-xxx`。这里我使用的是`mihomo-darwin-arm64-v1.18.9`，以macos 为例子。下载解压出来你会得到一个`mihomo-darwin-arm64-v1.18.9`的二进制文件，为了便于接下来的操作我们把他重命名为`clash_meta`。

<!-- > 下载地址：https://github.com/Dreamacro/clash/releases -->

<!-- > 下载地址：https://github.com/doreamon-design/clash/releases (clash内核，停止维护) -->

> 下载地址： https://github.com/MetaCubeX/mihomo/releases （clash meta内核）

下载二进制可执行文件

```
# macos arm64
wget https://github.com/MetaCubeX/mihomo/releases/download/v1.18.9/mihomo-darwin-arm64-v1.18.9.gz

# linux amd64 x86
wget https://github.com/MetaCubeX/mihomo/releases/download/v1.18.9/mihomo-linux-amd64-v1.18.9.gz

# linux arm64
wget https://github.com/MetaCubeX/mihomo/releases/download/v1.18.9/mihomo-linux-arm64-v1.18.9.gz
```

解压并且重命名

```
gunzip mihomo-darwin-arm64-v1.18.9.gz && mv mihomo-darwin-arm64-v1.18.9 clash_meta
```

赋予执行权限

```
chmod +x clash_meta
```

打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

```
# 创建目录，路径必须和教程一模一样
mkdir -p $HOME/.config/mihomo 
wget -O $HOME/.config/mihomo/kingfast.yaml  你的clash订阅链接
```

指定刚才下载的配置文件运行可执行文件

```
./clash_meta -f $HOME/.config/mihomo/kingfast.yaml
```

!> 如果报错提示`Can't find MMDB, start download`，最后下载失败的话，执行下面命令后，重新跑上面的命令。
```
wget -P ~/.config/mihomo http://tmp.o3o.top/GbGUr/geoip.metadb 
```

成功如下图：

![](/img/linux1.png)

可以看到clash创建了前置代理，http代理端口为：`7890` ，socks5代理端口为：`7891` ，RESTful API的端口是`9090` `(这些端口不同版本可能不一样，实际以终端输入的为准)`

这个时候在chrome浏览器或者firefox浏览器的`SwitchyOmega`或者`Zero Omega`插件里配一下代理就行了，如下图。
[Zero Omega插件安装教程](/others/omega.md)

![](/img/linux2.png)


#### 通过web控制面板RESTful API切换节点和模式，可用下面两个来控制。

https://d.metacubex.one/ 或者 https://yacd.metacubex.one/

>这里我以第一个为例，设置好外部控制，默认配置文件RESTful API端口是`9090`，密钥为空。

>如需要更改请自行修改yaml文件，一般不建议改上面这些默认端口。

>配置成功后，使用代理访问google那些网站，就可以看到有日志了，如下图。

![](/img/linux3.png)