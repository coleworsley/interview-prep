const expect = require('chai').expect;
const make_soup = require('../problems/buckets').make_soup;
const Bucket = require('../problems/buckets').Bucket;
// import {make_soup, Bucket} from '../problems/buckets';

describe('Buckets', () => {
  it('should have a class for a bucket', () => {
    const bucket = new Bucket(3);

    expect(bucket).to.be.a('object');
  });

  it('should have a size and a quantity', () => {
    const bucket = new Bucket(3);

    expect(bucket).to.have.a.property('size');
    expect(bucket).to.have.a.property('quantity');
  });

  it('should have a function to fill the bucket', () => {
    const bucket = new Bucket(3);

    expect(bucket.size).to.equal(3);
    expect(bucket.quantity).to.equal(0);

    bucket.fill();

    expect(bucket.quantity).to.equal(3);
  });

  it('should have a function to empty the bucket', () => {
    const bucket = new Bucket(3);

    expect(bucket.size).to.equal(3);
    expect(bucket.quantity).to.equal(0);

    bucket.fill();

    expect(bucket.quantity).to.equal(3);
  });
});
