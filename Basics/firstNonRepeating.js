function firstNonRepeating(arr) {
  let freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let num of arr) {
    if (freq[num] === 1) {
      return num;
    }
  }

  return null;
}

console.log(firstNonRepeating([2, 3, 4, 2, 3, 5, 4]));