import Ember from 'ember'
const {
  Controller,
  computed,
  A,
  inject
} = Ember
export default Controller.extend({
  notifier: inject.service(),
  dummyRecords: computed.alias('model'),
  orientation: 'vertical',
  podsVisibility: A(),
  isPodVisible (pod) {
    let podVisibility = this.get('podsVisibility').findBy('id', pod)
    if (podVisibility === undefined) {
      return false
    }
    return podVisibility.get('isPodVisible')
  },

  isMapPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'map')
  }),

  isNodePodVisible: computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'node')
  }),

  isSearchPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'search')
  }),

  isDetailPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'detail')
  }),

  actions: {
    // TODO Revert to the initial pod on a canvas click
    viewDetails () {
      this.get('notifier').addNotification({
        message: 'Details was clicked!',
        type: 'success',
        autoClear: true,
        clearDuration: 1000
      })
    },
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
