# Presentation

## Modern Web Architecture

<img src='./WebArch.svg'></img>

## Prerequisites

* Basic familiarity with the command line
* npm and node installed. if not installed yet, look into insatlling NVM (node version manager) and use that to install npm and node
  * [installing nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
  * [using nvm to install npm (just install the latest version)](https://github.com/nvm-sh/nvm#usage)
* Familiarity with Javascript/Typescript
  * If absolutely zero knowledge - [Codecademy free course for JS](https://www.codecademy.com/learn/introduction-to-javascript)
  * [If familiar with JS but want to learn TS](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
  * [Useful ES6 features](https://medium.com/@rashmishehana_48965/must-know-es6-features-for-react-97ad57468623) (ES6 is bascially "modern" javascript syntax sugar. 100% compatible with Typescript, but not so compatible with old JS and sometimes not compatible with Node but we don't need to worry about that because most of the code will be compiled/transpiled/polyfilled from Typescript to valid JS anyway)
  * [Import and Export](https://javascript.info/import-export) - This is how we use 3rd party libraries and inject code from one file to another. This is also not compatible with Node but is compatbile with TS and our code will also be transpiled to valid JS in the end anyway 

## [Unit testing](/unit-test)

### Instructions to work with sample project

1. `cd` inside the [unit-test](/unit-test) directory
2. Run `npm install`
3. Run `npm run test` to run the unit tests
4. Run `npm run test:watch` to run the unit tests in "watch" mode

## [React Demo](/react-demo)

### Instructions to work with sample project

1. `cd` inside the [react-demo](/react-demo) directory
2. Run `npm install`
3. Run `npm start` to start the development server
4. Run `npm run build` to transpile the TS code to JS code (JS code will be saved in /react-demo/build folder)

## [Node Demo](/node-demo)
  
### Instructions to work with sample project

1. `cd` inside the [node-demo](/node-demo) directory
2. Run `npm install`
3. Run `npm start` to start the development server
4. Run `npm run build` to transpile the TS code to JS code (JS code will be saved in /node-demo/build folder)

## References

