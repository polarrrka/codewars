function calculator(a,b,sign){
  if (typeof (a && b) === 'number') {
    switch (sign) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
    }
  } return 'unknown value';
}