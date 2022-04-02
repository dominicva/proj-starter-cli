#!/usr/bin/env node

import welcome from './utils/welcome.js';
import handleErrors from './utils/error.js';

(() => {
  handleErrors();

  welcome();
})();
