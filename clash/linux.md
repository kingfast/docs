# clash订阅linux使用教程

!> v2ray 对于时间有比较严格的要求，客户端与服务端时间相差不能查过1分钟，否则节点全部超时，请置系统时间同Internet时间同步，以确保不会遇到该问题。可以打开https://time.is 对比一下时间。

>教程时使用的环境 macOs 10.15.3 (macOs是类unix系统，操作一样)

## clash gui版本使用
- `clashy` [项目地址](https://github.com/SpongeNobody/Clashy/releases) 暂无教程，自行研究
- `Clash For Windows` [项目地址](https://github.com/Fndroid/clash_for_windows_pkg/releases) 暂无教程，可参考这个[网上教程](https://blog.zzsqwq.cn/posts/clash-for-windows-on-linux/)


## clash命令行版本配合web ui教程 （推荐）
我们直接使用Clash Core，首先到Github下载Clash Core（Clash作者已经提供了各个平台的预编译文件），`选择自己对应的平台下载就行`，linux一般下载`clash-linux-amd64-xxx`。这里我使用的是`clash-darwin-amd64-v0.20.0`。下载解压出来你会得到一个`clash-darwin-amd64-v0.20.0`的二进制文件，为了便于接下来的操作我们把他重命名为`clash`。

> 下载地址：https://github.com/Dreamacro/clash/releases

下载Clash Core 二进制可执行文件

```
wget -c https://github.com/Dreamacro/clash/releases/download/v0.20.0/clash-darwin-amd64-v0.20.0.gz
```

解压并且重命名

```
gzip -d clash-darwin-amd64-v0.20.0.gz && mv clash-darwin-amd64-v0.20.0 clash
```

赋予执行权限

```
chmod +x clash 
```

打开产品管理用户中心，前往套餐详情页复制`clash订阅链接`

```
wget -O $HOME/.config/clash/config.yaml  你的clash订阅链接
```

运行Clash 会默认读取 `$HOME/.config/clash` 目录下的 `config.yaml` 文件，把下载的配置文件放在这个目录内。


```
./clash
```

成功如下图：

![](/img/linux1.png)

可以看到clash创建了前置代理，http代理端口为：`7890` ，socks5代理端口为：`7891` ，RESTful API的端口是`9090` `(这些端口不同版本可能不一样，实际以终端输入的为准)`

这个时候在chrome浏览器或者firefox浏览器的`SwitchyOmega`插件里配一下代理就行了，如下图。

![](/img/linux2.png)


#### 通过web控制面板RESTful API切换节点和模式，可用下面两个来控制。

https://clash.razord.top 或者 https://yacd.haishan.me 

>这里我以第一个为例，设置好外部控制，默认配置文件RESTful API端口是`9090`，密钥为空。

>如需要更改请自行修改yaml文件，一般不建议改上面这些默认端口。

>配置成功后，使用代理访问google那些网站，就可以看到有日志了，如下图。

![](/img/linux3.png)