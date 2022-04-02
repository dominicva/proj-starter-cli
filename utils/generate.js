import { join } from 'path';
import { constants } from 'fs';
import { mkdir, copyFile, readdir } from 'fs/promises';
import { cwd } from 'process';
import { to } from 'await-to-js';
import getUserInput from './get_user_input.js';
import { handleError } from './error.js';
import execute from './exec.js';
import { green as g, dim as d } from './colors.js';

const { log } = console;

const generate = async () => {
  const { name: outDir } = await getUserInput();

  // determine correct file and dir paths to insert project
  const outDirPath = join(cwd(), outDir);
  log(d(`\nCreating project directory ${g(`${outDir}`)}\n`));
  await mkdir(outDirPath);

  const inDirPath = new URL('template', join(import.meta.url, '..')).pathname;
  const [err, files] = await to(readdir(inDirPath));

  err && handleError('READDIR FAILED', err);

  log(d(`\nCreating files in ${g(`./${outDir}`)} directory\n`));

  for (const file of files) {
    const srcPath = join(inDirPath, file);
    const destPath = join(outDirPath, file);
    const [err] = await to(
      copyFile(srcPath, destPath, constants.COPYFILE_EXCL)
    );
    err && handleError('COPYING FILES FAILED', err);
    log(`${g('CREATED')} ${file}`);
  }

  log();

  await execute(outDirPath);
};

export default generate;
