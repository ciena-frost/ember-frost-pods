import Ember from 'ember'
import FrostPods from 'ember-frost-pods/components/frost-pods'
import layout from './template'
export default FrostPods.extend({
  layout: layout,
  classNames: ['top', 'right', 'dummy-search-pods'],

  _records: Ember.computed('records', function () {
    return this.get('records').map(function (record) {
      record.set('record-type', 'custom')
      return record
    })
  }),

  actions: {
    filterList (attrs) {
      console.log(attrs.value)
    },

    selected (attrs) {
      console.log(attrs)
    }
  }
})
