import chalk from 'chalk';

// hex codes from Dribbble's color palette!
const hexCodes = ['#9ba5a8', '#ff8833', '#00b6e3'];
export const [bgGrey, bgOrange, bgBlue] = hexCodes.map(code =>
  chalk.bgHex(code)
);
export const [grey, orange, blue] = hexCodes.map(code => chalk.hex(code));
export const whiteBold = chalk.white.bold;
export const { red, yellow, green, dim } = chalk;
