import { isValidCssClassname } from './is-valid-css-classname.js'

describe('isValidCssClassname', () => {
  it('returns a boolean', () => {
    expect(typeof isValidCssClassname('test')).toBe('boolean')
  })
})
