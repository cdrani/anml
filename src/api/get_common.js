var anml = require('../anml.json')

module.exports = function(name) {
  return Object.keys(anml).find(key => anml[key] === name)
}
