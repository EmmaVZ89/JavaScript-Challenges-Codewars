// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.
//


function findOdd(A) {

let numbers = {};

  for (let num of A) {
    if (num in numbers) {
      ++numbers[num];
    } else {
      numbers[num] = 1;
    }
  }

  for (let num in numbers) {
    if (numbers[num]%2 !== 0) {
      return parseInt(num)
    }
  }
}
