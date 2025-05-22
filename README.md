# Emoji Mood Interpreter

## Task

Implement the `interpretMood` function in `src/interpreter.js`.

- It receives an array of emojis representing moods.
- It returns the total mood score.
- It throws errors on invalid input or unknown emojis.

## Emoji scores

| Emoji | Score |
|-------|-------|
| 😀    | 2     |
| 😐    | 0     |
| 😞    | -2    |
| 😡    | -3    |
| 🤩    | 3     |
| 🫤    | -1    |

## How to test

1. Install dependencies:

```bash
npm install

```

2. To install Babel and its essential tools as development dependencies use the command:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env

```

3. To transpile all the files in the src directory using Babel and output the compiled/transpiled files to the lib directory use the command:

```bash
./node_modules/.bin/babel src --out-dir lib

```

4. To install a Babel preset that minifies your code during the build process use the command:

```bash
npm install babel-preset-minify --save-dev

```


