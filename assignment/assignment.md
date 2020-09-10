[Return to Readme](../readme.md)

# Geralds Contracting Part II

This is the second assignment in a series of four assignments leading into your final.

## Table of Contents

[Getting Started](#getting-started)

[Scenario](./scenario.md)

[Program Requirements](./program.md)

[Submission](#submission)

[Grading Your Application](#grading-your-application)

# Getting Started

  * Create a FORK of this repository. You will find the "FORK" button in the top right hand of any accessible repository. You want to FORK this repository to your github account.

     > If you would like a crash course on FORKING, here is a simple video (2m 29s): [Forking a GitHub Repository](https://www.youtube.com/watch?v=f5grYMXbAV0)

  * Create a CLONE of the FORKED repository on your local machine.

    > Take care not to clone inside another project folder!

  * Create a BRANCH called `development`.

  * CHECKOUT the `development` branch. This will be your working branch to commit and push for this assignment.

  * Install the npm dependencies

  * Run the application before changing anything to ensure your program runs.

# Running the Application  

To build the application
```
tsc
```

To run the application using node
```
node dist/index.js calc-wood-needed --width 8 --length 8
```

To build & run the application using npm
```
npm start -- calc-wood-needed --width 8 --length 8
```

# Working

  * While you're working on your assignment, make a commit for every problem you solve. This will help you identify where your application may have broken.

  * Ensure your commit messages are informative

# Submission

  * To submit your assignment, push your `development` branch to GITHUB and then create a pull request into the `master` branch using GITHUB.

    > You may push your code to the `development` branch as many times as you like. This is good practice to do this at least once a day if you have any changes.

  * Accept and merge your pull request into the `master` branch.

  * Make sure you "Hand In" your assignment on Teams. There is no file you need to send me, just mark it as handed in so I know you're ready for me to look at it.

# Grading Your Application

Read the [Marking Criteria](./marking-criteria.md) document to understand how these points will affect your assignment score.

In testing your work, I will be running these commands:

```
git clone git@github.com:[your github username]/focuscollege-acsd2020-assignment2.git [your name]
```
This clones your repo. The extra parameter at the end changes the folder name it creates from the default `focuscollege-acsd2020-assignment2` to `[your name]`.

```
cd [your name]

git checkout master
```
I will be checking out the master branch and reviewing your completed application there.

```
tsc

npm start -- calc-wood-needed --width 8 --length 8
npm start -- calc-wood-needed --width 18 --length 8
npm start -- calc-wood-needed --width 16 --length 24
npm start -- calc-wood-needed --width 49 --length 22
```

## MAJOR Criteria

  - [ ] Did you isolate your logic for calculating the boards and beams into a module
  - [ ] Did the readme.md file make it easy to use your application
  - [ ] Did you follow the git instructions in the Getting Started and Submission sections of this page
  - [ ] Did you use the input parameters
  - [ ] Is your application organized into functions
  - [ ] Did each function do one job
  - [ ] Was repetitive code moved into a function
  - [ ] Were variables declared properly
  - [ ] Did the application return the correct number of boards and beams

## MINOR Criteria

  - [ ] Did you add comments to your code
  - [ ] Was your code neat and easily readable
  - [ ] Do your commit messages explain the changes accurately and informatively
  - [ ] Did you make commits at approriate intervals?