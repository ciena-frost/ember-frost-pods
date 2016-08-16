import Ember from 'ember';
import layout from '../templates/components/frost-details-pod';
import FrostPods from './frost-pods'
import SlotsMixin from 'ember-block-slots'

export default FrostPods.extend(SlotsMixin, {
  layout,
  classNames: [
    'top',
    'right',
    'frost-details-pod'
  ],
  icon: 'round-add'
});
