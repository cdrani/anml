const uniqueRandom = require(`unique-random`)

const getCommon = require(`./get_common.js`)
const anml = require(`../anml.json`)

const getCommonOrScientific = () => {
  const num = uniqueRandom(0, 1)()
  return num === 1 ? `common` : `scientific`
}

const keyOrValue = typeOfName => {
  const libraryLength = Object.keys(anml).length - 1
  const row = uniqueRandom(0, libraryLength)()

  return typeOfName === `scientific`
    ? anml[Object.keys(anml)[row]]
    : getCommon(anml[Object.keys(anml)[row]])
}

module.exports = () => {
  const type = Array.from(arguments)
  switch (type[0]) {
    case `common`: {
      return keyOrValue(`common`)
    }

    case `scientific`: {
      return keyOrValue(`scientific`)
    }

    default: {
      return keyOrValue(getCommonOrScientific)
    }
  }
}
