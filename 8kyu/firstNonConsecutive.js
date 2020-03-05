function firstNonConsecutive (arr) {
    let num;
    for (let i = 1; i < arr.length; i++) {
    num = arr[i] - arr[i-1];
    if (num > 1) {
      return arr[i];
      }
  } return null;
}