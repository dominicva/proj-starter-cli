import meow from 'meow';

const helpText = `
Usage
  proj <command> [options]

Commands
  help    Print help info

Options
  -v, --version    Print CLI version
`;

const cli = meow(helpText, {
  importMeta: import.meta,
});

export default cli;
