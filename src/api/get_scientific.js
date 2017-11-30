const anml = require(`../anml.json`)

module.exports = function(name) {
  if (Object.keys(anml).includes(name)) {
    return anml[name]
  }
}
