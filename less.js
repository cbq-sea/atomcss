/* eslint-disable */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let sourcePath;
let targetPath;

// 获取命令行中的路径
process.argv.forEach((val, index, array) => {
  if (index == 2) {
    sourcePath = val;
  }
  if (index == 3) {
    targetPath = val;
  }
});

const lessc = function (rootPath, targetPath) {
// 取得当前绝对路径
  rootPath = path.resolve(rootPath);
  // 目标路径绝对路径
  targetPath = path.resolve(targetPath);
  // 判断目录是否存在
  fs.access(rootPath, (err) => {
    // 路径存在
    if (!err) {
      // 获取当前路径下的所有文件和路径名
      const childArray = fs.readdirSync(rootPath);
      if (childArray.length) {
        for (let i = 0; i < childArray.length; i++) {
          const currentFilePath = path.resolve(rootPath, childArray[i]);
          const currentTargetPath = path.resolve(targetPath, childArray[i]);
          // 读取文件信息
          const stats = fs.statSync(currentFilePath);
          // 若是目录则递归调用
          if (stats.isDirectory()) {
            lessc(currentFilePath, currentTargetPath);
          } else {
            // 判断文件是否为less文件
            if (path.extname(currentFilePath) === '.less') {
              const newFilePath = path.resolve(
                targetPath,
                `${path.basename(currentFilePath, '.less')}.css`
              );
              if (!fs.existsSync(targetPath)) {
                fs.mkdirSync(targetPath);
              }
              console.log(newFilePath);
              exec(`lessc -x ${currentFilePath} > ${newFilePath}`);
            }
          }
        }
      }
    } else {
      console.log('directory is not exists');
    }
  });
};

lessc(sourcePath, targetPath);
