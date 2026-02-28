import { evaluate } from "mathjs";

export function tryMath(input) {
  if (!/^[\d\s\+\-\*\/\^\(\)\.sqrtsincostan%]+$/i.test(input.trim())) {
    return null;
  }
  try {
    const result = evaluate(input.trim());
    if (typeof result === "number" || typeof result === "object") {
      return `${result}`;
    }
  } catch {
    return null;
  }
  return null;
}
