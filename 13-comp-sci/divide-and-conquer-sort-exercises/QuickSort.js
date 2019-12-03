function quickSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr.pop(); // any value from the array
  const left = arr.filter(item => item <= pivot);
  const right = arr.filter(item => item > pivot);

  return quickSort(left).concat([pivot], quickSort(right)); // Recursion
}

module.exports = quickSort;
