import chalk from "chalk";

export function checkEasterEgg(input) {
  const cmd = input.trim().toLowerCase();

  if (cmd.startsWith("sudo")) {
    return chalk.red(
      "Permission denied: Nice try.\nYou are not in the sudoers file.\nThis incident has been reported to Srijan. 👀"
    );
  }

  if (cmd === "vim" || cmd === "vi") {
    return chalk.yellow(
      `Opening vim...\n\n  Welcome. You are now trapped forever.\n  Thousands of developers have entered.\n  None have exited.\n\n  ${chalk.green("-- INSERT MODE --")}\n\n  (Type :q! ... just kidding, that won't work here 😄)`
    );
  }

  if (cmd === "exit" || cmd === "quit") {
    return chalk.magenta(
      `"You can check out any time you like, but you can never leave." 🎸\n\nRefresh the page if you really want to escape this portfolio.`
    );
  }

  if (cmd === "rm -rf /" || cmd === "rm -rf *") {
    return chalk.red(
      "Deleting everything...\n████████████████████ 100%\n\nJust kidding 😄 Nice try though.\nI see you're a person of culture."
    );
  }

  if (cmd === "hack") {
    return chalk.green(
      "Initializing hack sequence...\nAccessing mainframe...\nDecrypting passwords...\nContacting FBI...\n\nLol, this is just a portfolio. 😄"
    );
  }

  if (cmd === "hello" || cmd === "hi") {
    return chalk.cyan(
      "Hey there! 👋 Welcome to my little corner of the terminal.\nType 'help' to get started!"
    );
  }

  if (cmd === "whoami") {
    return chalk.green(
      "You are a curious developer with great taste in portfolios.\nSrijan approves of you. 🫡"
    );
  }

  if (cmd === "uname -a") {
    return chalk.white(
      "SrijanOS 2.7.0-portfolio #1 SMP PREEMPT Deoghar, Jharkhand, India"
    );
  }

  if (cmd === "date") {
    return chalk.white(new Date().toString());
  }

  if (cmd === "uptime") {
    return chalk.white(
      "Srijan has been coding for: too long. Fueled by chai and curiosity. ☕"
    );
  }

  if (cmd === "git log") {
    return chalk.yellow(
      `commit a1b2c3d (HEAD -> main)\nAuthor: Srijan <srijankumar770@gmail.com>\nDate:   Right now\n\n    feat: added more coffee to the codebase ☕\n\ncommit d4e5f6a\n    fix: removed bugs (promoted them to features)\n\ncommit 7g8h9i0\n    init: started this portfolio at 2am`
    );
  }

  if (cmd === "ls -la" || cmd === "ls -l") {
    return chalk.cyan(
      "Psst... just use 'ls'. This is a portfolio, not production. 😄"
    );
  }

  return null;
}
