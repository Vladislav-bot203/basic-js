const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str);
  let addition = '';
  let result = '';
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let repeatTimes = options.repeatTimes || 0;
  let add = typeof options.addition === 'boolean' ? options.addition : 
  options.addition === null ? options.addition :
  options.addition || '';
  let addRep = options.additionRepeatTimes || 1;

    for (let i = 0; i < addRep; i++) {
      if (i !== addRep - 1) {
        addition += add + additionSeparator;
      } else {
        addition += add;
      }
    }
  console.log(addition, string);

  let mainPart = string + addition;

  if (options.repeatTimes !== undefined) {
    for (let j = 0; j < repeatTimes; j++) {
      if (j !== options.repeatTimes - 1) {
        result += mainPart + separator;
      } else {
        result += mainPart;
      }
    }
  } else {
    result += mainPart;
  }
  return result;
}

module.exports = {
  repeater
};
