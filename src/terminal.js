import { filesystem } from "./filesystem.js";
import { tryMath } from "./math.js";

// ─── DOM Elements ─────────────────────────────────────────────
const output    = document.getElementById("output");
const userInput = document.getElementById("user-input");
const promptEl  = document.getElementById("prompt");

// ─── Always keep input focused ────────────────────────────────
document.addEventListener("click", () => userInput.focus());
userInput.focus();

// ─── Colors ───────────────────────────────────────────────────
const green   = (t) => `<span class="green">${t}</span>`;
const white   = (t) => `<span class="white">${t}</span>`;
const cyan    = (t) => `<span class="cyan">${t}</span>`;
const yellow  = (t) => `<span class="yellow">${t}</span>`;
const red     = (t) => `<span class="red">${t}</span>`;
const magenta = (t) => `<span class="magenta">${t}</span>`;

// ─── Scroll to bottom ─────────────────────────────────────────
function scrollBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

// ─── Print to output ──────────────────────────────────────────
function print(html) {
  output.innerHTML += html + "\n";
  scrollBottom();
}

// ─── Virtual Filesystem ───────────────────────────────────────
let currentPath = ["~"];

function getCurrentNode() {
  let node = filesystem["~"];
  for (let i = 1; i < currentPath.length; i++) {
    node = node.children[currentPath[i]];
  }
  return node;
}

function updatePrompt() {
  const path = currentPath.length === 1 ? "~" : currentPath.join("/");
  promptEl.innerHTML =
    `<span class="green">srijan@portfolio</span>:<span class="cyan">${path}</span>$ `;
}

// ─── ASCII Banner ─────────────────────────────────────────────
function printWelcomeBanner() {
  print(green("  ____            _     _              "));
  print(green(" / ___|   _ __   (_)   (_)  __ _  _ __ "));
  print(green(" \\___ \\  | '__|  | |   | | / _` || '_ \\"));
  print(green("  ___) | | |     | | _ | || (_| || | | |"));
  print(green(" |____/  |_|     |_|(_)|_| \\__,_||_| |_|"));
  print(green(""));
  print(green("─────────────────────────────────────────────────────────────"));
  print(white("  Welcome to Srijan's Interactive Portfolio Terminal!"));
  print(white("  Last login: " + new Date().toDateString() + " on ttys001"));
  print(green("─────────────────────────────────────────────────────────────"));
  print(yellow("  Type ") + green("help") + yellow(" to explore.   There are easter eggs hidden around. 🥚"));
  print("");
}

// ─── Commands ─────────────────────────────────────────────────
function runCommand(input) {
  const trimmed = input.trim();
  const [cmd, ...args] = trimmed.split(" ");

  switch (cmd) {

    case "help":
      print(green(`
Available Commands:
─────────────────────────────────────────
  ls              List files and folders
  cd &lt;dir&gt;        Enter a directory
  cd ..           Go back to parent directory
  cat &lt;file&gt;      Read a file
  pwd             Show current path
  clear           Clear the terminal
  whoami          Who are you?
  help            Show this help menu
  &lt;math expr&gt;     Evaluate math (e.g. 5 * 9, sqrt(144))

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
  │   ├── nlp_learning.txt
  │   ├── more_projects.txt
  │   └── ... (find the easter eggs 🥚)
  ├── achievements/
  │   └── list.txt
  ├── socials/
  │   └── links.txt
  ├── resume.pdf
  └── README.md
      `));
      break;

    case "pwd":
      print(white("/" + currentPath.join("/")));
      break;

    case "ls": {
      const node = getCurrentNode();
      if (!node.children) { print(red("Not a directory.")); break; }
      Object.entries(node.children).forEach(([name, val]) => {
        if (val.type === "dir") print(cyan(`drwxr-xr-x  ${name}/`));
        else print(white(`-rw-r--r--  ${name}`));
      });
      break;
    }

    case "cd": {
      const target = args[0];
      if (!target || target === "~") {
        currentPath = ["~"];
        updatePrompt();
        break;
      }
      if (target === "..") {
        if (currentPath.length > 1) currentPath.pop();
        updatePrompt();
        break;
      }
      const node = getCurrentNode();
      if (node.children && node.children[target]) {
        if (node.children[target].type === "dir") {
          currentPath.push(target);
          updatePrompt();
        } else {
          print(red(`${target}: Not a directory`));
        }
      } else {
        print(red(`cd: ${target}: No such directory`));
      }
      break;
    }

    case "cat": {
      const file = args[0];
      if (!file) { print(red("Usage: cat &lt;filename&gt;")); break; }
      const node = getCurrentNode();
      if (node.children && node.children[file]) {
        const f = node.children[file];
        if (f.type === "file") {
          print(f.easter ? yellow(f.content) : white(f.content));
        } else {
          print(red(`${file}: Is a directory`));
        }
      } else {
        print(red(`cat: ${file}: No such file`));
      }
      break;
    }

    case "clear":
      output.innerHTML = "";
      printWelcomeBanner();
      break;

    case "":
      break;

    default:
      return false;
  }
  return true;
}

// ─── Easter Eggs ──────────────────────────────────────────────
function checkEasterEgg(input) {
  const cmd = input.trim().toLowerCase();

  if (cmd.startsWith("sudo")) {
    print(red("Permission denied: Nice try.\nYou are not in the sudoers file.\nThis incident has been reported to Srijan. 👀"));
    return true;
  }
  if (cmd === "vim" || cmd === "vi") {
    print(yellow("Opening vim...\n\n  Welcome. You are now trapped forever.\n  Thousands of developers have entered.\n  None have exited.\n\n") + green("  -- INSERT MODE --") + yellow("\n\n  (Type :q! ... just kidding, that won't work here 😄)"));
    return true;
  }
  if (cmd === "exit" || cmd === "quit") {
    print(magenta('"You can check out any time you like, but you can never leave." 🎸\n\nClose the tab if you really want to escape.'));
    return true;
  }
  if (cmd === "rm -rf /" || cmd === "rm -rf *") {
    print(red("Deleting everything...\n████████████████████ 100%\n\nJust kidding 😄 Nice try though."));
    return true;
  }
  if (cmd === "hack") {
    print(green("Initializing hack sequence...\nAccessing mainframe...\nDecrypting passwords...\nContacting FBI...\n\nLol, this is just a portfolio. 😄"));
    return true;
  }
  if (cmd === "hello" || cmd === "hi") {
    print(cyan("Hey there! 👋 Welcome to my little corner of the terminal.\nType 'help' to get started!"));
    return true;
  }
  if (cmd === "whoami") {
    print(green("You are a curious developer with great taste in portfolios.\nSrijan approves of you. 🫡"));
    return true;
  }
  if (cmd === "uname -a") {
    print(white("SrijanOS 2.7.0-portfolio #1 SMP PREEMPT Deoghar, Jharkhand, India"));
    return true;
  }
  if (cmd === "date") {
    print(white(new Date().toString()));
    return true;
  }
  if (cmd === "uptime") {
    print(white("Srijan has been coding for: too long. Fueled by chai and curiosity. ☕"));
    return true;
  }
  if (cmd === "git log") {
    print(yellow("commit a1b2c3d (HEAD -> main)\nAuthor: Srijan &lt;srijankumar770@gmail.com&gt;\nDate:   Right now\n\n    feat: added more coffee to the codebase ☕\n\ncommit d4e5f6a\n    fix: removed bugs (promoted them to features)\n\ncommit 7g8h9i0\n    init: started this portfolio at 2am"));
    return true;
  }
  if (cmd === "ls -la" || cmd === "ls -l") {
    print(cyan("Psst... just use 'ls'. This is a portfolio, not production. 😄"));
    return true;
  }
  return false;
}

// ─── Input Handler ────────────────────────────────────────────
const commandHistory = [];
let historyIndex = -1;

userInput.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    const input = userInput.value;
    const path = currentPath.length === 1 ? "~" : currentPath.join("/");

    // Print typed command with prompt
    print(
      `<span class="green">srijan@portfolio</span>:<span class="cyan">${path}</span>$ ` +
      `<span class="white">${input}</span>`
    );

    if (input.trim()) {
      commandHistory.unshift(input.trim());
      historyIndex = -1;
    }

    // Run command pipeline
    const handled = runCommand(input);
    if (!handled) {
      const eggHandled = checkEasterEgg(input);
      if (!eggHandled) {
        const math = tryMath(input);
        if (math) {
          print(cyan(`= ${math}`));
        } else if (input.trim()) {
          print(
            red(`command not found: ${input.trim().split(" ")[0]}`) +
            yellow("  (type 'help' to see available commands)")
          );
        }
      }
    }

    userInput.value = "";
    scrollBottom();

  // Arrow Up — history
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      userInput.value = commandHistory[historyIndex];
    }

  // Arrow Down — history
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      userInput.value = commandHistory[historyIndex];
    } else {
      historyIndex = -1;
      userInput.value = "";
    }
  }
});

// ─── Init ─────────────────────────────────────────────────────
printWelcomeBanner();
scrollBottom();
