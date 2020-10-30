import { createSafeCssClassname } from './create-safe-css-classname.js'

describe('createSafeCssClassname', () => {
  it('returns a string', () => {
    expect(typeof createSafeCssClassname('test')).toBe('string')
  })

  it('removes spaces from the string', () => {
    expect(createSafeCssClassname('This Is My Class')).toBe('ThisIsMyClass')
  })

  it('removes CSS-specific identifiers from the string', () => {
    expect(createSafeCssClassname('.my#Class>Name~Is+Cool')).toBe(
      'myClassNameIsCool'
    )
  })

  it('does not affect a valid class name string', () => {
    expect(createSafeCssClassname('cool')).toBe('cool')
    expect(createSafeCssClassname('Cool')).toBe('Cool')
    expect(createSafeCssClassname('coolClass')).toBe('coolClass')
    expect(createSafeCssClassname('CoolClass')).toBe('CoolClass')
    expect(createSafeCssClassname('cool-class')).toBe('cool-class')
    expect(createSafeCssClassname('Cool-Class')).toBe('Cool-Class')
  })

  it('returns an empty string if the argument is not a string', () => {
    expect(createSafeCssClassname(42)).toBe('')
    expect(createSafeCssClassname(undefined)).toBe('')
    expect(createSafeCssClassname(null)).toBe('')
    expect(createSafeCssClassname([1, 2, 3])).toBe('')
    expect(createSafeCssClassname({ key: 'value' })).toBe('')
  })
})
