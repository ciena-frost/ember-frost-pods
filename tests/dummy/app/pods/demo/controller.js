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
  listItems: A([
    Object.create({
      title: 'Item',
      description: 'Content'
    }),
    Object.create({
      title: 'Item',
      description: 'Content'
    })
  ]),
  podsVisibility: A(),
  detailActions: A([
    {
      label: 'Details',
      action: 'do_this',
      className: 'small secondary text'
    },
    {
      label: 'Rotate',
      action: 'switchOrientation',
      className: 'small tertiary text'
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
    },
    do_this (action) {
      console.log(action)
    },
    switchOrientation () {
      this.set('orientation',
        this.get('orientation') === 'vertical' ? 'horizontal' : 'vertical')
    },
    selected (selected) {
      console.log(selected)
    }
  }
})
