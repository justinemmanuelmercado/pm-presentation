import { myFunction, myFunction2 } from './index'

describe('Main', () => {
  describe('myFunction', () => {
    it('should run myFunction correctly', () => {
      expect.assertions(1)
      const result = myFunction()

      expect(result).toBe('Hello World')
    })
  })
  describe('myFunction2', () => {
    it('should add 1 + 1 correctly', () => {
      expect.assertions(1)

      const result = myFunction2(1, 1)

      expect(result).toBe(2)
    })
    it('should have the correct return type', () => {
      expect.assertions(1)

      const result = myFunction2(1, 1)

      expect(typeof result).toBe('number')
    })
  })
})
