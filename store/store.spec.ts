import { state } from '.'

describe('Store', () => {
  it('should have a base state', () => {
    expect(state()).toEqual({})
  })
})
