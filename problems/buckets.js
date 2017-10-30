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
    let bucketOneQuantity = this.quantity;
    let bucketTwoQuantity = bucket.quantity;
    const totalFill = bucketOneQuantity + bucketTwoQuantity;

    if (totalFill > bucket.size) {
      bucketOneQuantity = bucket.size - bucket.quantity;
      bucketTwoQuantity = bucket.size;
    } else {
      bucketOneQuantity = 0;
      bucketTwoQuantity = this.quantity;
    }

    this.quantity = bucketOneQuantity
    bucket.quantity = bucketTwoQuantity
  }
}


module.exports = {
  make_soup,
  Bucket
}
