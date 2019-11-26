"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

const url = {
  twitter: "https://twitter.com/",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  web: "https://ryounus.dev/"
};

// Text + chalk definitions
const data = {
  heading: {
    value: `${chalk.white("Rahman Younus")} / ${chalk.white("rahman95")}`
  },
  work: {
    label: chalk.white.bold("Currently:"),
    value: chalk.white("Software Engineer at DAZN (@getndazn)")
  },
  twitter: {
    label: chalk.white.bold("Twitter:"),
    value: chalk.cyan(`${url.twitter}rahman_younus`)
  },
  github: {
    label: chalk.white.bold("GitHub:"),
    value: chalk.magenta(`${url.github}rahman95`)
  },
  linkedin: {
    label: chalk.white.bold("LinkedIn:"),
    value: chalk.blue(`${url.linkedin}rahman_younus`)
  },
  web: {
    label: chalk.white.bold("Web:"),
    value: chalk.green(url.web)
  },
  npx: {
    label: chalk.white.bold("Card:"),
    value: `${chalk.red("npx")} ${chalk.white("rahman95")}`
  }
};

const headingLine = `${data.heading.value}`;
const workLine = `${data.work.label} ${data.work.value}`;
const twitterLine = `${data.twitter.label} ${data.twitter.value}`;
const githubLine = `${data.github.label} ${data.github.value}`;
const linkedinLine = `${data.linkedin.label} ${data.linkedin.value}`;
const webLine = `${data.web.label} ${data.web.value}`;
const cardLine = `${data.npx.label} ${data.npx.value}`;
const newline = "\n";

const output =
  headingLine +
  newline +
  newline +
  workLine +
  newline +
  newline +
  twitterLine +
  newline +
  githubLine +
  newline +
  linkedinLine +
  newline +
  webLine +
  newline +
  newline +
  cardLine;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.yellow(boxen(output, options))
);
