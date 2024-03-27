import fs from 'node:fs';
import minimist from 'minimist';

// 環境変数をコマンドラインから取得
const vars = minimist(process.argv.slice(2));
// biome-ignore lint/performance/noDelete: <explanation>
delete vars._;

// 環境変数ファイルに書き込む内容を作成
let content = '';
for (const key of Object.keys(vars)) {
  content += `${key}=${vars[key]}\n`;
}

// 環境変数ファイルを作成
fs.writeFile('./.env.local', content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('The file is created successfully.');
  }
});
