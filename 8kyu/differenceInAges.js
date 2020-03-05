function differenceInAges(ages){
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  let diff = max - min;
  return [min, max, diff];
}