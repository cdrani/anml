;('use strict')

import chai, { expect } from 'chai'
import Fuzzy from 'chai-fuzzy'
chai.use(Fuzzy)

import anml from './anml.json'
import { getAll, getCommon, getScientific, getRandomName } from './api'

const isString = obj => {
  for (const [key, value] of Object.entries(obj)) {
    return typeof value === 'string' && typeof key === 'string'
  }
}

describe('isString', () => {
  it('should confirm every value is of type "string"', () => {
    expect(isString(anml)).to.be.true
  })
})

describe('getAll', () => {
  it('should return entire animal collection', () => {
    expect(getAll()).to.be.an('object')
    expect(getAll()).to.equal(anml)
  })
})

describe('getCommon', () => {
  it('should return the common name of animal', () => {
    expect(getCommon('Canis lupus familiaris')).to.equal('Dog')
  })
})

describe('getScientific', () => {
  it('should return the scientific name of animal', () => {
    expect(anml).to.have.property('Dog', 'Canis lupus familiaris')
    expect(getScientific('Dog')).to.equal('Canis lupus familiaris')
  })
})

describe('getRandomName', () => {
  it('should return a random common name if argument is "common"', () => {
    expect(anml).to.have.property(getRandomName('common'))
  })

  it('should return a random scientific name if argument is "scientific"', () => {
    expect(getRandomName('scientific')).to.satisfy(val => getCommon(val))
  })

  it('should return a random common or scientific name if argument is not provided', () => {
    expect(getRandomName()).to.satisfy(name => {
      return getCommon(name) || getScientific(name)
    })
  })
})
