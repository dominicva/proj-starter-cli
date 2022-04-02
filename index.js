#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';

const {
  input,
  flags: { clear },
  showHelp,
} = cli;

(() => {
  init({ clear });

  input.includes('help') && showHelp(0);
})();
