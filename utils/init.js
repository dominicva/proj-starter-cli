import { readFile } from 'fs/promises';

const filePath = new URL('./../package.json', import.meta.url);
const { description, version } = await readFile(filePath).then(json =>
  JSON.parse(json)
);

console.log('version', version);
