import chalk from 'chalk';

const { dim } = chalk;
const { log } = console;

/*
A minor refactor of Ahmad Awais' cli-welcome pkg
https://www.npmjs.com/package/cli-welcome

Only real differences are:
1. conversion to es modules
2. object destructuring to handle options

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
  const bg = bold
    ? chalk.hex(bgColor).inverse.bold
    : chalk.hex(bgColor).inverse;
  const clr = bold ? chalk.hex(color).bold : chalk.hex(color);

  clear && console.clear();

  // Print welcome
  log();
  log(
    `${clr(`${bg(` ${title} `)}`)} v${version} ${dim(tagLine)}\n${dim(
      description
    )}`
  );
  log();
};

export default welcome;
