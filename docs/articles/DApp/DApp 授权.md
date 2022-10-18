# 一、DApp 与 以太坊（ETH）钱包授权、交互

[web3官方文档 v1.2.6](https://learnblockchain.cn/docs/web3.js/getting-started.html)
> 支持以太坊的浏览器如 Mist 或 MetaMask 会有提供一个 `ethereumProvider` 或 `web3.currentProvider` 。对于 web3.js 来说，可以检查 Web3.givenProvider ，如果属性为 null 再连接本地或远程的节点。

[web3官方文档 v1.3.0](https://web3js.readthedocs.io/en/v1.3.0/getting-started.html)
> Most Ethereum-supported browsers like MetaMask have an EIP-1193 compliant provider available at `window.ethereum`.For web3.js, check Web3.givenProvider.

```javascript
import Web3 from "web3";

let web3Instance;

 /**
  * 该函数应在页面加载完成后调用
  * js --> onload
  * vue --> mounted
  * react --> useEffect
  * 通过 web3Instance 可与钱包进行交互 https://web3js.readthedocs.io/en/v1.3.0/getting-started.html
  */

async function initWeb3 () {

  // 判断是否有web3实例
  if (!!window.web3) {
    web3Instance = new Web3(window.web3.currentProvider);
  } else {
    web3Instance = new Web3(Web3.givenProvider || YOUR_RPC_ADDRESS);
  }

  // 判断是否有 ethereum
  if (window.ethereum) {
    // 函数中 可以使用 async/await 关键字调用
    // accounts 为获取的钱包账号数组 string[]
    const accounts =  await window.ethereum.enable();
  }

}
```

## 二、DApp 与 波宝（TRX）钱包授权、交互 
[波宝钱包文档](https://developers.tron.network/docs/wallet-integration)简单明了，直接对接即可  

[TronWeb对象 API](https://cn.developers.tron.network/reference#tronweb-object)