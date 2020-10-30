import { isValidCssClassname } from './is-valid-css-classname.js'

describe('isValidCssClassname', () => {
  it('returns a boolean', () => {
    expect(typeof isValidCssClassname('test')).toBe('boolean')
  })

  it('returns false if the provided argument is not a string', () => {
    expect(isValidCssClassname(42)).toBe(false)
    expect(isValidCssClassname(undefined)).toBe(false)
    expect(isValidCssClassname(null)).toBe(false)
    expect(isValidCssClassname([1, 2, 3])).toBe(false)
    expect(isValidCssClassname({ key: 'value' })).toBe(false)
    expect(isValidCssClassname(new Date())).toBe(false)
  })

  it('returns true if the provided string is a valid css classname', () => {
    expect(isValidCssClassname('cool')).toBe(true)
    expect(isValidCssClassname('Cool')).toBe(true)
    expect(isValidCssClassname('coolClass')).toBe(true)
    expect(isValidCssClassname('CoolClass')).toBe(true)
    expect(isValidCssClassname('cool-class')).toBe(true)
    expect(isValidCssClassname('Cool-Class')).toBe(true)
    expect(isValidCssClassname('_cool')).toBe(true)
    expect(isValidCssClassname('-cool')).toBe(true)
    expect(isValidCssClassname('cool123')).toBe(true)
    expect(isValidCssClassname('cool--class')).toBe(true)
    expect(isValidCssClassname('cool-123')).toBe(true)
  })

  describe('invalid beginning of string', () => {
    it('returns false if the provided string begins with a digit', () => {
      expect(isValidCssClassname('123')).toBe(false)
    })

    it('returns false if the provided string begins with two hyphens', () => {
      expect(isValidCssClassname('--coolClass')).toBe(false)
    })

    it('returns false if the provided string begins with a hyphen followed by a digit', () => {
      expect(isValidCssClassname('-123')).toBe(false)
    })
  })

  describe('invalid characters', () => {
    it('returns false if the string contains spaces', () => {
      expect(isValidCssClassname('This Is My Class')).toBe(false)
    })

    it('returns false if the string contains the ! character', () => {
      expect(isValidCssClassname('cool!class')).toBe(false)
    })

    it('returns false if the string contains the " character', () => {
      expect(isValidCssClassname('cool"class')).toBe(false)
    })

    it('returns false if the string contains the # character', () => {
      expect(isValidCssClassname('cool#class')).toBe(false)
    })

    it('returns false if the string contains the $ character', () => {
      expect(isValidCssClassname('cool$class')).toBe(false)
    })

    it('returns false if the string contains the % character', () => {
      expect(isValidCssClassname('cool%class')).toBe(false)
    })

    it('returns false if the string contains the & character', () => {
      expect(isValidCssClassname('cool&class')).toBe(false)
    })

    it("returns false if the string contains the ' character", () => {
      expect(isValidCssClassname("cool'class")).toBe(false)
    })

    it('returns false if the string contains the ( character', () => {
      expect(isValidCssClassname('cool(class')).toBe(false)
    })

    it('returns false if the string contains the ) character', () => {
      expect(isValidCssClassname('cool)class')).toBe(false)
    })

    it('returns false if the string contains the * character', () => {
      expect(isValidCssClassname('cool*class')).toBe(false)
    })

    it('returns false if the string contains the + character', () => {
      expect(isValidCssClassname('cool+class')).toBe(false)
    })

    it('returns false if the string contains the , character', () => {
      expect(isValidCssClassname('cool,class')).toBe(false)
    })

    it('returns false if the string contains the . character', () => {
      expect(isValidCssClassname('cool.class')).toBe(false)
    })

    it('returns false if the string contains the / character', () => {
      expect(isValidCssClassname('cool/class')).toBe(false)
    })

    it('returns false if the string contains the : character', () => {
      expect(isValidCssClassname('cool:class')).toBe(false)
    })

    it('returns false if the string contains the ; character', () => {
      expect(isValidCssClassname('cool;class')).toBe(false)
    })

    it('returns false if the string contains the < character', () => {
      expect(isValidCssClassname('cool<class')).toBe(false)
    })

    it('returns false if the string contains the = character', () => {
      expect(isValidCssClassname('cool=class')).toBe(false)
    })

    it('returns false if the string contains the > character', () => {
      expect(isValidCssClassname('cool>class')).toBe(false)
    })

    it('returns false if the string contains the ? character', () => {
      expect(isValidCssClassname('cool?class')).toBe(false)
    })

    it('returns false if the string contains the @ character', () => {
      expect(isValidCssClassname('cool@class')).toBe(false)
    })

    it('returns false if the string contains the [ character', () => {
      expect(isValidCssClassname('cool[class')).toBe(false)
    })

    it('returns false if the string contains the  character', () => {
      expect(isValidCssClassname('cool\\class')).toBe(false)
    })

    it('returns false if the string contains the ] character', () => {
      expect(isValidCssClassname('cool]class')).toBe(false)
    })

    it('returns false if the string contains the ^ character', () => {
      expect(isValidCssClassname('cool^class')).toBe(false)
    })

    it('returns false if the string contains the ` character', () => {
      expect(isValidCssClassname('cool`class')).toBe(false)
    })

    it('returns false if the string contains the { character', () => {
      expect(isValidCssClassname('cool{class')).toBe(false)
    })

    it('returns false if the string contains the | character', () => {
      expect(isValidCssClassname('cool|class')).toBe(false)
    })

    it('returns false if the string contains the } character', () => {
      expect(isValidCssClassname('cool}class')).toBe(false)
    })

    it('returns false if the string contains the ~ character', () => {
      expect(isValidCssClassname('cool~class')).toBe(false)
    })
  })

  it('returns false if the provided string is not a valid css classname', () => {
    expect(isValidCssClassname('#test')).toBe(false)
    expect(isValidCssClassname('.test')).toBe(false)
    expect(isValidCssClassname('>test')).toBe(false)
    expect(isValidCssClassname('has spaces in it')).toBe(false)
    expect(isValidCssClassname('cool+class')).toBe(false)
    expect(isValidCssClassname('cool~class')).toBe(false)
  })
})
