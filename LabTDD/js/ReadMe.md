# Environment prerequisites:

 - **NodeJs**  https://nodejs.org/en/
 - **Git** https://git-scm.com/downloads
 - Your favorite text editor.  Hint: Visual Studio Code

# Setup environment 

 1. Clone repository on your machine:
        ```
        git clone https://github.com/MagdalenaAnghel/LabFMS.git
        ```

2. cd to LabFMS/LabTDD/js

3. Install required dependencies:
        ```
        npm install
        ```

4. Run the tests in watch mode:
        ```
        npm run test:watch
        ```

# The Task

You should implement the "Fizz buzz" rules into the method "fizzbuz" using the TDD aproach. The environment for this should already be set up and tests are already written but commented except for the first test. The recomanded path is as follows: 

0. the first test is now failing
1. write the simplest implementation for the method to make the first test to pass
2. uncomment the next test and try write implementation that will make all the tests to pass
3. repeat step 2, until all the tests are passing. 
4. at some point during the exercise, when tests (the uncommented ones until this point) are passing, consider making a refactoring. (e.g. extract some methods, use recursion instead of loop, other) 

# Link utils

- Rules for Fizz buzz described here: https://en.wikipedia.org/wiki/Fizz_buzz
- Javascript language basics:
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
    - https://www.youtube.com/watch?v=PkZNo7MFNFg
- Jest
    - https://jestjs.io/ro/
    - https://www.youtube.com/watch?v=qRj5FNrNymc




