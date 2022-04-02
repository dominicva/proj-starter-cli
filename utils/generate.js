import { join } from 'path';
import { constants } from 'fs';
import { mkdir, copyFile, readdir } from 'fs/promises';
import { cwd } from 'process';
import { to } from 'await-to-js';
import getUserInput from './get_user_input.js';
import { handleError } from './error.js';

const { log } = console;

const generate = async () => {
  const { name: outDir } = await getUserInput();

  // determine correct file and dir paths to insert project
  const outDirPath = join(cwd(), outDir);
  mkdir(outDirPath);

  const inDirPath = new URL('template', join(import.meta.url, '..')).pathname;
  const [err, files] = await to(readdir(inDirPath));

  err && handleError('READDIR FAILED', err);

  for (const file of files) {
    log(file);
    const srcPath = join(inDirPath, file);
    const destPath = join(outDirPath, file);
    const [err] = await copyFile(srcPath, destPath, constants.COPYFILE_EXCL);
    err && handleError('COPYING FILES FAILED', err);
  }
};

generate();

export default generate;
