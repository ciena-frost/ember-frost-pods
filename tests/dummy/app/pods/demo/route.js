import Ember from 'ember'

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('dummy-record')
  },

  setupController (controller, model) {
    this._super(controller, model)
    controller.get('podsVisibility').clear()
//    controller.get('podsVisibility').addObject(Ember.Object.create({
//      id: 'node',
//      isPodVisible: false
//    }))
  }
})
