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

const cli = meow(helpText, {
  importMeta: import.meta,
  ...flags,
});

export default cli;
