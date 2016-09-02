import Ember from 'ember'
import _ from 'lodash/lodash'

export default Ember.Component.extend({
  classNames: ['frost-pods'],
  classNameBindings: ['orientation'],

  orientation: 'vertical',

  podNames: Ember.computed('podStack.[]', function () {
    return _.dropRight(this.get('podStack').map(function (entry) {
      return entry.alias
    }), 1)
  }),

  podLayerAlias: Ember.computed('podStack.[]', function () {
    return this.get('podStack.lastObject.alias')
  }),

  podStack: null,
  podLayer: Ember.computed('podStack.[]', function () {
    let podLayer = {}
    podLayer[this.get('podStack.lastObject.id')] = true
    return podLayer
  }),

  init() {
    this._super();
    this.set('podStack', Ember.A())
    this.get('podStack').addObject({
      id: 'root',
      alias: 'NodeD'
    })
  },

  actions: {
    openPod (id, alias) {
      this.get('podStack').addObject({
        id: id,
        alias: alias
      })
    },

    closePod () {
      this.get('podStack').popObject()
    },

    changePod (pod) {
      _.dropRightWhile(this.get('podStack'), (n) => {
        if (n.alias !== pod) {
          this.get('podStack').popObject()
          return true
        }
        return false
      })
    }
  }
})
