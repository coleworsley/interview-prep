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

    bucket.empty();

    expect(bucket.quantity).to.equal(0);
  });

  it('should be able to transfer from one bucket to another', () => {
    const bucket_one = new Bucket(3);
    const bucket_two = new Bucket(5);

    expect(bucket_one.size).to.equal(3);
    expect(bucket_two.size).to.equal(5);
    expect(bucket_one.quantity).to.equal(0);
    expect(bucket_two.quantity).to.equal(0);

    bucket_one.fill();

    expect(bucket_one.quantity).to.equal(3);

    bucket_one.transfer(bucket_two);

    expect(bucket_one.quantity).to.equal(0);
    expect(bucket_one.quantity).to.equal(3);
  });

  it('should only fill up to the brim of each bucket', () => {
    const bucket_one = new Bucket(3);
    const bucket_two = new Bucket(5);

    bucket_two.fill();

    expect(bucket_two.quantity).to.equal(5);

    bucket_two.transfer(bucket_one);

    expect(bucket_one.quantity).to.equal(3);
    expect(bucket_one.quantity).to.equal(2);
  });
});
