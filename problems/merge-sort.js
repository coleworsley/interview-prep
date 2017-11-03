function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const a = arr.slice(0, middle);
  const b = arr.slice(middle);
  console.log('===========')
  // console.log(a , b);
  return merge(mergeSort(a), mergeSort(b));
}

function merge(a, b) {
  const arr = [];

  while((a.length || 0) + (b.length || 0) > 0) {
    if (a.length > 0 && a[0] < b[0] || b.length === 0) {
      arr.push(a.shift());
    } else {
      arr.push(b.shift());
    }
    console.log(arr);
  }

  return arr;
}

module.exports = {
  mergeSort,
  merge,
}
