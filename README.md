# devops-ui 运维平台前端

主要实现运维平台前端界面，基于 vite2+vue3+ts 构建

## 使用说明

```bash
yarn
# 开发
yarn dev

# 打包
yarn build

```

## 打包

```bash
# 构建
yarn build

cp -r dist dockerize/devops-ui

# 打包 docker 镜像
cd dockerize
./docker-build.sh
```
