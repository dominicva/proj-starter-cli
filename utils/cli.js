import meow from 'meow';
import chalk from 'chalk';

// hex codes from Dribbble's color palette!
const hexCodes = ['#9ba5a8', '#ff8833', '#00b6e3'];
const [bgGrey, bgOrange, bgBlue] = hexCodes.map(code => chalk.bgHex(code));
const [grey, orange, blue] = hexCodes.map(code => chalk.hex(code));
const whiteBold = chalk.white.bold;

const helpText = `
${bgGrey(`${whiteBold(' Usage ')}`)}

${grey('proj')} ${orange('<command>')} ${blue('[options]')}


${bgOrange(`${whiteBold(' Commands ')}`)}

${orange('help')}    Print help info


${bgBlue(`${whiteBold(' Options ')}`)}

${blue('-v, --version')}    Print CLI version

`;

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
