#!/usr/bin/env node

const chalk = require('chalk')
const boxen = require('boxen')

// Options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk
const data = {
  name: chalk.white('Abin Abbas /'),
  handle: chalk.cyan('abinabbas'),
  work: chalk.white('Head Geek at Datameris'),
  github: chalk.cyan('github.com/abinabbas'),
  linkedin: chalk.cyan('linkedin.com/in/abinabbas'),
  web: chalk.cyan('abinabbas.com'),
  npx: chalk.cyan('npx abinabbas'),
  labelWork: chalk.white.bold('      Work:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:'),
}

// Creating String
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all together into a single variable to boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))