# Unit testing

## Why unit test

### [Long article explaining why](https://dzone.com/articles/top-8-benefits-of-unit-testing)

### My Reasoning
1. Makes it easier to make changes in the long run
   - For example, using something like [RenovateBot](https://github.com/renovatebot/renovate) to automatically update dependencies
   - Accepting code changes from the open source community 
2. Documentation as a side effect

## How to unit test in TS

### [Great article explaining different ways to unit test with jest](http://zetcode.com/javascript/jest/)

1. Setup the project to use the testing framework ([I use jest](https://jestjs.io/))
2. Write tests to test each "unit" of code. [StackOverflow thread trying to describe a "unit"](https://stackoverflow.com/questions/1066572/what-should-a-unit-be-when-unit-testing)
3. There isn't any solid rules to unit testing, conventional wisdom does dictate that unit tests are written in parallel/before writing the actual code
4. TDD is a development paradigm where the programmer must write "failing" unit tests first before writing the actual unit of code.

## How to use Jest to test our Typescript code

### [Long article explaining how to set up jest](https://basarat.gitbook.io/typescript/intro-1/jest)

### Short summary

1. We install `jest` and set it up to work with the current stack (in this folder it is set up to work with Typescript)
   - installed using `npm i --D jest`
   - configure jest.config.js [(For a detailed explanation regarding jest configuration)](https://jestjs.io/docs/en/configuration.html)
   - This project also has typescript - which is another thing altogether.
2. Start writing the tests.
   - Usually these files end in `*.test.ts` or `*.test.js` or `*.test.tsx`
3. When to run the tests will vary depending on personal preference, team size, project size, organization rules etc.
  - I think it's smart to run the tests before we commit, by hooking it to the `pre-commit` hook. This will ensure that the unit tests pass before allowing the user to commit the code
  - It is also smart to run unit tests manually whenever something substantial is changed. To make sure the changes don't affect other parts of the code

## Running the tests

The tests here are run by entering the `npm test` command. This tells `npm` to run the `jest` command. This is set up in `package.json`

