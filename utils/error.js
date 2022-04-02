import sym from 'log-symbols';
import chalk from 'chalk';

const { red, yellow } = chalk;
const { log } = console;

/**
 * This is almost literally a copy/paste combination from Ahman Awais'
 * cli-handle-unhandled https://www.npmjs.com/package/cli-handle-unhandled
 * and cli-handle-error https://www.npmjs.com/package/cli-handle-error
 * pkgs. I've coverted to es modules, and not much else!
 * It was a great learning opportunity for me – I actually
 * just completed Ahmad's amazing node cli course https://nodecli.com/
 *
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @param {Boolean} exit
 */
export const handleError = (
  heading = `ERROR: `,
  err,
  displayError = true,
  exit = true
) => {
  if (err) {
    log();
    if (displayError) {
      log(`${sym.error} ${red(heading)}`);
      log(`${sym.error} ${red(`ERROR →`)} ${err.name}`);
      log(`${sym.info} ${red(`REASON →`)} ${err.message}`);
      log(`${sym.info} ${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`);
    } else {
      log(`${sym.warning}  ${yellow(heading)}\n`);
    }
    if (exit) {
      process.exit(0);
    } else {
      return false;
    }
  }
};

export const handleUnhandled = ({ show = true } = {}) => {
  process.on('unhandledRejection', err => {
    handleError(`UNHANDLED ERROR`, err, show);
  });
};
