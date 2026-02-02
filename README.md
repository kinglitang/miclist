# miclist

"半吊子" 是一个记录 KTV 歌曲熟练度的静态小站：
- 新坑 / 半吊子 / 绝活 三档状态
- 本地缓存 + CloudBase 云端同步
- Apple Music/iTunes 搜索接入

## 在线访问
- CloudBase：`https://ktv-0g3hatgjf68b912d-1328339263.tcloudbaseapp.com/ktvai2/`

## 本地使用
直接打开 `ktvai/index.html` 即可。

## 目录结构
- `ktvai/` 静态站点源码

## 部署
本项目使用 CloudBase（腾讯云开发）进行部署。

### 自动部署
当代码推送到 `main` 分支时，GitHub Actions 会自动部署到 CloudBase。

需要在 GitHub 仓库设置中配置以下 Secrets：
- `CLOUDBASE_SECRET_ID`: CloudBase API Secret ID
- `CLOUDBASE_SECRET_KEY`: CloudBase API Secret Key

### 手动部署
安装 CloudBase CLI：
```bash
npm install -g @cloudbase/cli
```

登录并部署：
```bash
tcb login
tcb hosting deploy ktvai -e ktv-0g3hatgjf68b912d
```

## License
MIT
