# Contributing to Poki 

- [Getting Started Quick](#getting-started-quick)
- [NPM Command Reference](#npm-command-reference)
  - [`npm install`](#npm-install)
  - [`npm test`](#npm-test)
  - [`npm run test:watch`](#npm-run-testwatch)
- [Repository](#repository)
    - [Structure](#structure)
    - [Branching and Tagging Policy](#branching-and-tagging-policy)
- [Preferred IDE](#preferred-ide)
- [Commit Guidelines](#commit-guidelines)
    - [Check for errors before committing](#check-for-errors-before-committing)
    - [Atomic commits](#atomic-commits)
    - [Clean commit message](#clean-commit-message)
    - [Writing tests](#writing-tests)


## Getting Started Quick 

In order to contribute to this project, you should:
1. Clone this repository / your fork of this repository using `git`
2. If not on `develop`, switch to the `develop` branch with `git checkout develop`
3. Run `npm install` in the project directory to install all the dependencies. 
4. Make sure everything is working by running `npm test`
5. Create a new feature branch from `develop` with `feature/your-feature-name`. 
6. Make the necessary changes in line with the objective(s) of the pull request. 
7. You can debug poki locally by running `node dist/cli.js`
8. Ensure that you have added unit and integration tests for any new features added / bugs fixed. 
9. Run `npm test`. If any tests fail, resolve the issue with the code, and re-try. 
10. Once the tests pass, commit and push. **Do not** alter the `version` in `package.json`. 
11. Create a pull request to `develop`. 

## NPM Command Reference 

### `npm install` 
Installs all `dependencies` listed in `package.json`. 

### `npm test`
The script associated with `npm test` will run all tests that ensures that your commit does not break anything in the
repository.

### `npm run test:watch`
Watch files for changes and rerun all tests when something changes. If you want to re-run only the tests that depend 
on the changed files. Use it for development purposes. 


## Repository

### Structure

Directory                    | Summary 
-----------------------------|------------------------
`src`                        | Contains all the code for the CLI and Library
`lib`                        | Contains all the game logic and models.
`__tests__`                  | Contains all the tests for that folder, you will find this folder under different sub folders in `src`.
`cli.tsx`                    | Logic for the CLI and handles all commands and flag calls. 
`components`                 | Containts all the Ink components to be rendered for the game. 

### Branching and Tagging Policy 
This repository uses standard `git-flow` branch management policy/strategy. If you want to learn more on `git-flow`,
refer  to [tutorial from Atlassian](https://www.atlassian.com/git/workflows#!workflow-gitflow) and more details at
[http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model).

> Deletion of `master` and `develop`.
> Rebasing on `master` is blocked.

## Preferred IDE
It is advised to use an IDE that provides [EditorConfig](http://editorconfig.org) support via `.editorconfig` files,
either natively, or through plugins. In addition, the `.gitignore` file has been populated with entries to support
ignoring metadata / manifest files for various IDEs.

## Commit Guidelines

The following best practices, coupled with a pinch of common-sense will keep the repository clean and usable in future.
The idea is that everything that goes into the repository is not for an individual, but someone else who will be
directly or indirectly affected by it.

### Check for errors before committing

Checking for errors should be done for each commit whether it is being pushed to remote or not.

First, you don't want to submit any whitespace errors. Git provides an easy way to check for this before you commit,
run `git diff --check`, which identifies possible whitespace errors and lists them for you. If you run that command
before committing, you can tell if you're about to commit whitespace issues that may annoy other developers.

Secondly, you should ensure that your commit does not break builds. Run `npm test` on the repository to execute all
sanity and smoke tests. If any test fail, do not change the test to pass your commit. The tests were there with a
purpose. Discuss within your team to ensure that the changes that you do to test specs are valid. If you are adding a
new feature, accompanying them with new tests are a good practice.

### Atomic commits

Try to make each commit a logically separate change set. If you can, try to make your changes digestible don't code
for a whole weekend on five different issues and then submit them all as one massive commit on Monday. Even if you don't
commit during the weekend, use the staging area on Monday to split your work into at least one commit per issue, with a
useful message per commit. If some of the changes modify the same file, try to use `git add --patch` to partially stage
files. The project snapshot at the tip of the branch is identical whether you do one commit or five, as long as all the
changes are added at some point, so try to make things easier on your fellow developers when they have to review your
changes. This approach also makes it easier to pull out or revert one of the change sets if you need to later. There are
a number of useful Git tricks for rewriting history and interactively staging files use these tools to help craft a
clean and understandable history.

### Clean commit message

*More detailed explanation include your motivation for the change and contrast its implementation with previous
behavior this is a good guideline to follow.*

Getting in the habit of creating quality commit messages makes using and collaborating with Git a lot easier. As a
general rule, your messages should start with a single line that is no more than 50 characters and that describes
the change set concisely, followed by a blank line, followed by a more detailed explanation.

It's also a good idea to use the imperative present tense in these messages. In other words, use commands. Instead of
"I added tests for" or "Adding tests for," use "Add tests for."

You should see if your commit message answers the following questions:
Answer the following questions:

1. **Why is this change necessary?**
2. **How does it address the issue?**
3. **What side effects does this change have?**

The first question tells reviewers of your pull request what to expect in the commit, allowing them to more easily
identify and point out unrelated changes.

The second question describes, at a high level, what was done to affect change. If your change is obvious, you may be
able to omit addressing this question.

The third is the most important question to answer, as it can point out problems where you are making too many changes
in one commit or branch. One or two bullet points for related changes may be okay, but five or six are likely indicators
of a commit that is doing too many things.

A good commit message template

```
Short (50 chars or less) summary of changes with relevant project management issue ID.

More detailed explanatory text, if necessary.  Wrap it to about 72 characters or so.  In some contexts, the first line
is treated as the subject of an email and the rest of the text as the body.  The blank line separating the summary from
the body is critical (unless you omit the body entirely); tools like rebase can get confused if you run the two
together.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded by a single space, with blank lines in between, but
 conventions vary here
```

Run `git log --no-merges` to see what a nicely formatted project-commit history looks like.


### Writing tests

Over the course of contributing to Newman, several new features will be added and discovered bugs / glitches will be
fixed. It is important to ensure that all of these changes are cross-checked via their respective tests. Two
important points in this context are `unit` and `integration` tests.
