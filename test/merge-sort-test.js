const expect = require('chai').expect;
const assert = require('chai').assert;
const { merge, mergeSort } = require('../problems/merge-sort');
const randomNum = '../problems/randomNum';

describe('Merge Sort', () => {
  it('should be 2 functions', () => {
    assert.isFunction(merge);
    assert.isFunction(mergeSort);
  });

  it.only('should sort an unsorted array', () => {
    const arr = [5, 4, 3, 2, 1];

    expect(mergeSort(arr)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort an array of letters', () => {
    const arr = ['c', 'd', 'p', 'f', 'a'];

    expect(mergeSort(arr)).to.deep.equal(['a', 'c', 'd', 'f', 'p']);
  });

  it('should move min number to front', () => {
    var randomArray = randomNum(5)
    var min = Math.min(...randomArray);

    expect(mergeSort(randomArray)[0]).to.equal(min);
  });

  it('should sort positive and negative numbers', () => {
    const arr = [ -15, 4, -3, 2, -1 ];

    expect(mergeSort(arr)).to.deep.equal([-15, -3, -1, 2, 4]);
  });

  it('should sort large arrays', () => {
    var ranArray = randomNum(100000);
    var compSorted = [...ranArray].sort((a, b) => a - b);

    expect(mergeSort(ranArray)).to.deep.equal(compSorted);
  });
})
