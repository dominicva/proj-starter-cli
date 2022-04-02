import { exec as execSync } from 'child_process';
import util from 'util';

const { log } = console;

const exec = util.promisify(execSync);

const projectName = 'proj-start-cli';

const commands = [
  'git init',
  'npm init -y',
  'npm i node-fetch',
  'npm i -D prettier',
  `echo "# ${projectName}" >> readme.md`,
  'echo "node_modules/\n/node_modules/\n**.DS_Store" >> .gitignore',
  `echo "{ \\"singleQuote\\": true }" >> .prettierrc`,
  'git add .',
  'git commit -m "Chore: first commit"',
  'git branch -M main',
];

async function exec() {
  for (const command of commands) {
    const { stdout, stderr } = await exec(command);
    log('stdout', stdout);
    log('stderr', stderr);
  }
}

export default exec;
