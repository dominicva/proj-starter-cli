#!/usr/bin/env node

import init from './utils/init.js';
import cli from './utils/cli.js';

const { input, showHelp } = cli;

(() => {
  init({ clear: true });

  input.includes('help') && showHelp(0);
})();
