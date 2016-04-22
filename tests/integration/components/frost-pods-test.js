import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-pods',
  'Integration: EmberFrostPodsComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-pods}}
      //     template content
      //   {{/frost-pods}}
      // `)

      this.render(hbs`{{frost-pods}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
