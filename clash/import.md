## 问题：
导入订阅的时候，报错信息： error sending request for url。。。

![](/img2/error_import.png)
## 解决办法：

 1. 检查订阅链接是否正确和过期，clash和singbox的别搞混。
 2. 如果导入失败，尝试将订阅链接里面的域名`xxx.xxx.win`分别替换成`sub.o4o.win`、`sub2.o4o.win`、`sub2.o44o.win`、`sub2.o44o.win`再试下。注意导入的时候，系统代理按钮，需要先关闭。

 例如你的订阅是`https://xxx.xxx.win/api/sub/6672bxxxxxxxxxxx?type=clash`，换成`https://sub.o4o.win/api/sub/6672bxxxxxxxxxxx?type=clash`，其他以此类推。
 3. 如果还是不行，将上面的订阅链接和替换了域名的订阅链接都在Chrome浏览器打开，看看是否会触发下载一个yaml文件，如果正常下载，继续看下面，如果报错不下载，发工单说明已尝试本文档方法依然不行。

- 点击clash左侧菜单的`订阅`，然后点击右侧的`新建`，然后如下图配置
![](/img2/local_import.png)
- 配置后，点击clash左侧菜单的`代理`，看看有没出现节点选择，展开是否有线路。有的话，就说明导入成功了，继续看原教程。

4. 如果通过本地文件导入成功了，可以开启系统代理按钮，重新试下用订阅链接直接导入。