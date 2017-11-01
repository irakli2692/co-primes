function ClosedInterval(start, end) {
  this.start = start;
  this.end = end;
}

ClosedInterval.prototype.isValid = function () {
  return this.start <= this.end;
};
