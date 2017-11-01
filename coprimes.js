function calcCoPrimesIntervals(n) {
  if (!n) return [];
  if (n === 1) return [
    new ClosedInterval(1, 1)
  ];

  var primes = getPrimeMultipliers(n);
  var primePairs = primes.map(function(prime) {
    return [prime, prime];
  });

  var primePairsHeap = new MinHeap(primePairs, pairComparator, pairIncrease);

  var currentStart = 1;

  var intervals = [];

  while (!primePairsHeap.isEmpty()) {
    var interval = new ClosedInterval(currentStart, primePairsHeap.min()[0] - 1);

    if (interval.isValid()) intervals.push(interval);

    currentStart = primePairsHeap.min()[0] + 1;

    if (primePairsHeap.min()[0] + primePairsHeap.min()[1] >= n) {
      primePairsHeap.extractMin();

      continue;
    }

    primePairsHeap.increase(
      primePairsHeap.minIndex(),
      primePairsHeap.min()[1]
    );
  }

  return intervals;
}

function pairComparator(pairOne, pairTwo) {
  return numberComparator(pairOne[0], pairTwo[0]);
}

function pairIncrease(pair, increment) {
  return [numberIncrease(pair[0], increment), pair[1]];
}
