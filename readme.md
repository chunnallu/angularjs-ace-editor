# 心算

## 启动项目

准备环境：

1. 安装node

2. 安装yarn

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

```

临时启动：

```
npm run serve
```

打包出镜像：

```
npm run build
```
参考：[部署nodejs docker app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## 疑问

1.怎么减小镜像的大小？
2.开发依赖貌似不需要，但是好像安装到镜像里去了
3.bower使用的包都是原始包，没有经过压缩的

