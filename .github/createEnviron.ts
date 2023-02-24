import { parse } from 'https://deno.land/std@0.178.0/flags/mod.ts';

const vars = parse(Deno.args);

delete vars._;

let content = 'env_variables:\n';
Object.keys(vars).forEach((key) => {
  content += `  ${key}: ${vars[key]}\n`;
});

Deno.writeTextFile('./environ.yaml', content)
  .then(() => {
    console.log('The file is created successfully.');
  })
  .catch((err) => {
    console.log(err);
  })
