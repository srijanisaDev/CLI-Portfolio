#!/usr/bin/env node

import readline from "readline";
import chalk from "chalk";
import { getWelcomeBanner } from "./ascii.js";
import { runCommand, getPrompt } from "./commands.js";
import { checkEasterEgg } from "./easter-eggs.js";
import { tryMath } from "./math.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

console.log(getWelcomeBanner());

function prompt() {
  rl.question(getPrompt(), (input) => {

    // 1. Try built-in commands
    const result = runCommand(input);

    if (result === "__CLEAR__") {
      console.clear();
      console.log(getWelcomeBanner());
    } else if (result !== null) {
      if (result) console.log(result);
    } else {
      // 2. Try easter eggs
      const egg = checkEasterEgg(input);
      if (egg) {
        console.log(egg);
      } else {
        // 3. Try math
        const math = tryMath(input);
        if (math) {
          console.log(math);
        } else {
          console.log(
            chalk.red(`command not found: ${input.trim().split(" ")[0]}`) +
            chalk.yellow("  (type 'help' to see available commands)")
          );
        }
      }
    }

    prompt();
  });
}

prompt();
