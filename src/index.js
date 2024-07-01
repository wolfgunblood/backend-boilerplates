#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import createDirectoryContents from "./createDirectoryContents.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CURR_DIR = process.cwd();

const backendChoices = [
  {
    name: "CRUD APP",
    value: "crud",
  },
];
const frameworkChoices = [{ name: "Express", value: "express" }];

// const ormChoices = [
//   { name: 'Drizzle', value: 'drizzle' },
//   { name: 'Prisma', value: 'prisma' }
// ];

const databaseChoices = [{ name: "Mongo", value: "mongo" }];

const questions = [
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: (input) =>
      /^([A-Za-z\-\\_\d])+$/.test(input)
        ? true
        : "Project name may only include letters, numbers, underscores, and hashes.",
  },
  {
    name: "backend",
    type: "list",
    message: "Choose your app type:",
    choices: backendChoices,
  },
  {
    name: "framework",
    type: "list",
    message: "Choose your framework:",
    choices: frameworkChoices,
  },
  {
    name: "database",
    type: "list",
    message: "Choose your ORM:",
    choices: databaseChoices,
  },
];

async function main() {
  try {
    const answers = await inquirer.prompt(questions);
    const { backend,framework,database, "project-name": projectName } = answers;
    const templateName = `${backend}-${framework}-${database}`;
    const templatePath = join(__dirname, "./templates", templateName);

    // Create project directory based on the selected template
    fs.mkdirSync(join(CURR_DIR, projectName), { recursive: true });

    // Copy the contents from the template directory to the new project directory
    await createDirectoryContents(templatePath, join(CURR_DIR, projectName));

    const projectPath = path.resolve(projectName);
    console.log(
      chalk.green("Scaffolding project in ") + chalk.blue(`${projectPath}...`)
    );
    console.log(chalk.green("Done. Now run:\n"));
    console.log(chalk.yellow(`  cd ${projectName}`));

    console.log(chalk.yellow("  copy .env.exapmle to .env and update .env"));
    console.log(chalk.yellow("  npm install"));
    console.log(chalk.yellow("  npm run dev"));
  } catch (error) {
    console.error(
      chalk.red("Error occurred during project scaffolding:"),
      error
    );
  }
}

main();
