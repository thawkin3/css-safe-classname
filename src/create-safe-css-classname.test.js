import { createSafeCssClassname } from './create-safe-css-classname.js'

describe('createSafeCssClassname', () => {
  it('returns a string', () => {
    expect(typeof createSafeCssClassname('test')).toBe('string')
  })

  describe('invalid input', () => {
    it('returns an empty string if the argument is not a string', () => {
      expect(createSafeCssClassname(42)).toBe('')
      expect(createSafeCssClassname(undefined)).toBe('')
      expect(createSafeCssClassname(null)).toBe('')
      expect(createSafeCssClassname([1, 2, 3])).toBe('')
      expect(createSafeCssClassname({ key: 'value' })).toBe('')
      expect(createSafeCssClassname(new Date())).toBe('')
    })
  })

  describe('invalid characters', () => {
    it('removes spaces from the string', () => {
      expect(createSafeCssClassname('This Is My Class')).toBe('ThisIsMyClass')
    })

    it('strips out the ! character from the string', () => {
      expect(createSafeCssClassname('cool!class')).toBe('coolclass')
    })

    it('strips out the " character from the string', () => {
      expect(createSafeCssClassname('cool"class')).toBe('coolclass')
    })

    it('strips out the # character from the string', () => {
      expect(createSafeCssClassname('cool#class')).toBe('coolclass')
    })

    it('strips out the $ character from the string', () => {
      expect(createSafeCssClassname('cool$class')).toBe('coolclass')
    })

    it('strips out the % character from the string', () => {
      expect(createSafeCssClassname('cool%class')).toBe('coolclass')
    })

    it('strips out the & character from the string', () => {
      expect(createSafeCssClassname('cool&class')).toBe('coolclass')
    })

    it("strips out the ' character from the string", () => {
      expect(createSafeCssClassname("cool'class")).toBe('coolclass')
    })

    it('strips out the ( character from the string', () => {
      expect(createSafeCssClassname('cool(class')).toBe('coolclass')
    })

    it('strips out the ) character from the string', () => {
      expect(createSafeCssClassname('cool)class')).toBe('coolclass')
    })

    it('strips out the * character from the string', () => {
      expect(createSafeCssClassname('cool*class')).toBe('coolclass')
    })

    it('strips out the + character from the string', () => {
      expect(createSafeCssClassname('cool+class')).toBe('coolclass')
    })

    it('strips out the , character from the string', () => {
      expect(createSafeCssClassname('cool,class')).toBe('coolclass')
    })

    it('strips out the . character from the string', () => {
      expect(createSafeCssClassname('cool.class')).toBe('coolclass')
    })

    it('strips out the / character from the string', () => {
      expect(createSafeCssClassname('cool/class')).toBe('coolclass')
    })

    it('strips out the : character from the string', () => {
      expect(createSafeCssClassname('cool:class')).toBe('coolclass')
    })

    it('strips out the ; character from the string', () => {
      expect(createSafeCssClassname('cool;class')).toBe('coolclass')
    })

    it('strips out the < character from the string', () => {
      expect(createSafeCssClassname('cool<class')).toBe('coolclass')
    })

    it('strips out the = character from the string', () => {
      expect(createSafeCssClassname('cool=class')).toBe('coolclass')
    })

    it('strips out the > character from the string', () => {
      expect(createSafeCssClassname('cool>class')).toBe('coolclass')
    })

    it('strips out the ? character from the string', () => {
      expect(createSafeCssClassname('cool?class')).toBe('coolclass')
    })

    it('strips out the @ character from the string', () => {
      expect(createSafeCssClassname('cool@class')).toBe('coolclass')
    })

    it('strips out the [ character from the string', () => {
      expect(createSafeCssClassname('cool[class')).toBe('coolclass')
    })

    it('strips out the  character from the string', () => {
      expect(createSafeCssClassname('cool\\class')).toBe('coolclass')
    })

    it('strips out the ] character from the string', () => {
      expect(createSafeCssClassname('cool]class')).toBe('coolclass')
    })

    it('strips out the ^ character from the string', () => {
      expect(createSafeCssClassname('cool^class')).toBe('coolclass')
    })

    it('strips out the ` character from the string', () => {
      expect(createSafeCssClassname('cool`class')).toBe('coolclass')
    })

    it('strips out the { character from the string', () => {
      expect(createSafeCssClassname('cool{class')).toBe('coolclass')
    })

    it('strips out the | character from the string', () => {
      expect(createSafeCssClassname('cool|class')).toBe('coolclass')
    })

    it('strips out the } character from the string', () => {
      expect(createSafeCssClassname('cool}class')).toBe('coolclass')
    })

    it('strips out the ~ character from the string', () => {
      expect(createSafeCssClassname('cool~class')).toBe('coolclass')
    })

    it('removes all instances of invalid characters, not just the first instance', () => {
      expect(createSafeCssClassname('.my#Class>Name~Is+Cool')).toBe(
        'myClassNameIsCool'
      )
    })
  })

  describe('invalid beginning of string', () => {
    it('prepends an underscore to a string that begins with a digit', () => {
      expect(createSafeCssClassname('123')).toBe('_123')
    })

    it('prepends an underscore to a string that begins with two hyphens', () => {
      expect(createSafeCssClassname('--coolClass')).toBe('_--coolClass')
    })

    it('prepends an underscore to a string that begins with a hyphen followed by a digit', () => {
      expect(createSafeCssClassname('-123')).toBe('_-123')
    })
  })

  describe('valid characters', () => {
    it('does not affect a valid class name string', () => {
      expect(createSafeCssClassname('cool')).toBe('cool')
      expect(createSafeCssClassname('Cool')).toBe('Cool')
      expect(createSafeCssClassname('coolClass')).toBe('coolClass')
      expect(createSafeCssClassname('CoolClass')).toBe('CoolClass')
      expect(createSafeCssClassname('cool-class')).toBe('cool-class')
      expect(createSafeCssClassname('Cool-Class')).toBe('Cool-Class')
      expect(createSafeCssClassname('_cool')).toBe('_cool')
      expect(createSafeCssClassname('-cool')).toBe('-cool')
      expect(createSafeCssClassname('cool123')).toBe('cool123')
      expect(createSafeCssClassname('cool--class')).toBe('cool--class')
      expect(createSafeCssClassname('cool-123')).toBe('cool-123')
    })
  })
})
