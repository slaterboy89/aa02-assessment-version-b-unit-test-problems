# Sprint 2 Unit Test Problems

## Usage

1. Download and unzip the skeleton from the link
2. Rename the folder to `firstname-lastname-sprint-2-unit-test-problems`.
   For example, if your name is "Jane Doe", then name your folder `jane-doe-sprint-2-unit-test-problems`
3. `cd` into the folder and `npm install` to install dependencies
4. `npm test` to run all specs
5. Your objective is to implement the functions in `/problems` to pass all specs

## Running the specs for each problem

To run specs only for a single problem, you can add the file location of the
test file that corresponds to the problem that you want to test. For example,
if you want to test the `problem/03-average-cost.js` file only, you can run
`npm test test/03-average-cost-spec.js`.

Here are commands to run each test file separately:

```sh
npm test test/01-unique-keys-spec.js
npm test test/02-most-frequent-word-spec.js
npm test test/03-average-cost-spec.js
npm test test/04-catch-zs-spec.js
npm test test/05-push-creator-spec.js
```

## Submission

When you are ready to submit:

1. Re-run all unit tests and fix any syntax errors that are crashing the tests. If
the unit tests crash, or do not run, you will receive a zero for the coding
portion of the assessment
2. **Delete the `node_modules` directory**
3. Zip up your folder
4. Upload it
