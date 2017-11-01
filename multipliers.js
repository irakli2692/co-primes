function getPrimeMultipliers(n) {
  var number = n;
  var primes = [];

  if (number > 1 && !(number & 1)) {
    // same as number % 2 === 0

    primes.push(2);

    while (!(number & 1)) {
      number >>= 1; //same as number /= 2;
    }
  }

  if (number > 1 && number % 3 === 0) {
    primes.push(3);

    while (number % 3 === 0) {
      number /= 3;
    }
  }

  for (var p = 5, d = 2; number > 1 ; p += d, d = 6 - d) {
    if (number % p !== 0) continue;

    primes.push(p);

    while (number % p === 0) {
      number /= p;
    }
  }

  return primes;
}
