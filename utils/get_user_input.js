import enquirer from 'enquirer';
import { handleUnhandled } from './error.js';
const { prompt } = enquirer;

const getUserInput = async () => {
  try {
    return await prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Project name?',
        required: true,
        validate(value) {
          return value ? true : 'Please input a project name';
        },
      },
    ]);
  } catch (error) {
    handleUnhandled('ERROR GETTING USER INPUT', error, true, true);
  }
};

export default getUserInput;
