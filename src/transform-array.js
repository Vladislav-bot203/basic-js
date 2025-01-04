const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr.length === 1) return arr;
  return arr.reduce((newArr, elem, id, array) => {
    if ( elem === '--double-next') return newArr;
    if (array[id - 1] === '--double-next') {
      newArr.push(elem);
      newArr.push(elem);
      return newArr;
    }
    if (elem === '--discard-prev' && id !== 0 && array[id - 2] !== '--discard-next') {
      newArr.pop();
      return newArr;
    }

    if (elem === '--discard-prev' && id !== 0 && array[id - 2] === '--discard-next') {
      return newArr;
    }

    if (elem === '--discard-prev' && id === 0) return newArr;

    if (elem === '--double-prev' && id !== 0 && array[id - 2] !== '--discard-next' && array[id - 2] !== '--double-next') {
      newArr.push(array[id - 1]);
      newArr.push(array[id - 1]);
      return newArr;
    }

    if (elem === '--double-prev' && id !== 0 && array[id - 2] !== '--discard-next' && array[id - 2] === '--double-next') {
      newArr.push(array[id - 1]);
      return newArr;
    }

    if (elem === '--double-prev' && id !== 0 && array[id -2] === '--discard-next') return newArr;

    if (elem === '--double-prev' && id === 0) {
      return newArr;
    }

    if (elem === '--discard-next') {
      return newArr;
    }

    if (array[id - 1] === '--discard-next') return newArr;
    newArr.push(elem);
   return newArr; 
  }, [])
}

module.exports = {
  transform
};
