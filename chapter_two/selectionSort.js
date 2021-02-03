const { generateRandomArray } = require('../utils');

const selectionSort = (arr = []) => {
  const sortedArr = [...arr];
  sortedArr.forEach((element, i) => {
    let smallerPos = i;
    sortedArr.forEach((element, j) => {
      if (element[smallerPos] > element[j]) smallerPos = j;
    });
    [element[i], element[smallerPos]] = [element[smallerPos], element[i]]
  }) 
  return sortedArr;
};

const array = generateRandomArray(10);

console.log(array, selectionSort(array));

module.exports = insertionSort;