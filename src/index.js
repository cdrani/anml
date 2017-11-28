const { getAll, getRandom, getCommon, getScientific } = require('./api')

module.exports = {
  all: getAll(),
  random: getRandom(),
  common: getCommon(name),
  scientific: getScientific(name)
}
