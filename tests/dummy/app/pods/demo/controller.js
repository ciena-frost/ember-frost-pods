import Ember from 'ember'

export default Ember.Controller.extend({
  dummyRecords: Ember.computed.alias('model'),

  podsVisibility: Ember.A(),

  isPodVisible (pod) {
    let podVisibility = this.get('podsVisibility').findBy('id', pod)
    if (podVisibility === undefined) {
      return false
    }
    return podVisibility.get('isPodVisible')
  },

  isMapPodVisible: Ember.computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'map')
  }),

  isNodePodVisible: Ember.computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'node')
  }),

  isSearchPodVisible: Ember.computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'search')
  }),

  actions: {
    // TODO Revert to the initial pod on a canvas click

    togglePods (pod) {
      let podsVisibility = this.get('podsVisibility')
      if (podsVisibility.findBy('id', pod) === undefined) {
        podsVisibility.addObject(Ember.Object.create({
          id: pod,
          isPodVisible: false
        }))
      }

      podsVisibility.forEach(function (podVisibility) {
        if (podVisibility.get('id') === pod) {
          podVisibility.toggleProperty('isPodVisible')
        } else {
          podVisibility.set('isPodVisible', false)
        }
      })
    },
    tabSelected (tab) {
      this.set('selectedTab', tab)
    }
  }
})
