function reduce(callback, initial) {
  let accumulator = initial;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}


module.exports = reduce;
