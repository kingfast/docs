# terminal使用代理教程

# 终端使用代理加速的正确方式（Clash）
我们在终端使用 Homebrew、git、npm 等命令时，总会因为网络问题而安装失败。虽然设置镜像确实有用，但是没有普适性。本文介绍让终端走代理的方法，可以通杀很多情况。

也可以直接开启`虚拟网卡模式(tun模式)`，更方便。

## 1. 实战演示

### 错误情况

```bash
'Connection to api.telegram.org timed out. (connect timeout=5.0)'

```

### 环境

- macOS / Linux
- ClashX (或 Clash 核心)
- 默认端口：`7890` （可自定义，具体值要根据你的软件里面的设置来确定）

### 快速配置
在终端输入以下代码（注意：此操作会覆盖 `~/.bash_profile`，建议先备份）：

```bash
cat > ~/.bash_profile << EOF
function proxy_on() {
    export http_proxy=http://127.0.0.1:7890
    export https_proxy=\$http_proxy
    echo -e "终端代理已开启。"
}

function proxy_off(){
    unset http_proxy https_proxy
    echo -e "终端代理已关闭。"
}
EOF

source ~/.bash_profile

```

- **开启代理**：输入 `proxy_on`
- **关闭代理**：输入 `proxy_off`

### 验证结果

```bash
curl -I https://www.google.com
# 返回 HTTP/1.1 200 OK 则表示成功

```

---

## 2. 各平台详细设置

### macOS & Linux
通过设置环境变量 `http_proxy` 和 `https_proxy` 即可。
**临时生效：**

```bash
export http_proxy=http://127.0.0.1:7890
export https_proxy=$http_proxy

```
**永久生效：**
根据你的 Shell 类型（执行 `echo $SHELL` 查看）：

- `/bin/bash` => 写入 `~/.bash_profile`
- `/bin/zsh` => 写入 `~/.zshrc`

### Windows

#### CMD

```dos
set http_proxy=http://127.0.0.1:7890
set https_proxy=http://127.0.0.1:7890

# 还原
set http_proxy=
set https_proxy=

```

#### PowerShell

```powershell
$env:http_proxy="http://127.0.0.1:7890"
$env:https_proxy="http://127.0.0.1:7890"

# 还原
$env:http_proxy=""
$env:https_proxy=""

```

---

## 3. 其他常用工具代理设置

### Git 代理

```bash
# 设置 (假设端口为 7890)
git config --global http.proxy 'http://127.0.0.1:7890'
git config --global https.proxy 'http://127.0.0.1:7890'

# 取消设置
git config --global --unset http.proxy
git config --global --unset https.proxy

```

### NPM 代理

```bash
# 设置
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

# 取消设置
npm config delete proxy
npm config delete https-proxy

```

### SSH (git clone ssh) 走代理
若使用 `git@github.com:...` 这种 SSH 形式，需修改 `~/.ssh/config`：
**macOS/Linux:**

```plaintext
Host github.com
    ProxyCommand nc -X 5 -x 127.0.0.1:7890 %h %p

```
**Windows:**

```plaintext
Host github.com
    ProxyCommand connect -S 127.0.0.1:7890 %h %p

```

---

## 常见问答
**Q：终端用了代理，还要给 Git 单独设置代理吗？**

A：Git 有两种协议。如果使用 **HTTPS** 协议，设置终端代理即可生效；如果使用 **SSH** 协议，则必须按照上述“SSH 走代理”的方法单独配置。

---
*原文链接：https://weilining.github.io/294.html*

---