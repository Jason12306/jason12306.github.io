```
server{
  listen 443;
  server_name 域名;
  ssl on;
  ssl_certificate 证书公钥;
  ssl_certificate_key 证书私钥;
  ssl_session_timeout 5m;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
  ssl_prefer_server_ciphers on;
  location / {
      # 启用支持websocket连接
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_pass http://127.0.0.1:xxxx;
  }
}
```