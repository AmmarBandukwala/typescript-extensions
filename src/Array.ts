declare global {
  interface Array<T> {
    median: () => number;
    mode: () => number;
    mean: () => number;
    sum: () => number;
  }
}

Array.prototype.median = function () {
  this.sort();

  if (this.length % 2 === 0) {
    // even number elements
    return (this[this.length / 2] + this[this.length / 2 - 1]) / 2;
  } else {
    // odd number elements
    return this[(this.length - 1) / 2];
  }
};

Array.prototype.mode = function () {
  this.sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = this[0];
  var currentStreak = 1;
  var currentElem = this[0];

  for (let i = 1; i < this.length; i++) {
    if (this[i - 1] !== this[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = this[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};

Array.prototype.mean = function () {
  var total = this.sum();
  return total / this.length;
};

Array.prototype.sum = function () {
  var total = 0;
  for (var i = 0; i < this.length; i++) {
    total += this[i];
  }
  return total;
};

export {};