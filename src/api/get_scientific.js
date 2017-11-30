const anml = require(`../anml.json`)

module.exports = name => {
  if (!Object.keys(anml).includes(name)) {
    throw new Error(`Not available in library.`)
  }
  return anml[name]
}
