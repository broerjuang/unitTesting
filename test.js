'use strict'

'use strict'
const assert = require('assert');
const lib = require('./controller');
const data = require('./data/data')


// Testing

// isEmpty
describe('#list',() => {
  it('It should have the same length between data.length and lib.list().length', () => {
    assert.equal(data.length, lib.list().length);
  });
  it('It should have the same element between constructed lib with manual type', () => {
    assert.deepEqual(data.map(datum => datum.year + " " + datum.title), lib.list());
  });
  it('It should has the same element for the indexed file is called', () => {
    assert.deepEqual(data.map(datum => datum.year + " " + datum.title)[13], lib.list()[13]);
  });
});

describe('#findByYear',() => {
  it('It should have the same length between movie 2001 and lib.findByYear(2001).length', () => {
    assert.equal(data.filter(datum => datum.year === 2001).length, lib.findByYear(2001).length);
  });
  it('It should have the same value between movie 2001 and lib.findByYear(2001).length', () => {
    assert.deepEqual(data.filter(datum => datum.year === 2001), lib.findByYear(2001));
  });
  it('It should have the same value in index 12 between movie 2001 and lib.findByYear(2001).length', () => {
    assert.deepEqual(data.filter(datum => datum.year === 2001)[12], lib.findByYear(2001)[12]);
  });
});

//
// // count
//
// describe('#C.count',() => {
//   it('should return 0 when the value inside the array is not present', () => {
//     assert.equal(0, C.count(empty));
//   });
//   it(`should return 4 when array has four values inside it`, () => {
//     assert.equal(fill.length, C.count(fill));
//   });
//   it(`should return 3 when array has 3 objects inside it`, () => {
//     assert.equal(nested.length, C.count(nested));
//   });
// });
//
// describe('#C.head',() => {
//   it('should return [] when the array has no value', () => {
//     assert.deepEqual([], C.head(empty));
//   });
//   it('should return [1] when the array is [1,2,3,4]', () => {
//     assert.deepEqual([1], C.head(fill));
//   });
//
// });
//
// describe('#C.tail',() => {
//   it('should return [ 2, 3, 4 ] when the array is [1,2,3,4]', () => {
//     assert.deepEqual([2, 3, 4], C.tail(fill));
//   });
//   it('should return [ 2, [ 3, 4 ] ] when the array is [1,2,[3,4]]', () => {
//     assert.deepEqual([ 2, [ 3, 4 ] ], C.tail(nested));
//   });
//
// });
//
// describe('#C.flatten',() => {
//   it('should return [ 1, 2, 3, 4 ] when the array is [ 1, 2, 3, 4 ]', () => {
//     assert.deepEqual([ 1, 2, 3, 4 ], C.flatten(fill));
//   });
//   it('should return [ 1, 2, 3, 4 ] when the array is [ 1, 2, [ 3, 4 ] ]', () => {
//     assert.deepEqual([ 1, 2, 3, 4 ], C.flatten(nested));
//   });
//
// });
//
//
//
// //
// // const data = require('./dummy');
// // const R = require('ramda');
// //
// // let findById = (id) => {
// //   var select = x => x.id === id
// //   return R.filter(select, data)
// // }
// //
// // console.log(data);
// // console.log(findById(1));
