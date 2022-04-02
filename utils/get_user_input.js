import enquirer from 'enquirer';
const { prompt } = enquirer;

const getUserInput = async () => {
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
};

export default getUserInput;
