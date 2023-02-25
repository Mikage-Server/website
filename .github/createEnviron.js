const fs = require('fs');

// 環境変数をコマンドラインから取得
const vars = require('minimist')(process.argv.slice(2));
delete vars._;

// 環境変数ファイルに書き込む内容を作成
let content = '';
Object.keys(vars).forEach((key) => {
  content += `${key}=${vars[key]}\n`;
});

// .env.local ファイルに書き込む内容をコンソールに出力
console.log('[.env.local]');
console.log(content);

// 環境変数ファイルを作成
fs.writeFile('./.env.local', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file is created successfully.');
  }
});
