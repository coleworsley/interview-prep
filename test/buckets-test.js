const expect = require('chai').expect;
const make_soup = require('../problems/buckets').make_soup;
const Bucket = require('../problems/buckets').Bucket;
// import {make_soup, Bucket} from '../problems/buckets';

describe('Make Soup', () => {
  it('should have a class for a bucket', () => {
    const bucket = new Bucket(3);

    expect(bucket).to.be.a('object');
  });

  it('should have a size and a quantity', () => {
    const bucket = new Bucket(3);

    expect(bucket).to.have.a.property('size');
    expect(bucket).to.have.a.property('quantity');
  })
});
