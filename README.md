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

### ES Modules

```js
import { createSafeCssClassname, isValidCssClassname } from 'css-safe-classname'

const originalInputString = 'your#css.classname>here'

console.log(isValidCssClassname(originalInputString))
// outputs: false

const safeCssClassname = createSafeCssClassname(originalInputString)
console.log(safeCssClassname)
// outputs: yourcssclassnamehere
```

### CommonJS Modules

```js
var cssSafeClassname = require('css-safe-classname')

var originalInputString = 'your#css.classname>here'

console.log(cssSafeClassname.isValidCssClassname(originalInputString))
// outputs: false

var safeCssClassname = cssSafeClassname.createSafeCssClassname(
  originalInputString
)
console.log(safeCssClassname)
// outputs: yourcssclassnamehere
```

## Contributing

Please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

The [Code of Conduct](CODE_OF_CONDUCT.md) can be found here.
