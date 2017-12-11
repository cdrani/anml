import { getAll, getCommon, getScientific, getRandomName } from './api'

module.exports = {
  all: getAll(),
  random: type => getRandomName(type),
  common: name => getCommon(name),
  scientific: name => getScientific(name)
}
