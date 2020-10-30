import {
  nonCssSafeCharacters,
  invalidBeginningOfClassname,
} from './constants.js'

// https://www.w3.org/TR/CSS2/syndata.html
// Section 4.1.3 Characters and case

// In CSS, identifiers can contain only:
//   - the characters [a-zA-Z0-9]
//   - ISO 10646 characters U+00A0 and higher
//   - the hyphen (-)
//   - the underscore (_)
//   - escaped characters and any ISO 10646 character as a numeric code

// CSS identifiers cannot start with:
//   - a digit
//   - two hyphens
//   - a hyphen followed by a digit.

export const createSafeCssClassname = str => {
  if (typeof str !== 'string') {
    return ''
  }

  const strippedClassname = str.replace(
    new RegExp(nonCssSafeCharacters, 'g'),
    ''
  )

  return invalidBeginningOfClassname.test(strippedClassname)
    ? `_${strippedClassname}`
    : strippedClassname
}
