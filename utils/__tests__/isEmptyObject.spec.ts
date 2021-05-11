import { isEmptyObject } from '../isEmptyObject'

describe('Utils: isEmptyObject', () => {
  it('should return true if an object is empty', () => {
    expect(isEmptyObject({})).toBeTruthy()
  })

  it('should return false if an object is empty', () => {
    expect(isEmptyObject({ data: '' })).toBeFalsy()
  })

  it('should return false if an array is passed', () => {
    expect(isEmptyObject([])).toBeFalsy()
  })

  it('should return false if a string is passed', () => {
    expect(isEmptyObject([])).toBeFalsy()
  })

  it('should return false if a number is passed', () => {
    expect(isEmptyObject(1)).toBeFalsy()
  })
})
