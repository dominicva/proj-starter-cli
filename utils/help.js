import {
  bgBlue,
  bgGrey,
  bgOrange,
  whiteBold,
  grey,
  orange,
  blue,
} from './colors.js';

const helpText = `
${bgGrey(`${whiteBold(' Usage ')}`)}

${grey('proj')} ${orange('<command>')} ${blue('[options]')}


${bgOrange(`${whiteBold(' Commands ')}`)}

${orange('help')}    Print help info


${bgBlue(`${whiteBold(' Options ')}`)}

${blue('-v, --version')}    Print CLI version
${blue('-c, --clear')}    Clear the console

`;

export default helpText;
