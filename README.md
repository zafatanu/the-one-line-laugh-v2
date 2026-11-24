# The One-Line Laugh

A make.fun bounty entry. When run, this program writes exactly one funny line
of text to an output file.

At the vet, my dog got a treat for sitting still; I got charged for the same trick.

[![bounty](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zafatanu/the-one-line-laugh-v2/rank.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/zafatanu/the-one-line-laugh-v2/reward.svg)](https://make.fun/bounty/u-ronigrv-the-one-line-laugh-7ccca46f)

## Description

`main.ts` is a minimal Node 22 program with no dependencies and no network
access. It uses only the Node standard library to write the entry line, byte
for byte, to an output file.

## Run

```bash
node main.ts
```

This writes the line to `/output/entry.txt`, creating the directory if it is
missing. Any existing file is overwritten on every run.

To test locally without touching `/output`, set the `OUTPUT_PATH` environment
variable to any path:

```bash
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

The line is written without a trailing newline. It is exactly 83 bytes.