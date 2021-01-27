#!/bin/zsh



# 打包
npm run build

# 本地上传
git pull
git add . && git commit -m $1 && git push

# 服务端拉取

PROJECT_DIR=~/Documents/HIDETOXIC/hide-docs/docs/.vuepress/dist
REMOTE_DIR=/var/www/html/site/hide-docs/hide-docs/docs/.vuepress
REMOTE_IP=47.111.154.112
REMOTE_USER=root
password=512303dj#
echo "[----- 开始执行自动上传 -----]"
expect -c "
    spawn scp -r ${PROJECT_DIR} ${REMOTE_USER}@${REMOTE_IP}:${REMOTE_DIR}
    expect \"password:\"
    send \"${password}\r\"
    expect eof
"
echo "[----- 上传完成 -----]"