import { exec as execSync } from 'child_process';
import { chdir } from 'process';
import util from 'util';
import ora from 'ora';

const exec = util.promisify(execSync);

const spinner = ora({ text: '' });

const projectName = 'proj-start-cli';

const commands = [
  'git init',
  'npm init -y',
  'npm i -D prettier',
  `echo "# ${projectName}" >> readme.md`,
  'git add .',
  'git commit -m "Chore: first commit"',
  'git branch -M main',
];

async function execute(dir) {
  spinner.start(`DEPENDENCIES INSTALLING...\n\nIt may take a moment...`);

  chdir(dir);

  try {
    for (const command of commands) {
      await exec(command);
    }
    spinner.succeed('DEPENDENCIES installed!');
  } catch (error) {
    console.error(error);
    spinner.stop();
  }
}

export default execute;
