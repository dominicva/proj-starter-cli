import {
  bgBlue,
  bgGrey,
  bgOrange,
  whiteBold,
  grey,
  orange,
  blue,
  dim,
} from './colors.js';

const helpText = `
${bgGrey(`${whiteBold(' Usage ')}`)}

${grey('proj')} ${orange('<command>')} ${blue('[options]')}


${bgOrange(`${whiteBold(' Commands ')}`)}

${orange('help')}    Print help info


${bgBlue(`${whiteBold(' Options ')}`)}

${blue('-v, --version')}    Print CLI version ${dim('(default: false)')}
${blue('-c, --clear')}      Clear the console ${dim('(default: true)')}
${blue('--no-clear')}       Don't clear the console

`;

export default helpText;
