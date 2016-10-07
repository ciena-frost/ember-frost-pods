import Ember from 'ember'
import computed from 'ember-computed-decorators'
import PropTypesMixin, {PropTypes} from 'ember-prop-types'
import layout from 'ember-frost-pods/templates/components/frost-pods'
import transitions from 'ember-frost-pods/transitions/frost-pods'

const {
  Component,
  inject: {
    service
  },
  get,
  set
} = Ember

export default Component.extend(PropTypesMixin, {
  liquidFireTransitions: service(),

  classNames: [
    'frost-pods'
  ],
  classNameBindings: [
    'position'
  ],

  layout,
  propTypes: {
    position: PropTypes.string,
    active: PropTypes.string,
    customTransition: PropTypes.func
  },
  init() {
    this._super(...arguments)

    let liquidFireTransitions = get(this, 'liquidFireTransitions')
    liquidFireTransitions.map(get(this, 'customTransition') || transitions)

  },
  @computed('active')
  currentPod (active) {
    return get(this, 'pods')[active]
  },
  getDefaultProps () {
    return {
      position: 'top right'
    }
  },
  actions: {}
})
