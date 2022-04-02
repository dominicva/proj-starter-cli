import meow from 'meow';
import chalk from 'chalk';

const hexCodes = ['#9ba5a8', '#ff8833', '#00b6e3'];
const [bgGrey, bgOrange, bgBlue] = hexCodes.map(code => chalk.bgHex(code));
const fontColor = chalk.white.bold;

const helpText = `
${bgGrey(`${fontColor(' Usage ')}`)}

proj <command> [options]


${bgOrange(`${fontColor(' Commands ')}`)}

help    Print help info


${bgBlue(`${fontColor(' Options ')}`)}

-v, --version    Print CLI version

`;

const cli = meow(helpText, {
  importMeta: import.meta,
});

export default cli;
