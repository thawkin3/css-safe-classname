import {
  nonCssSafeCharacters,
  invalidBeginningOfClassname,
} from './constants.js'

export const isValidCssClassname = str => {
  if (typeof str !== 'string') {
    return false
  }

  return (
    !nonCssSafeCharacters.test(str) && !invalidBeginningOfClassname.test(str)
  )
}
