// The One-Line Laugh
// make.fun bounty entry: writes exactly one funny line of text.
//
// Usage:
//   node main.ts                 -> writes to /output/entry.txt
//   OUTPUT_PATH=/tmp/out node main.ts   -> writes to the given path
//
// We use only the Node standard library: no dependencies, no network.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "At the vet, my dog got a treat for sitting still; I got charged for the same trick.";

// OUTPUT_PATH lets you redirect the output anywhere for local testing,
// so you never need to write into /output just to run the program.
const out = process.env.OUTPUT_PATH
  ? resolve(process.env.OUTPUT_PATH)
  : "/output/entry.txt";

// The file must contain the line exactly, with no trailing newline. Writing
// the constant verbatim guarantees that, and mkdirSync with recursive: true
// lets the parent directory be created on the first run if it is absent.
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE, "utf8");

console.log(`wrote ${out}`);