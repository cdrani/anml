import uniqueRandom from 'unique-random'

import anml from '../anml.json'
import getCommon from './get_common'

const getCommonOrScientific = () => {
  const num = uniqueRandom(0, 1)()
  return num === 1 ? 'common' : 'scientific'
}

const keyOrValue = typeOfName => {
  const libraryLength = Object.keys(anml).length - 1
  const row = uniqueRandom(0, libraryLength)()

  return typeOfName === 'scientific'
    ? anml[getCommon(anml[Object.keys(anml)[row]])]
    : getCommon(anml[Object.keys(anml)[row]])
}

module.exports = (type = '') => {
  switch (type) {
    case 'common': {
      return keyOrValue('common')
    }

    case 'scientific': {
      return keyOrValue('scientific')
    }

    default: {
      return keyOrValue(getCommonOrScientific())
    }
  }
}
