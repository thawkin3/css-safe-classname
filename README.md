# css-safe-classname

[![npm](https://img.shields.io/npm/v/css-safe-classname)](https://www.npmjs.com/package/css-safe-classname)
[![Build Status](https://travis-ci.com/thawkin3/css-safe-classname.svg?branch=master)](https://travis-ci.com/thawkin3/css-safe-classname)
[![Codecov](https://img.shields.io/codecov/c/github/thawkin3/css-safe-classname)](https://codecov.io/gh/thawkin3/css-safe-classname)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/css-safe-classname)](https://bundlephobia.com/result?p=css-safe-classname)
[![npm](https://img.shields.io/npm/dt/css-safe-classname)](https://www.npmjs.com/package/css-safe-classname)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

This library is a lightweight solution containing utility methods for creating and validating safe CSS classnames from string input.

This project is published on npm as [css-safe-classname](https://www.npmjs.com/package/css-safe-classname).

## Installation

```sh
yarn add css-safe-classname

# or npm install css-safe-classname
```

## Usage

```js
import { createSafeCssClassName } from 'css-safe-classname'

const safeCssClassName = createSafeCssClassName('your#css.classname>here')
// outputs: yourcssclassnamehere
```

## NPM Scripts for Local Development

For a complete list, see [package.json](package.json).

- `yarn build`: Generates the minified build from the source code using [Rollup](https://rollupjs.org/)
- `yarn cz`: Uses [commitizen](https://github.com/commitizen/cz-cli) to walk you through some steps via the cli and then commits your code using a formatted commit message that it generates
- `yarn eslint`: Runs eslint to lint JS files
- `yarn install`: Installs dependencies
- `yarn lint`: Runs eslint and prettier in parallel to lint JS files
- `yarn prettier`: Formats the code so you don't have to worry about white space and other formatting during development
- `yarn prettier-watch`: Runs prettier in watch mode
- `yarn release`: Bumps the package version and generates the changelog using [standard-version](https://github.com/conventional-changelog/standard-version)
- `yarn test`: Runs all tests
- `yarn test:coverage`: Runs all tests and includes coverage report
- `yarn test:watch`: Runs tests in watch mode

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
