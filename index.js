#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const terminalImage = require("terminal-image");

(async () => {

  // Options for boxen
  const options = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    backgroundColor: "blue"
  };

  // Text + chalk
  const user = {
    name: chalk.white("Abin Abbas /"),
    handle: chalk.cyan("abinabbas"),
    work: chalk.white("Head Geek at Datameris"),
    github: chalk.cyan("github.com/abinabbas"),
    linkedin: chalk.cyan("linkedin.com/in/abinabbas"),
    mail: chalk.white("abinabbas@datameris.com"),
    phone: chalk.white("+91-9946-986806"),
    web: chalk.cyan("abinabbas.com"),
    labelWork: chalk.white.bold("      Work:"),
    labelGitHub: chalk.white.bold("    GitHub:"),
    labelLinkedIn: chalk.white.bold("  LinkedIn:"),
    labelMail: chalk.white.bold("     Email:"),
    labelPhone: chalk.white.bold("     Phone:"),
    labelWeb: chalk.white.bold("       Web:")
  };

  //Creating Output
  const output = `
  ${user.name} ${user.handle}

  ${user.labelWork}  ${user.work}
  ${user.labelGitHub}  ${user.github}
  ${user.labelLinkedIn}  ${user.linkedin}
  ${user.labelMail}  ${user.mail}
  ${user.labelPhone}  ${user.phone}

  ${user.labelWeb}  ${user.web}
  `;

  console.log('\n');
  console.log(await terminalImage.file("./assets/dp/abinabbas.jpg"));
  console.log(chalk.grey(boxen(output, options)));
})();
