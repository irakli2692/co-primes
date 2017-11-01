function ClosedInterval(start, end) {
  this.start = start;
  this.end = end;
}

ClosedInterval.prototype.isValid = function () {
  return this.start <= this.end;
};

ClosedInterval.prototype.toString = function () {
  return '[ ' + this.start + ' -- ' + this.end + ' ]';
};

ClosedInterval.prototype.length = function () {
  return this.end - this.start + 1;
};
