/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startPoint = 0;
  let endPoint = array.length - 1;
  let middlePoint = 0;

  while (startPoint <= endPoint) {
    middlePoint = startPoint + Math.floor((endPoint - startPoint) / 2);
    if (array[middlePoint] === value) {
      return middlePoint;
    }

    if (array[middlePoint] < value) {
      startPoint = middlePoint + 1;
    }
    if (array[middlePoint] > value) {
      endPoint = middlePoint - 1;
    }
  }

  return middlePoint;
}

module.exports = findIndex;
