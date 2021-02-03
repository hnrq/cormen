const { generateRandomArray } = require('../utils');

const insertionSort = (arr = []) => {
  const sortedArr = [...arr];
  sortedArr.forEach((element, index) => {
    let j = index + 1;
    while (sortedArr[j-1] > sortedArr[j] && j > 0) {
      [sortedArr[j-1], sortedArr[j]] = [sortedArr[j], sortedArr[j-1]];
      j -= 1;
    }
  }) 
  return sortedArr;
};

const array = generateRandomArray(10);

console.log(array, insertionSort(array));

module.exports = insertionSort;