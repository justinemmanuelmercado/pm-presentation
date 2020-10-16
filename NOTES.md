

- [MODERN WEB Architecture](#modern-web-architecture)
- [UNIT TESTING](#unit-testing)
  - [WHY TO UNIT TEST](#why-to-unit-test)
  - [HOW TO UNIT TEST](#how-to-unit-test)
  - [USING JEST IN A TYPESCRIPT PROJECT](#using-jest-in-a-typescript-project)
- [REACT](#react)
  - [WHAT IS REACT](#what-is-react)
  - [HOW THINGS ARE MADE WITH REACT](#how-things-are-made-with-react)

# MODERN WEB Architecture
I feel that this is an important topic to tackle first to get some context on how node and react apps talk to each other

So here in this diagram we can see a client, a web server, app server, database and static assets

Client is everything that runs in a web browser, this is where the react code will run, it will always run in the context of the user's web browser

Next is the app server and the web server, this is where a typical node project will live. A web server can be a Linux VPS(Virtual Private Server) running Nginx to serve the app server which is a node app running in a docker container. The specific technology used isn't important, for example you can replace node with a PHP app being served directly by Apache on a Linux VPS

The database is self explanatory and it usually runs on the web server itself, and the static assets include things like images, videos, sound files.

A modern popular tech stack like this can be a React app as the client, an Ubuntu VPS on DigitalOcean(a popular VPS provider) directly running a node backend through some script like pm2 or nodemon, and that node backend stores and accesses data on a postgres database running in the VPS

Also it's not neccesary that these are all just one ofs, you can have multiple app servers and multiple web servers depending on the project need.

Another part of the modern web include PAAS and IAAS apps, examples of these include the various AWS Services, Google Code, Firebase etc. They trivialize setting up your web app with the tradeoff being a higher price and/or less fine configuration controls. For example instead of creating your own backend app and maintaining your own database, you can just use Firebase which acts as your app server, web server, and database all in one but you are restricted to only using Firebase database (a NoSQL db) where you might want a SQL db like postgres. 

Using either a homebrewed web app or using firebase (or other similar services) both have varying pros and cons. Whichever is best to use will depend on the situation

# UNIT TESTING

Hey, we’ll get started with unit testing. I’m not really an expert on this subject, I can explain though why I think unit testing is great, how to unit test in general, how to use Jest, the testing framework I currently use and how to run the actual unit tests.

## WHY TO UNIT TEST

For why to unit test, I’ve linked a great article explaining the benefits of unit testing, as for my personal reasons. 

One, it makes refactoring or making changes to code a lot easier in the long run. 

Examples for this include something like integrating RenovateBot with your project. What RenovateBot does is automatically submit pull requests (code changes) to update your dependencies whenever it detects updates to your dependencies. 

Another example is for open source software, open source software usually means working with code from other people and people don’t always think the same way, one could innocently be pushing a small change that inadvertently causes a bigger part of the project to fail. This can be caught with automated unit tests (we’ll get into this later)

Two, it can sort of act as pseudo-documentation, if the tests are written descriptively enough

## HOW TO UNIT TEST

Unit testing is usually done with testing frameworks, the frameworks vary and I don’t think there are any advantages to choosing one or the other, but for the sake of familiarity, I’ve chosen the Jest framework from Facebook. I’ve included a link to an article that explains the different ways to unit test with Jest. I won’t go into too much detail with what to test and how to test as I think the former is a bit opinionated and the internet has an abundance of resources teaching the latter (like the excellent article I linked).

In summary the process of unit testing is mostly;

One, set up the environment to use the testing framework. With Javascrip, we can set it up using npm and we use scripts to manually run the tests or to have it run automatically on different occasions (for example, github actions, or precommit hooks, more on running automated tests later)

Two, write the unit tests for each “unit” of code. I’m still not 100% on what constitutes a “unit” of code but I did link to a discussion regarding the definiton of a “unit” of code. I’ll be honest, it’s really vague and I think it’s more of a “if you know, you know” sort of deal. Again I won’t go into too much detail as I think it’s a bit nuanced discussion.

Three, there aren’t solid rules of when and how to write unit tests

and four, but there is a sort of programming paradigm called, TDD (test driven development) where failing unit tests are written first before writing the “unit” to test.

## USING JEST IN A TYPESCRIPT PROJECT

One, we install jest and to set it up to work with the current stack, we install it with npm, add the `test` script in package.json so we could test with jest by running ’npm test’ and we add a jest.config.js file, jest automatically looks into this file to check what the test parameters are, like which files to test, which folders to look into etc. I linked the documentation for jest configuration in the README

Two, we can then start writing the tests, like for example here we’ve got index.test.ts which tests index.ts. In this file because it’s being run by jest, typescript gets access to jest variables and functions like `describe`, `it` and `expect`. There are more available but I think these alongside `mock` are the most important functions. Check out the article I linked on top to see more

Three, once we’ve got the test framework set up and the unit tests written, we can start running the unit tests. When to run the actual tests depends on the situation. All of the projects I’ve worked on have unit tests always running before commit using something like `husky` and another project utilized github actions to have the tests run on github’s servers themselves. All this did was to run the unit tests before merging the branches and notified the users of the results.

To run the unit tests in this folder, I created two commands, npm run test and npm run test:watch. the Watch command just told jest to continously watch the results of the unit tests. So I didn’t need to run npm test each time I made changes to the file

# REACT

React is a vast topic and I admittedly don't have the most in-depth knowledge with it, but I'll try my best to explain what it is and how to get started with it.

I highly recommend doing some more self-studying and self-exploration as that will be better than just listening to me talk. I should have listed a few good resources in the READMEs

## WHAT IS REACT

In my own words, it's a front end library slash framework that helps you build out smart and dynamic web pages.

I'll mainly be focusing on React "the library for frontend web development" and not React Native which is a different thing altogether. React Native was built for mobile apps

## HOW THINGS ARE MADE WITH REACT

React is made up of components. You can think of components as dynamic parts of a whole web page. 

Components are like lego blocks, you combine them to make bigger more complex components and you can split them up to as small as you can so that they could be easier to work with.

React Components are mostly writtein in .jsx or .tsx files. You can think of these files as a mix of XML/HTML and Javascript. They are not valid Javascript files though. 

Usually the files need to be passed through a pipeline first where it gets converted into valid javascript files and those files are what we actually send to the client's browser

React Components can be made in two different ways, Class Components and Functional Components. 

I have written an App class component and an App function component that basically do the same thing but written differently

React Components in general when working with data usually use something called "state" which is just the state of the component. I can't define it myself but I'll link to an article which can explain what state is in React terms

Class components maintain their own internal state with an internal state property and internal setState method while Function components use React hooks to manage their state.

Using either is fine (Functional and Class components can also be mixed in a single app) but I personally prefer functional components with hooks because they're the "newer" way to do things and it looks like most of the community (no source to back this up but from what I notice) prefers hooks too

Something to note is that hooks can't be used in Class components.

