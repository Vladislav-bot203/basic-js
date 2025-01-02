const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((res, item) => {
    res += item.reduce((catsCounter, elem) => {
      if (elem === '^^') return ++catsCounter;
      return catsCounter;
    }, 0);
    return res;
  }, 0)
}

module.exports = {
  countCats
};
