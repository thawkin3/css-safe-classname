import { nonCssSafeCharacters } from './non-css-safe-characters.js'

export const isValidCssClassname = str => {
  if (typeof str !== 'string') {
    return false
  }

  return !nonCssSafeCharacters.test(str)
}
