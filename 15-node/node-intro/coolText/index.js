const readline = require('readline');
const figlet = require('figlet');
const chalk = require('chalk');

// It really is this much trouble
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string for coolification: ', function (response) {
  console.log(
    chalk.red(
      figlet.textSync(response, {
        font: 'slant',
        verticalLayout: 'default',
        horizontalLayout: 'default'
      })
    )
  );
  rl.close();
});
