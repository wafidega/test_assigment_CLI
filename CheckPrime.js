function isPrime(n) {
  let pembagi = 2;

  while (n > pembagi) {
    if (n % pembagi == 0) {
      return false;
    } else pembagi++;
  }
  return true;
}

console.log(isPrime(237));
