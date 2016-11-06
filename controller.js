'use strict'

const data = require('./data/data');
const R = require('ramda')

module.exports = {
  list: () => {
    return R.map(datum => datum.year + " " + datum.title, data)

  },

  findByYear: (year) => {
    // separate the function by its functionality
    let selectByYear = movie => movie.year == year
    let result = movie => movie.title

    // return the value by composing the two
    return R.compose(R.map(result), R.filter(selectByYear))(data)
  },

  findByTitle: (title) => {
    let selectByTitle = movie => movie.title === title
    return R.filter(selectByTitle, data)
  },

  findByRating: (rating) => {
    // separate the function by its functionality
    let selectByRating = movie => movie.info.rating === rating
    let result = movie => movie
    // return the value by composing the two
    return R.compose(R.map(result), R.filter(selectByRating))(data)
  },

  howLong: () => {
    return data.length
  }


}
