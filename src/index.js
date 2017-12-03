const { getAll, getRandomName, getCommon, getScientific } = require(`./api`)

module.exports = {
  all: getAll(),
  random: type => getRandomName(type),
  common: name => getCommon(name),
  scientific: name => getScientific(name)
}
