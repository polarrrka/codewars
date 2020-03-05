function noBoringZeros(n) {
  let str = n.toString();
  while (str.slice(-1) === '0') {
    str = str.substr(0, str.length - 1);
    } 
    let res = +str;
    return res;
  }