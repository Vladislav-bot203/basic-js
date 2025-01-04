const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let x = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[i] && arr[j] !== -1) {
          x = arr[j];
          arr[j] = arr[i];
          arr[i] = x;
        }
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
