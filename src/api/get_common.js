const anml = require(`../anml.json`)

module.exports = name => Object.keys(anml).find(key => anml[key] === name)
