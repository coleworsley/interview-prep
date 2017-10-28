const expect = require('chai').expect;
const myReduce = require('../problems/reduce');
Array.prototype.myReduce = myReduce;

describe('reduce', () => {
  it('should be an function', () => {
    expect(typeof(myReduce)).to.equal('function');
  });


  it('should be able to sum up the elements in an array', () => {
    const array = [1, 2, 3];

    const sum = array.myReduce((a, b) => {
      return a + b;
    }, 0);

    expect(sum).to.equal(6);
  });

  it('should be able to reduce an array into an object', () => {
    const array = [
      {
        type: 'green',
        count: 5
      },
      {
        type: 'green',
        count: 4
      },
      {
        type: 'yellow',
        count: 1
      }
    ];

    const newObj = array.myReduce((acc, e) => {
      if(!acc[e.type]) {
        acc[e.type] = 0;
      }
      acc[e.type] += e.count;
      return acc;
    }, {});

    const answer = {
      green: 9,
      yellow: 1
    };

    expect(newObj).to.deep.equal(answer);
  });
});
