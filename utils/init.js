import { readFile } from 'fs/promises';
import welcome from './welcome.js';
import handleErrors from './error.js';

const filePath = new URL('./../package.json', import.meta.url);
const { description, version } = await readFile(filePath).then(json =>
  JSON.parse(json)
);

const init = ({ clear = true } = {}) => {
  handleErrors();

  welcome({
    title: 'proj-starter-cli',
    tagLine: 'by Dom',
    description,
    version,
    bgColor: '#fd5c63',
    color: '#ffffff',
    bold: true,
    clear,
  });
};

export default init;
