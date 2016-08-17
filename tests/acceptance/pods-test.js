/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
}
from 'mocha'
import {
  expect
}
from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

/* eslint-disable */
describe('Acceptance: PodsTest', function () {
    let application
    beforeEach(function () {
      application = startApp()
    })

    afterEach(function () {
      destroyApp(application)
    })

    it('can visit /', function () {
      visit('/')
      click('#detailPodsId')
      andThen(function () {
        expect(currentPath()).to.equal('demo')
      })
    })
  })
  /* eslint-enable */
