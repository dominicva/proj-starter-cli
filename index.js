#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';

const { input, showHelp } = cli;

(() => {
  input.includes('help') && showHelp(0);

  init({ clear: false });
})();
