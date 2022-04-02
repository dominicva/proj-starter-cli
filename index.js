#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';
import generate from './utils/generate.js';

const {
  input,
  flags: { clear },
  showHelp,
} = cli;

(async () => {
  init({ clear });

  input.includes('help') && showHelp(0);

  await generate();
})();
