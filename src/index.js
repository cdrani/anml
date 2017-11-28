'use strict'

// var uniqueRandomArray = require('uniqueRandomArray')

var anml = require('./anml.json')

module.exports = {
  all: anml,
  random: getRandom(),
  common: getCommon(name),
  scientific: getScientific(name)
}
