function bubbleSort(array) {
    let swapped = true; // Assume the worst
    let end = array.length;

    while (swapped === true) {
      swapped = false;

      for (let i = 0; i < end; i++) {
        if (array[i] > array[i+1]) {
          // ES6 parallel / destructuring
          [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
          swapped = true;
        }
      }

      end--;
    }

    return array;
}

module.exports = bubbleSort;
