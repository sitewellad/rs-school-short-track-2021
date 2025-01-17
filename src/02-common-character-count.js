/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// let count = 0;

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const uniqueArr1 = s1.split('');
  const uniqueArr2 = s2.split('');

  uniqueArr1.forEach((el) => {
    if (uniqueArr2.includes(el)) {
      count += 1;
      uniqueArr2.splice(uniqueArr2.indexOf(el), 1);
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
