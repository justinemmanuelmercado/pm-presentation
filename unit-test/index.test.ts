import { myFunction } from './index'

describe('Main', () => {
  describe('myFunction', () => {
    it('should run myFunction correctly', () => {
      expect.assertions(1)
      const result = myFunction()

      expect(result).toBe('Hello World')
    })
  })
})