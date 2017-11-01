function fi(n) {
  if (!n) return 0;
  if (n === 1) return 1;

  var primes = getPrimeMultipliers(n);

  var result = n;

  primes.forEach(function (prime) {
    result -= result / prime;
  });

  return result;
}
