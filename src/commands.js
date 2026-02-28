import chalk from "chalk";
import { filesystem } from "./filesystem.js";

let currentPath = ["~"];

export function getPrompt() {
  const path = currentPath.length === 1 ? "~" : currentPath.join("/");
  return `${chalk.green("srijan@portfolio")}:${chalk.cyan(path)}${chalk.white("$ ")}`;
}

function getCurrentNode() {
  let node = filesystem["~"];
  for (let i = 1; i < currentPath.length; i++) {
    node = node.children[currentPath[i]];
  }
  return node;
}

export function runCommand(input) {
  const trimmed = input.trim();
  const [cmd, ...args] = trimmed.split(" ");

  switch (cmd) {

    case "help":
      return chalk.green(`
Available Commands:
─────────────────────────────────────────
  ls              List files and folders
  cd <dir>        Enter a directory
  cd ..           Go back to parent directory
  cat <file>      Read a file
  pwd             Show current path
  clear           Clear the terminal
  whoami          Who are you?
  help            Show this help menu
  <math expr>     Evaluate math (e.g. 5 * 9, sqrt(144))

Virtual Filesystem:
─────────────────────────────────────────
  ~/
  ├── about/
  │   ├── bio.txt
  │   ├── education.txt
  │   ├── skills.txt
  │   └── contact.txt
  ├── projects/
  │   ├── cyberpeace_bot.txt
  │   ├── fraud_detection.txt
  │   ├── more_projects.txt
  │   └── ... (find the easter eggs 🥚)
  ├── achievements/
  │   └── list.txt
  ├── socials/
  │   └── links.txt
  ├── resume.pdf
  └── README.md
      `);

    case "pwd":
      return chalk.white("/" + currentPath.join("/"));

    case "ls": {
      const node = getCurrentNode();
      if (!node.children) return chalk.red("Not a directory.");
      const output = Object.entries(node.children).map(([name, val]) => {
        if (val.type === "dir") return chalk.cyan(`drwxr-xr-x  ${name}/`);
        return chalk.white(`-rw-r--r--  ${name}`);
      });
      return output.join("\n");
    }

    case "cd": {
      const target = args[0];
      if (!target || target === "~") {
        currentPath = ["~"];
        return chalk.green("Moved to home directory.");
      }
      if (target === "..") {
        if (currentPath.length > 1) currentPath.pop();
        return "";
      }
      const node = getCurrentNode();
      if (node.children && node.children[target]) {
        if (node.children[target].type === "dir") {
          currentPath.push(target);
          return chalk.green(`Entered ${target}/`);
        } else {
          return chalk.red(`${target}: Not a directory`);
        }
      }
      return chalk.red(`cd: ${target}: No such directory`);
    }

    case "cat": {
      const file = args[0];
      if (!file) return chalk.red("Usage: cat <filename>");
      const node = getCurrentNode();
      if (node.children && node.children[file]) {
        const f = node.children[file];
        if (f.type === "file") {
          if (f.easter) return chalk.yellow(f.content);
          return chalk.white(f.content);
        }
        return chalk.red(`${file}: Is a directory`);
      }
      return chalk.red(`cat: ${file}: No such file`);
    }

    case "clear":
      return "__CLEAR__";

    case "":
      return "";

    default:
      return null;
  }
}
