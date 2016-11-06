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

describe('#findByTitle',() => {
  it('It should give the same data given the same title', () => {
    assert.deepEqual(data.filter(datum => datum.title === 'Phone Booth'), lib.findByTitle('Phone Booth'));
  });
});
