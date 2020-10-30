# Contributing

## Introduction

Welcome! Thanks for your interest in contributing to this project!

## Bug Reports

If you would like to file a bug, please create an
[issue on the repo in GitHub](https://github.com/thawkin3/css-safe-classname/issues).
You should click the "New issue" button and then select the
"Bug report" template. Please be as detailed as you can and
include any additional information that you feel is relevant.

## Feature Requests

If you would like to request a feature or any other improvements,
please create an
[issue on the repo in GitHub](https://github.com/thawkin3/css-safe-classname/issues).
You should click the "New issue" button and then select the
"Feature request" template. I will reply as soon as possible
so we can take steps toward implementing your suggestion.
Or, better yet, after filing an issue, create a pull
request to implement the feature yourself!

## Pull Requests

If you would like to contribute to this project, please submit an
issue, write some code, and then create a pull request.

This project uses the following tools for automation and linting during the development process:

- [prettier](https://prettier.io/) for code formatting (JS and MD files)
- [eslint](https://eslint.org/) for checking syntax errors
- [commitizen](https://github.com/commitizen/cz-cli) for commit message formatting
- [lint-staged](https://www.npmjs.com/package/lint-staged) to lint changes before committing them
- [commitlint](https://github.com/conventional-changelog/commitlint)
  to validate the commit message is in a standard format
- [Husky](https://github.com/typicode/husky) for git hooks to run some validation
- [standard-version](https://github.com/conventional-changelog/standard-version)
  to automate versioning and CHANGELOG generation

The process of adding, committing, and pushing your code will look like this:

- Write your code
- `git add .`
- `yarn cz` (Note that this replaces `git commit`)
- (Husky then runs the git hooks to verify that the tests are passing, that
  the code has no errors, and that the commit message is in the proper format)
- `git push`

## Continuous Integration

This project has continuous integration set up through [Travis CI](https://travis-ci.com/)

## Cutting a New Release

This project is published on npm as [css-safe-classname](https://www.npmjs.com/package/css-safe-classname).

When we are ready to cut a new release, we follow these steps:

- `yarn release` (This uses [standard-version](https://github.com/conventional-changelog/standard-version)
  to automate bumping the version and generating the CHANGELOG)
- `git push --follow-tags origin master` (pushes the new commit and the new tag to GitHub)
- `yarn publish` (publishes the new package version on npm)

Note that only those with access can publish a new package version.
