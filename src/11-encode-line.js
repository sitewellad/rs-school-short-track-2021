/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const counter = 0;
  let result = '';
  let b = 0;
  while (counter < str.length) {
    if (str[counter] !== str[counter + 1]) {
      const countLet = b ? b + 1 : '';
      result = result + countLet + str[counter];
      b = 0;
    } else {
      b++;
    }
    b++;
  }
  return result;
}

module.exports = encodeLine;
