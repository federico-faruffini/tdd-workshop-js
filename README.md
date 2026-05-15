# TDD in JS - Workshop

This repository is used in a workshop for Master's Degree students of Computer Engineering at the University of Genoa, in their Software Engineering course.

The goal of the workshop is to teach Test-Driven Development (TDD) through hands-on experience using JavaScript as the programming language.

## Setup
You can follow the workshop both with a local install or a GitHub Codespace.

- Local install:
    - Install [Visual Studio Code](https://code.visualstudio.com/download)
    - Install [Node.js](https://nodejs.org/en/download)
    - Clone the repository
    - Open a terminal and run `npm install` in the root directory of the repo to install dependencies
- GitHub Codespace:
  - Click the "Code" button on the GitHub page of this repository and select "Open with Codespaces"
  - Wait for everything to load
  - Run `npm install` in the terminal

### Troubleshooting
If you have any trouble during the installation, try to follow these steps:

- Make sure you have Node.js version 14 or higher installed
- Reboot the PC if you are running the project locally
- Run `npm install` in the root directory
- If tests don't run, try `npx jest` to run Jest directly

## Running the tests

The unit test projects are already set up for each exercise. Here is a list of commands to run the tests. Open a terminal in the repository and run the commands below.

To run all tests at once:
```sh
npm test
```

To run only the tests from the exercise you are working on:
```sh
npm test -- --testPathPattern=01-word-counter
```

## Jest

For this workshop, we will use JavaScript with Jest as the testing framework.

Refer to the [JEST_CHEATSHEET](JEST_CHEATSHEET.md) section to learn more about Jest and the code conventions we will use.

## Exercises

There are three exercises in the repository. Their goals are to practice the TDD cycle: write a failing test, make it pass, then refactor.

### Ex. 1: Word Counter
Starting from an empty class, implement a word counter by writing tests first and then the code to make them pass.

**The goal:** To practice the TDD red-green-refactor cycle by building a feature from scratch, guided entirely by tests.

### Ex. 2: Bug Fix
A crafting system for a game has a known bug. Use TDD to write a failing test that exposes the bug, then fix the implementation to make the test pass.

**The goal:** To learn how TDD can be used to reproduce and fix bugs in a safe and controlled way.

### Ex. 3: Order Confirmation
An order confirmation service needs to send emails when orders are placed. Write tests first using mocks for the email dependency, then implement the service.

**The goal:** To practice TDD with dependencies, using mocks to isolate the unit under test and verify its behavior.

### Ex. 4: FizzBuzz
Implement the classic FizzBuzz kata using TDD. 

Given a number `n`, the function should return:
- `"FizzBuzz"` if `n` is divisible by both 3 and 5
- `"Fizz"` if `n` is divisible by 3
- `"Buzz"` if `n` is divisible by 5
- the number as a string otherwise (e.g. `"7"`)

Example of progression: `1, 2, Fizz, 4, Buzz, Fizz`

**The goal:** To practice the full TDD cycle on a small, well-defined problem — focusing on writing one test at a time and letting the tests drive the implementation incrementally.
