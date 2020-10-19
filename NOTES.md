

- [MODERN WEB ARCHITECTURE](#modern-web-architecture)
- [PREREQS](#prereqs)
- [UNIT TESTING](#unit-testing)
  - [WHY UNIT TEST](#why-unit-test)
  - [HOW TO UNIT TEST](#how-to-unit-test)
  - [TEST FILES](#test-files)
  - [CONCLUSION](#conclusion)
- [REACT](#react)
  - [WHAT IS REACT](#what-is-react)
  - [HOW THINGS ARE MADE WITH REACT](#how-things-are-made-with-react)
  - [COMPONENTS](#components)
  - [useState AND useEffect](#usestate-and-useeffect)

# MODERN WEB ARCHITECTURE

I'll mainly be talking about React and Node but...

I feel that this is an important topic to tackle first to get some context on how node and react apps talk to each other

So here in this diagram we can see a client, a web server, app server, database and static assets

Client is everything that runs in a web browser, this is where the react code will run.

Next is the app server and the web server, this is where a typical node project will live. A web server can be a Linux VPS(Virtual Private Server) running Nginx to serve the app server which is a node app running in a docker container. The specific technology used isn't important, for example you can replace node with a PHP app being served directly by Apache on a Linux VPS

The database usually runs on the web server itself and is there for data persistence.

Static assets include things like images, videos, sound files.

A modern popular tech stack like this can be a React app as the client, an Ubuntu VPS on DigitalOcean(a popular VPS provider) directly running a node backend through some script like pm2 or nodemon, and that node backend stores and accesses data on a postgres database running in the VPS

Also it's not neccesary that these are all just one ofs, you can have multiple app servers and multiple web servers depending on the project need.

Another part of the modern web include PAAS and IAAS apps, examples of these include the various AWS Services, Google Code, Firebase etc. They trivialize setting up your web app with the tradeoff being a higher price and/or less fine configuration controls. For example instead of creating your own backend app and maintaining your own database, you can just use Firebase which acts as your app server, web server, and database all in one but you are restricted to only using Firebase database (a NoSQL db) where you might want a SQL db like postgres. 

To use these AAS apps, usually is that you'd write out a front end and then you treat those AAS apps as your backend and database, so a react app could be storing data in a firestore database and that same app could be using something like AWS Elasticsearch to store its logs of a user's activity. 

This can be done with a custom backend, but the AAS apps give you the option to utilize their services instead of creating your own

Using either a homebrewed web app or using firebase (or other similar services) both have varying pros and cons. Whichever is best to use will depend on the situation

# PREREQS

First, some pre-requisites. They're not 100% required knowledge, so maybe they can be optional pre-requisites? If that makes sense, but here are some pre-requisite knowledge that could make it easier to follow along with the tutorial

One is familiarity with the command line, I don't expect expert level stuff but commands like 'cd' or atleast enough to run 'npm' commands or to get 'nvm' installed

Two, is to atleast get npm installed locally. Installing npm with the link will automagically install node too. npm is required to run the tasks, starting the app in development, building the apps, and installing other dependencies

three, atleast soem basic familiarity with JS or TS syntax. This can be learned along the way but this will make it easier to understand with atleast some basic syntax know-how

I have included some links to help supplement the pre-requisites

# UNIT TESTING

Now, we'll get started with unit testing. I'm not really an expert on this subject but I can explain the benefits of unit testing, how to unit test in general, how to use Jest and how to run the actual unit tests.

## WHY UNIT TEST

For why to unit test, I've linked a great article explaining the benefits of unit testing, as for my personal reasons. 

One, it makes refactoring or making changes to code a lot easier in the long run. 

One example is for open source software, open sourcing your software usually means revieiwing code changes and accepting pull requests. But as a fallible person we tend forget to test something or we forget to check that this one feature still works. If you have unit tests, you can run the tests before merging the PR, ensuring that nothing breaks.

The same thing can be said for refactoring code and adding features.

Two, it can sort of act as pseudo-documentation, if the tests are written descriptively enough

Check out index.test.ts, very bare test but at a glance at the description and the assertions I can tell that running myFunction wihtout any arguments will return the string 'Hello World'

Those are some reasons why to unit test

## HOW TO UNIT TEST

Unit testing is usually done with testing frameworks, the frameworks vary and I don't think there are any advantages to choosing one or the other, but for the sake of familiarity, I've chosen the Jest framework from Facebook. I've included a link to an article that explains the different ways to unit test with Jest. I won't go into too much detail with what to test and how to test as I think the former is a bit opinionated and the internet has an abundance of resources teaching how to make unit tests (like the excellent article I linked).

In summary the process of unit testing is;

One, set up the environment to use the testing framework. With Javascript, we use npm and we add scripts to package.json run the tests framework. To configure jest we can create a jest.confgi.js these are the properties jest uses to run the tests, so for example we make the root file the rootdirectory, the test file should match the regex, the test environment is node and if you detect and files ending ts or tsx transform the files using ts-jest

I included a link for the explanation for the possible configuration properties.

In a set up like this the tests are only run when we manually run npm run test. But if we wanted to be 

there are more advanced ways to run tests for example we could use github actions, or we could use a library that hooks into git's precommit making it so that the tests are run before commits and if the tests fail rollback the commit

that's step one

second and final step, write the unit tests for each “unit” of code. I'm still not 100% on what constitutes a “unit” of code but I did link to a discussion regarding the definiton of a “unit” of code. I'll be honest, it's really vague and I think it's more of a “if you know, you know” sort of deal. Again I won't go into too much detail as I think it's a bit nuanced discussion so you can judge for yourself.

there aren't solid rules of when and how to write unit tests but conventionally unit tests are written before or in parallel with writing the "unit" to test. But nothing's actually stopping you from writing the tests after writing your code

## TEST FILES

Okay so we've already set up jest, we can then start writing the tests, like for example here we've got index.test.ts which tests index.ts. In this file because it's being run by jest, we get access to jest variables and functions like `describe`, `it` and `expect`. There are more available but I think these are the most essential functions. Check out the article I linked on top to see more

describe and it are functions that take two arguments, a string and a function. The first argument is a description or name, and the second argument is a function to "run". Describe is usually used for grouping like tests and the it function is used for actually running the tests

expect is what we use to validate things. expect gives you access to validators that you can use to validate values you pass in. So in this example I am expecting the value of result to be 'Hello World' if not it will fail 

I included a link to a list of all possible validators using expect since this is what mainly tests the code.

## CONCLUSION

Once we've got the test framework set up and the unit tests written, we can start running the unit tests. When to run the actual tests depends on the situation. All of the projects I've worked on have unit tests always running before commit using different scripts and another project utilized github actions to have the tests run on github's servers themselves.

To run the unit tests in this folder, I created two commands, npm run test and npm run test:watch. the test command just runs the tests and the watch command just tells jest to continously watch the results of the unit tests. So I didn't need to run npm test each time I made changes to the file

# REACT

I admittedly don't have the most in-depth knowledge with it, but I'll try my best to explain what it is and how to get started with it.

I highly recommend doing some more self-studying and self-exploration as that will be better than just listening to me talk. I should have listed a few good resources in the READMEs

## WHAT IS REACT

In my own words, it's a front end library slash framework that helps you build out smart and dynamic web pages.

## HOW THINGS ARE MADE WITH REACT

React is made up of components. You can think of components as dynamic parts of a whole web page. 

Components are like lego blocks, you combine them to make bigger more complex components and you can split them up to as small as you can so that they could be easier to work with.

React Components are mostly writtein in .jsx or .tsx files. You can think of these files as a mix of XML/HTML and Javascript. They are not valid Javascript files though. 

Usually the files need to be passed through a pipeline first where it gets converted into valid javascript files and those files are what we actually send to the client's browser

## COMPONENTS

React Components can be made in two different ways, Class Components and Functional Components. 

I have written an App class component and an App function component that basically do the same thing but written differently

React Components in general when working with data usually use something called "state" which is just the state of the component. I can't define it myself but I'll link to an article which can explain what state is in React terms

Class components maintain their own internal state with an internal state property and internal setState method 

on the ohter hand Functional components use React hooks to manage their state.

Using either is fine (Functional and Class components can also be mixed in a single app) but I personally prefer functional components with hooks because they're the "newer" way to do things and it looks like most of the community (no source to back this up but from what I notice) prefers hooks too

Something to note is that hooks can't be used in Class components.

By default React is very barebones.

## useState AND useEffect

I'll just gloss over how useState and useEffect are usually used

