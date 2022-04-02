import meow from 'meow';
import helpText from './help.js';

const flags = {
  clear: {
    type: 'boolean',
    alias: 'c',
    default: true,
  },
  version: {
    type: 'boolean',
    alias: 'v',
    default: false,
  },
};

const opts = {
  importMeta: import.meta,
  description: false,
  hardRejection: false,
  flags,
};

const cli = meow(helpText, opts);

export default cli;
