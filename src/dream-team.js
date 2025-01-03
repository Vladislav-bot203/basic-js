const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) return false;
  return members.reduce((chars, current) => {
    if (typeof current === 'string') {
      current = current.replaceAll(' ', '');
      chars.push(current[0].toUpperCase());
    }
    return chars;
  }, []).sort((a, b) => a.localeCompare(b)).join('');
}

module.exports = {
  createDreamTeam
};
