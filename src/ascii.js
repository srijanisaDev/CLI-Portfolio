import figlet from "figlet";
import chalk from "chalk";

export function getWelcomeBanner() {
  const banner = figlet.textSync("Srijan", {
    font: "Big",
    horizontalLayout: "default"
  });

  return `
${chalk.green(banner)}
${chalk.green("─────────────────────────────────────────────────────────────")}
${chalk.white("  Welcome to Srijan's Interactive Portfolio Terminal!")}
${chalk.white("  Last login: " + new Date().toDateString() + " on ttys001")}
${chalk.white("  Ubuntu 22.04.3 LTS | Node.js " + process.version)}
${chalk.green("─────────────────────────────────────────────────────────────")}
${chalk.yellow("  Type ")}${chalk.green("help")}${chalk.yellow(" to explore.   There are easter eggs hidden around.")} 🥚
`;
}
