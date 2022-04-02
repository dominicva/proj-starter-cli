import chalk from 'chalk';

const { dim } = chalk;
const { log } = console;

/*
A minor refactor of Ahmad Awais' cli-welcome pkg
https://www.npmjs.com/package/cli-welcome

Only real differences are:
1. conversion to es modules
2. object destructuring to handle options
3. color config – used chalk.bgHex() to control the bg and font 
   color for the title. I had trouble achieving this with the original.

Thank you Ahmad!
*/
const welcome = ({
  title = 'ADD A HEADING',
  tagLine = '',
  description = '',
  bgColor = '#ffffff',
  color = '#000000',
  bold = true,
  clear = true,
  version = '',
} = {}) => {
  // Configure
  const bgClr = chalk.bgHex(bgColor);
  const titleClr = bold ? chalk.hex(color).bold : chalk.hex(color);

  clear && console.clear();

  // Print welcome
  log();
  log(
    `${`${bgClr(` ${titleClr(title)} `)}`} v${version} ${dim(tagLine)}\n${dim(
      description
    )}`
  );
  log();
};

export default welcome;
