
Windows 7 无法使用

### 解决方案1：

1、下载 KexSetup_Release_1_1_1_1375.exe 并安装
[下载地址](https://damon8.lanzoub.com/iRtN7228skvc)
[备用下载地址](https://file.o4o.win/clash/clash-verge/windows/KexSetup_Release_1_1_1_1375.exe)

2、进入 `Clash Verge` 主程序目录，逐个右键打开下面文件清单的文件的属性，找到 `VxKex` 选项卡，勾选 `Enable VxKex for this program` 及 `Disable VxKex for child processes` 选项，即可正常运行。

| 文件清单 |
| ------ |
| Clash Verge.exe | 
| resources\clash-verge-service.exe | 
| resources\install-service.exe | 
| resources\uninstall-service.exe | 

[参考1](https://www.cnblogs.com/damonlog/articles/18257596)
[参考2](https://www.clashverge.dev/faq/windows.html)

### 解决方案2：

尝试下载安装下面的版本

https://file.o4o.win/clash/clash-verge/windows/Clash.Verge_1.7.7_x64_fixed_webview2-setup.exe