import { createSafeCssClassname } from './create-safe-css-classname.js'

describe('createSafeCssClassname', () => {
  it('returns a string', () => {
    expect(typeof createSafeCssClassname('test')).toBe('string')
  })
})
