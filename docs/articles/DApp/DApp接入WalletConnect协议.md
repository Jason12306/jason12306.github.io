## 什么是 WalletConnect？
[官方文档](https://docs.walletconnect.org/)
> WalletConnect是一种在Wallet和 Dapps（Web3 Apps）之间安全通信的开放协议。这个协议在两个app或（和）设备建立了远程连接，通过一个桥接服务器（Bridge server）中继载荷。这些有效负载通过两端之间的共享密钥对称地加密。

## 在DApp中接入

1. 引入相关依赖 `@walletconnect/client`、`@walletconnect/qrcode-modal`
2. 初始化连接
3. 订阅事件(用于获取用户信息，连接信息等)
4. 根据需求调用 `connector` 实例上方法，如使用`connector.sendTransaction`发送交易，`connector.signTransaction`签名交易

[walletconnect Api 文档](https://docs.walletconnect.org/client-api)

注意：参数中的 `gas` 实际上指的是 `gasLimit`，所以使用 `gasLimit` 的数值或者直接将`gas`替换为 `gasLimit` 


```javascript
// walletconnect 客户端(client)
import WalletConnect from "@walletconnect/client";
// 二维码弹窗(modal)
import QRCodeModal from "@walletconnect/qrcode-modal";

function initWalletConnect() {
  let connector
  // 建立连接后 walletconnect 会在localstorage中缓存session信息，key为 walletconnect
  // 所以需要优先检测session是否存在，其断开会自动清除
  const sessionCache = window.localStorage.getItem("walletconnect") || null
  if (sessionCache) {
    const session = JSON.parse(sessionCache)
    connector = new WalletConnect({ session });
  } else {
     // Create a connector
    connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required walletconnect提供了固定的桥接服务器
      qrcodeModal: QRCodeModal,
    });

    if (!connector.connected) {
      // create new session
      connector.createSession();
    }

  }
  // 订阅事件
  subscribeToEvents(connector);
}

// 监听事件 payload 通过载荷获取相关信息
// connect, disconnect, session_request, session_update, call_request, wc_sessionRequest, wc_sessionUpdate
function subscribeToEvents(connector) {

  // Subscribe to connection events
  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on("session_update", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get updated accounts and chainId
    const { accounts, chainId } = payload.params[0];
  });

  connector.on("disconnect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Delete connector
  });
}
```