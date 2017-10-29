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
}


module.exports = {
  make_soup,
  Bucket
}
