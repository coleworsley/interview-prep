function make_soup(bucket_1, bucket_2, target_size) {
  return {
    possible: true,
    steps: []
  }
}

class Bucket {
  constructor(size) {
    this.size = size;
    this.quantity = 0;
  }

  fill() {
    this.quantity = this.size;
  }

  empty() {
    this.quantity = 0;
  }

  transfer(bucket) {
    const diff = bucket.size - this.quantity - bucket.quantity;

    if (diff > 0) {
      bucket.quantity = this.quantity;
      this.quantity = 0;
    } else {
      this.quantity = -diff;
      bucket.quantity = bucket.size;
    }
  }
}


module.exports = {
  make_soup,
  Bucket
}
