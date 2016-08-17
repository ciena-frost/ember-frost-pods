import Ember from 'ember';
import layout from '../templates/components/frost-details-pod';
import FrostPods from './frost-pods'

export default FrostPods.extend({
  layout,
  classNames: [
    'top',
    'right',
    'frost-details-pod'
  ],
  icon: 'round-add',
  actions: {
    sendAction (action) {
      this.set('action', action)
      this.sendAction('action')
    }
  }
});
