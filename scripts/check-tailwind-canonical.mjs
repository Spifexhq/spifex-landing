// Fails when a Tailwind class can be written with a canonical utility.
// These are the suggestions Tailwind IntelliSense reports as
// `suggestCanonicalClasses`. Keeping the check in `npm run lint` prevents
// arbitrary values from creeping back into the codebase.

import fs from "node:fs";
import path from "node:path";

const spacingPrefixes = [
  "h", "w", "min-h", "min-w", "max-h", "max-w",
  "p", "px", "py", "pt", "pb", "pl", "pr",
  "m", "mx", "my", "mt", "mb", "ml", "mr",
  "gap", "gap-x", "gap-y",
  "top", "bottom", "left", "right",
  "inset", "inset-x", "inset-y",
  "space-x", "space-y",
];

const rules = [
  {
    name: "CSS-variable arbitrary value",
    re: /\[var\((--[a-zA-Z0-9_-]+)\)\]/g,
    hint: "use the v4 shorthand: $1 in parentheses",
  },
  {
    name: "z-index arbitrary value",
    re: /\bz-\[(\d+)\]/g,
    hint: "use z-$1",
  },
  {
    name: "spacing arbitrary value",
    re: new RegExp(
      `\\b(${spacingPrefixes.join("|")})-\\[(\\d+(?:\\.\\d+)?)(px|rem)\\]`,
      "g",
    ),
    hint: "use the numeric spacing scale (px ÷ 4, or rem × 4)",
  },
  {
    name: "radius arbitrary value",
    re: /rounded-\[(1\.5rem|2rem|12px|16px|4px)\]/g,
    hint: "use rounded-3xl, rounded-4xl, rounded-xl, rounded-2xl or rounded",
  },
  {
    name: "opacity arbitrary value",
    re: /\b((?:bg|text|border|ring|fill|stroke)-[^\s"'`]*)\/\[(0?\.\d+)\]/g,
    hint: "use a percentage opacity suffix such as /6",
  },
  {
    name: "tracking arbitrary value",
    re: /tracking-\[0\.1em\]/g,
    hint: "use tracking-widest",
  },
];

const roots = ["src"];
const extensions = new Set([".ts", ".tsx"]);

function collectFiles(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(file, out);
    } else if (extensions.has(path.extname(entry.name))) {
      out.push(file);
    }
  }
}

let failures = 0;
const files = [];
for (const root of roots) collectFiles(root, files);

for (const file of files) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of rules) {
      rule.re.lastIndex = 0;
      const match = rule.re.exec(line);
      if (!match) continue;
      failures += 1;
      console.error(
        `${file}:${index + 1} [${rule.name}] ${match[0]} — ${rule.hint.replace("$1", match[1] ?? "")}`,
      );
    }
  });
}

if (failures > 0) {
  console.error(`\n${failures} non-canonical Tailwind class(es) found.`);
  process.exit(1);
}

console.log("Tailwind canonical class check passed.");
