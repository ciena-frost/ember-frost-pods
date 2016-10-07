import Ember from 'ember'
const {
  Controller,
  computed: {
    alias
  },
  A,
  inject: {
    service
  }
} = Ember
export default Controller.extend({
  notifier: service(),
  dummyRecords: alias('model'),
  activePod: null,
  items: A([
    'map',
    'node',
    'search',
    'details'
  ]),
  actions: {
    // TODO Revert to the initial pod on a canvas click
    closeThis () {
      this.set('activePod', null)
    }
  }
})
