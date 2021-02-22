const Grid = require('../src/grid')
const { expect } = require('./test-helper')


describe('Grid', () => {
  describe('toString', () => {
    it('should be a empty grid string when empty', () => {
      // ARRANGE
      const emptyGrid = new Grid()

      // ACT
      const result = emptyGrid.toString()

      // ASSERT
      const expectedEmptyGridString = `.......\n.......`
      expect(result).to.be.equal(expectedEmptyGridString)
    })
  })
})
