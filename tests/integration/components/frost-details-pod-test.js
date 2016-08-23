import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-details-pod',
  'Integration: EmberFrostDetailsPodComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{frost-details-pod}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
