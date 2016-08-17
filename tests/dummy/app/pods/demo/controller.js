import Ember from 'ember'
const {
  Object,
  Controller,
  computed,
  A
} = Ember
export default Controller.extend({
  dummyRecords: computed.alias('model'),
  orientation: 'vertical',
  podsVisibility: A(),
  detailActions: A([
    {
      label: 'Details',
      action: function () {

      },
      priority: 'primary'
    },
    {
      label: 'Rotate',
      action: function () {
        let orientation = this.get('orientation')
        this.set(
          'orientation',
          orientation === 'vertical' ?
            'horizontal'
            : 'vertical'
        )
      },
      priority: 'secondary'
    }
  ]),
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

  isSearchPodVisible: Ember.computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'search')
  }),

  isDetailPodVisible: Ember.computed('podsVisibility.@each.isPodVisible', function () {
    return this.get('isPodVisible').call(this, 'detail')
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
