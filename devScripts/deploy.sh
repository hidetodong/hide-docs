#!/bin/zsh

git pull
git add . && git commit -m $1 && git push

# PROJECT_DIR=~/Documents/WorkCode.nosync/galaxy-1.0/galaxy/dist/web
REMOTE_DIR=/var/www/html/site/hide-docs/hide-docs
REMOTE_IP=47.111.154.112
REMOTE_USER=root
password=512303dj#
echo "[----- 开始执行自动上传 -----]"
expect -c "
    spawn ssh -p22 ${REMOTE_USER}@${REMOTE_IP}
    expect \"password:\"
    send \"${password}\r\" 
    expect eof
"
echo "[----- 上传完成 -----]"