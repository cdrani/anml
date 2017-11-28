var uniqueRandom = require('unique-random')

var getCommon = require('./get_common.js')
var anml = require('../anml.json')

function getCommonOrScientific() {
  var num = uniqueRandom(0, 1)()
  return num === 1 ? 'common' : 'scientific'
}

function keyOrValue(typeOfName) {
  var libraryLength = Object.keys(anml).length - 1
  var row = uniqueRandom(0, libraryLength)()

  return typeOfName === 'scientific'
    ? anml[Object.keys(anml)[row]]
    : getCommon(anml[Object.keys(anml)[row]])
}

module.exports = function() {
  var type = Array.from(arguments)
  switch (type[0]) {
    case 'common': {
      return keyOrValue('common')
    }

    case 'scientific': {
      return keyOrValue('scientific')
    }

    default: {
      return keyOrValue(getCommonOrScientific)
    }
  }
}
