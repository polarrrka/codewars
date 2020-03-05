function sumOfMinimums(arr) { 
  let sum = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += Math.min(...arr[i]);
    } return sum;
  }