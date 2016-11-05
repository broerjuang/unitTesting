'use strict'

const data = require('./data/data');

module.exports = {
  list: () => {
    return data.map(datum => datum.year + " " + datum.title + " " + datum.genres);
  },

  findByYear: (year) => {
    var movieList = data.filter(datum => datum.year === year);
    return movieList.map(movie => movie.year + " " + movie.title)
  },

  findByTitle: (title) => {
    return data.filter(datum => datum.title === title)
  },

  findByDirectors(){
    
  }
}
