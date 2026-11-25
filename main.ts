// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT =
  "Approved. The last person who understands this will one day log off for good, and it will still be in production.";

// Gate self-check: single line, 1-140 characters, not only whitespace.
if (
  ENTRY_TEXT.includes("\n") ||
  ENTRY_TEXT.length < 1 ||
  ENTRY_TEXT.length > 140 ||
  ENTRY_TEXT.trim().length === 0
) {
  throw new Error("entry text fails the gate constraints");
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY_TEXT, "utf8");
console.log(ENTRY_TEXT);
