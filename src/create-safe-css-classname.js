import { nonCssSafeCharacters } from './non-css-safe-characters.js'

export const createSafeCssClassname = str => {
  if (typeof str !== 'string') {
    return ''
  }

  return str.replace(nonCssSafeCharacters, '')
}
