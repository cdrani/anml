const anml = require(`../anml.json`)

module.exports = name => {
  if (Object.keys(anml).includes(name)) {
    return anml[name]
  }
}
