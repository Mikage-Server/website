import fs from 'fs';

// 環境変数をコマンドラインから取得
// DISCORD_CLIENT_IDはstringとしてパース (整数型にキャストされると不具合を起こすため)
const vars = require('minimist')(process.argv.slice(2), { string: ['DISCORD_CLIENT_ID'] });
delete vars._;

// 環境変数ファイルに書き込む内容を作成
let content: string = '';
Object.keys(vars).forEach((key) => {
  content += `${key}=${vars[key]}\n`;
});

// 環境変数ファイルを作成
fs.writeFile('./.env.local', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file is created successfully.');
  }
});