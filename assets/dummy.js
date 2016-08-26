"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember-resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _dummyConfigEnvironment) {

  var name = _dummyConfigEnvironment['default'].APP.name;
  var version = _dummyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('dummy/components/async-image', ['exports', 'ember-async-image/components/async-image'], function (exports, _emberAsyncImageComponentsAsyncImage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAsyncImageComponentsAsyncImage['default'];
    }
  });
});
define('dummy/components/block-slot', ['exports', 'ember-block-slots/components/block-slot'], function (exports, _emberBlockSlotsComponentsBlockSlot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsComponentsBlockSlot['default'];
    }
  });
});
define('dummy/components/frost-button', ['exports', 'ember-frost-core/components/frost-button'], function (exports, _emberFrostCoreComponentsFrostButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostButton['default'];
    }
  });
});
define('dummy/components/frost-checkbox', ['exports', 'ember-frost-core/components/frost-checkbox'], function (exports, _emberFrostCoreComponentsFrostCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostCheckbox['default'];
    }
  });
});
define('dummy/components/frost-combobox', ['exports', 'ember-frost-core/components/frost-combobox'], function (exports, _emberFrostCoreComponentsFrostCombobox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostCombobox['default'];
    }
  });
});
define('dummy/components/frost-details-pod', ['exports', 'ember-frost-pods/components/frost-details-pod'], function (exports, _emberFrostPodsComponentsFrostDetailsPod) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostPodsComponentsFrostDetailsPod['default'];
    }
  });
});
define('dummy/components/frost-icon', ['exports', 'ember-frost-core/components/frost-icon'], function (exports, _emberFrostCoreComponentsFrostIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostIcon['default'];
    }
  });
});
define('dummy/components/frost-link', ['exports', 'ember-frost-core/components/frost-link'], function (exports, _emberFrostCoreComponentsFrostLink) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostLink['default'];
    }
  });
});
define('dummy/components/frost-list-selection-indicator', ['exports', 'ember-frost-list/pods/components/frost-list-selection-indicator/component'], function (exports, _emberFrostListPodsComponentsFrostListSelectionIndicatorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostListPodsComponentsFrostListSelectionIndicatorComponent['default'];
    }
  });
});
define('dummy/components/frost-list', ['exports', 'ember-frost-list/pods/components/frost-list/component'], function (exports, _emberFrostListPodsComponentsFrostListComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostListPodsComponentsFrostListComponent['default'];
    }
  });
});
define('dummy/components/frost-loading', ['exports', 'ember-frost-core/components/frost-loading'], function (exports, _emberFrostCoreComponentsFrostLoading) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostLoading['default'];
    }
  });
});
define('dummy/components/frost-multi-select', ['exports', 'ember-frost-core/components/frost-multi-select'], function (exports, _emberFrostCoreComponentsFrostMultiSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostMultiSelect['default'];
    }
  });
});
define('dummy/components/frost-notification', ['exports', 'ember-frost-notifier/pods/components/frost-notification/component'], function (exports, _emberFrostNotifierPodsComponentsFrostNotificationComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostNotifierPodsComponentsFrostNotificationComponent['default'];
    }
  });
});
define('dummy/components/frost-notifier', ['exports', 'ember-frost-notifier/pods/components/frost-notifier/component'], function (exports, _emberFrostNotifierPodsComponentsFrostNotifierComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostNotifierPodsComponentsFrostNotifierComponent['default'];
    }
  });
});
define('dummy/components/frost-password', ['exports', 'ember-frost-core/components/frost-password'], function (exports, _emberFrostCoreComponentsFrostPassword) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostPassword['default'];
    }
  });
});
define('dummy/components/frost-pods', ['exports', 'ember-frost-pods/components/frost-pods'], function (exports, _emberFrostPodsComponentsFrostPods) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostPodsComponentsFrostPods['default'];
    }
  });
});
define('dummy/components/frost-radio-button-input', ['exports', 'ember-frost-core/components/frost-radio-button-input'], function (exports, _emberFrostCoreComponentsFrostRadioButtonInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostRadioButtonInput['default'];
    }
  });
});
define('dummy/components/frost-radio-button', ['exports', 'ember-frost-core/components/frost-radio-button'], function (exports, _emberFrostCoreComponentsFrostRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostRadioButton['default'];
    }
  });
});
define('dummy/components/frost-radio-group', ['exports', 'ember-frost-core/components/frost-radio-group'], function (exports, _emberFrostCoreComponentsFrostRadioGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostRadioGroup['default'];
    }
  });
});
define('dummy/components/frost-scroll', ['exports', 'ember-frost-core/components/frost-scroll'], function (exports, _emberFrostCoreComponentsFrostScroll) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostScroll['default'];
    }
  });
});
define('dummy/components/frost-select-li', ['exports', 'ember-frost-core/components/frost-select-li'], function (exports, _emberFrostCoreComponentsFrostSelectLi) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostSelectLi['default'];
    }
  });
});
define('dummy/components/frost-select', ['exports', 'ember-frost-core/components/frost-select'], function (exports, _emberFrostCoreComponentsFrostSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostSelect['default'];
    }
  });
});
define('dummy/components/frost-text', ['exports', 'ember-frost-core/components/frost-text'], function (exports, _emberFrostCoreComponentsFrostText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostText['default'];
    }
  });
});
define('dummy/components/frost-textarea', ['exports', 'ember-frost-core/components/frost-textarea'], function (exports, _emberFrostCoreComponentsFrostTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreComponentsFrostTextarea['default'];
    }
  });
});
define("dummy/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('dummy/components/in-viewport', ['exports', 'smoke-and-mirrors/components/in-viewport/component'], function (exports, _smokeAndMirrorsComponentsInViewportComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _smokeAndMirrorsComponentsInViewportComponent['default'];
    }
  });
});
define("dummy/components/lf-outlet", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireEmberInternals.StaticOutlet;
    }
  });
});
define("dummy/components/lf-overlay", ["exports", "liquid-fire/components/lf-overlay"], function (exports, _liquidFireComponentsLfOverlay) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfOverlay["default"];
    }
  });
});
define("dummy/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("dummy/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("dummy/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define("dummy/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("dummy/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("dummy/components/liquid-modal", ["exports", "liquid-fire/components/liquid-modal"], function (exports, _liquidFireComponentsLiquidModal) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidModal["default"];
    }
  });
});
define("dummy/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("dummy/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('dummy/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define("dummy/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("dummy/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define("dummy/components/lm-container", ["exports", "liquid-fire/components/lm-container"], function (exports, _liquidFireComponentsLmContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLmContainer["default"];
    }
  });
});
define('dummy/components/occludable-area', ['exports', 'smoke-and-mirrors/components/occludable-area/component'], function (exports, _smokeAndMirrorsComponentsOccludableAreaComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _smokeAndMirrorsComponentsOccludableAreaComponent['default'];
    }
  });
});
define('dummy/components/one-way-checkbox', ['exports', 'ember-one-way-controls/components/one-way-checkbox'], function (exports, _emberOneWayControlsComponentsOneWayCheckbox) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayCheckbox['default'];
    }
  });
});
define('dummy/components/one-way-color', ['exports', 'ember-one-way-controls/components/one-way-color'], function (exports, _emberOneWayControlsComponentsOneWayColor) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayColor['default'];
    }
  });
});
define('dummy/components/one-way-date', ['exports', 'ember-one-way-controls/components/one-way-date'], function (exports, _emberOneWayControlsComponentsOneWayDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDate['default'];
    }
  });
});
define('dummy/components/one-way-datetime-local', ['exports', 'ember-one-way-controls/components/one-way-datetime-local'], function (exports, _emberOneWayControlsComponentsOneWayDatetimeLocal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayDatetimeLocal['default'];
    }
  });
});
define('dummy/components/one-way-email', ['exports', 'ember-one-way-controls/components/one-way-email'], function (exports, _emberOneWayControlsComponentsOneWayEmail) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayEmail['default'];
    }
  });
});
define('dummy/components/one-way-file', ['exports', 'ember-one-way-controls/components/one-way-file'], function (exports, _emberOneWayControlsComponentsOneWayFile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayFile['default'];
    }
  });
});
define('dummy/components/one-way-hidden', ['exports', 'ember-one-way-controls/components/one-way-hidden'], function (exports, _emberOneWayControlsComponentsOneWayHidden) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayHidden['default'];
    }
  });
});
define('dummy/components/one-way-input', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _emberOneWayControlsComponentsOneWayInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayInput['default'];
    }
  });
});
define('dummy/components/one-way-month', ['exports', 'ember-one-way-controls/components/one-way-month'], function (exports, _emberOneWayControlsComponentsOneWayMonth) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayMonth['default'];
    }
  });
});
define('dummy/components/one-way-number', ['exports', 'ember-one-way-controls/components/one-way-number'], function (exports, _emberOneWayControlsComponentsOneWayNumber) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayNumber['default'];
    }
  });
});
define('dummy/components/one-way-password', ['exports', 'ember-one-way-controls/components/one-way-password'], function (exports, _emberOneWayControlsComponentsOneWayPassword) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayPassword['default'];
    }
  });
});
define('dummy/components/one-way-radio', ['exports', 'ember-one-way-controls/components/one-way-radio'], function (exports, _emberOneWayControlsComponentsOneWayRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRadio['default'];
    }
  });
});
define('dummy/components/one-way-range', ['exports', 'ember-one-way-controls/components/one-way-range'], function (exports, _emberOneWayControlsComponentsOneWayRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayRange['default'];
    }
  });
});
define('dummy/components/one-way-search', ['exports', 'ember-one-way-controls/components/one-way-search'], function (exports, _emberOneWayControlsComponentsOneWaySearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySearch['default'];
    }
  });
});
define('dummy/components/one-way-select', ['exports', 'ember-one-way-controls/components/one-way-select'], function (exports, _emberOneWayControlsComponentsOneWaySelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelect['default'];
    }
  });
});
define('dummy/components/one-way-select/option', ['exports', 'ember-one-way-controls/components/one-way-select/option'], function (exports, _emberOneWayControlsComponentsOneWaySelectOption) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWaySelectOption['default'];
    }
  });
});
define('dummy/components/one-way-tel', ['exports', 'ember-one-way-controls/components/one-way-tel'], function (exports, _emberOneWayControlsComponentsOneWayTel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTel['default'];
    }
  });
});
define('dummy/components/one-way-text', ['exports', 'ember-one-way-controls/components/one-way-text'], function (exports, _emberOneWayControlsComponentsOneWayText) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayText['default'];
    }
  });
});
define('dummy/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-textarea'], function (exports, _emberOneWayControlsComponentsOneWayTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTextarea['default'];
    }
  });
});
define('dummy/components/one-way-time', ['exports', 'ember-one-way-controls/components/one-way-time'], function (exports, _emberOneWayControlsComponentsOneWayTime) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayTime['default'];
    }
  });
});
define('dummy/components/one-way-url', ['exports', 'ember-one-way-controls/components/one-way-url'], function (exports, _emberOneWayControlsComponentsOneWayUrl) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayUrl['default'];
    }
  });
});
define('dummy/components/one-way-week', ['exports', 'ember-one-way-controls/components/one-way-week'], function (exports, _emberOneWayControlsComponentsOneWayWeek) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsComponentsOneWayWeek['default'];
    }
  });
});
define('dummy/components/pre-render', ['exports', 'smoke-and-mirrors/components/pre-render/component'], function (exports, _smokeAndMirrorsComponentsPreRenderComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _smokeAndMirrorsComponentsPreRenderComponent['default'];
    }
  });
});
define('dummy/components/vertical-collection', ['exports', 'smoke-and-mirrors/components/vertical-collection/component'], function (exports, _smokeAndMirrorsComponentsVerticalCollectionComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _smokeAndMirrorsComponentsVerticalCollectionComponent['default'];
    }
  });
});
define('dummy/components/vertical-item', ['exports', 'smoke-and-mirrors/components/vertical-item/component'], function (exports, _smokeAndMirrorsComponentsVerticalItemComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _smokeAndMirrorsComponentsVerticalItemComponent['default'];
    }
  });
});
define('dummy/components/yield-slot', ['exports', 'ember-block-slots/components/yield-slot'], function (exports, _emberBlockSlotsComponentsYieldSlot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsComponentsYieldSlot['default'];
    }
  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define("dummy/enhancers/index", ["exports"], function (exports) {
  exports["default"] = function () {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }

    return function () {
      if (funcs.length === 0) {
        return arguments[0];
      }
      var last = funcs[funcs.length - 1];
      return last.apply(undefined, arguments);
    };
  };
});
define('dummy/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/block-params', ['exports', 'ember-block-slots/helpers/block-params'], function (exports, _emberBlockSlotsHelpersBlockParams) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsHelpersBlockParams['default'];
    }
  });
  Object.defineProperty(exports, 'blockParams', {
    enumerable: true,
    get: function get() {
      return _emberBlockSlotsHelpersBlockParams.blockParams;
    }
  });
});
define('dummy/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('dummy/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/hook', ['exports', 'ember-hook/helpers/hook'], function (exports, _emberHookHelpersHook) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook['default'];
    }
  });
  Object.defineProperty(exports, 'hook', {
    enumerable: true,
    get: function get() {
      return _emberHookHelpersHook.hook;
    }
  });
});
define('dummy/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/one-way-select/contains', ['exports', 'ember-one-way-controls/helpers/one-way-select/contains'], function (exports, _emberOneWayControlsHelpersOneWaySelectContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberOneWayControlsHelpersOneWaySelectContains.contains;
    }
  });
});
define('dummy/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('dummy/helpers/perform', ['exports', 'ember', 'ember-concurrency/-task-property', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyTaskProperty, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    var task = args[0];
    if (!(task instanceof _emberConcurrencyTaskProperty.Task)) {
      _ember['default'].assert('The first argument passed to the `perform` helper should be a Task object (without quotes); you passed ' + task, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('dummy/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_dummyConfigEnvironment['default'].APP.name, _dummyConfigEnvironment['default'].APP.version)
  };
});
define('dummy/initializers/component-prop-types', ['exports', 'ember-prop-types/initializers/component-prop-types'], function (exports, _emberPropTypesInitializersComponentPropTypes) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPropTypesInitializersComponentPropTypes['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberPropTypesInitializersComponentPropTypes.initialize;
    }
  });
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/server'], function (exports, _emberCliMirageUtilsReadModules, _dummyConfigEnvironment, _dummyMirageConfig, _emberCliMirageServer) {
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }
      var environment = _dummyConfigEnvironment['default'].environment;

      if (_shouldUseMirage(environment, _dummyConfigEnvironment['default']['ember-cli-mirage'])) {
        var modules = (0, _emberCliMirageUtilsReadModules['default'])(_dummyConfigEnvironment['default'].modulePrefix);
        var options = _.assign(modules, { environment: environment, baseConfig: _dummyMirageConfig['default'], testConfig: _dummyMirageConfig.testConfig });

        new _emberCliMirageServer['default'](options);
      }
    }
  };

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('dummy/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/ember-hook/initialize', ['exports', 'ember-hook/initializers/ember-hook/initialize'], function (exports, _emberHookInitializersEmberHookInitialize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersEmberHookInitialize['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberHookInitializersEmberHookInitialize.initialize;
    }
  });
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/initializers/liquid-fire", ["exports", "liquid-fire/router-dsl-ext", "liquid-fire/ember-internals"], function (exports, _liquidFireRouterDslExt, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('dummy/initializers/notifier-service', ['exports'], function (exports) {
  exports['default'] = {
    name: 'notifier-service',

    initialize: function initialize(application) {
      //    application.register('service:notifier', NotifierService)
      application.inject('route', 'notifier', 'service:notifier');
    }
  };
});
define('dummy/initializers/raf-polyfill', ['exports', 'ember-run-raf/initializers/raf-polyfill'], function (exports, _emberRunRafInitializersRafPolyfill) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRunRafInitializersRafPolyfill['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberRunRafInitializersRafPolyfill.initialize;
    }
  });
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/svg-use-polyfill', ['exports', 'npm:svg4everybody', 'ember-frost-core/instance-initializers/svg-use-polyfill'], function (exports, _npmSvg4everybody, _emberFrostCoreInstanceInitializersSvgUsePolyfill) {
  // eslint-disable-line no-unused-vars

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreInstanceInitializersSvgUsePolyfill['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreInstanceInitializersSvgUsePolyfill.initialize;
    }
  });
});
define('dummy/middleware/index', ['exports', 'npm:redux-thunk'], function (exports, _npmReduxThunk) {

  var resolved = _npmReduxThunk['default']['default'] ? _npmReduxThunk['default']['default'] : _npmReduxThunk['default'];

  exports['default'] = [resolved];
});
define('dummy/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {
    this.get('/dummy-records', function (db) {
      return {
        data: db['dummy-records'].map(function (attrs) {
          return {
            type: 'dummy-records',
            id: attrs.id,
            attributes: attrs
          };
        })
      };
    });

    this.passthrough();
  };
});
define('dummy/mirage/factories/dummy-record', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage['default'].Factory.extend({
    // name: 'Pete',                         // strings
    // age: 20,                              // numbers
    // tall: true,                           // booleans

    // email: function (i) {                  // and functions
    //   return 'person' + i + '@test.com'
    // },

    // firstName: faker.name.firstName,       // using faker
    // lastName: faker.name.firstName,
    // zipCode: faker.address.zipCode
    alias: function alias() {
      return _emberCliMirage.faker.commerce.productName();
    }
  });
});
/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
define('dummy/mirage/scenarios/default', ['exports'], function (exports) {
  exports['default'] = function (server) {
    server.createList('dummy-record', 20);
  };
});
define('dummy/models/dummy-record', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    alias: _emberData['default'].attr('string')
  });
});
define('dummy/pods/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('dummy/pods/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/pods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "dummy/pods/application/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "notification-message", [], ["notification", ["subexpr", "@mut", [["get", "notification", ["loc", [null, [3, 40], [3, 52]]]]], [], []]], ["loc", [null, [3, 4], [3, 54]]]]],
        locals: ["notification"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "dummy/pods/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dummy-notification-container");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dummy-body");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dummy-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "notifications", ["loc", [null, [2, 10], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]], ["content", "outlet", ["loc", [null, [9, 4], [9, 14]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('dummy/pods/components/dummy-detail-sub-pod/component', ['exports', 'ember-frost-pods/components/frost-pods', 'dummy/pods/components/dummy-detail-sub-pod/template'], function (exports, _emberFrostPodsComponentsFrostPods, _dummyPodsComponentsDummyDetailSubPodTemplate) {
  exports['default'] = _emberFrostPodsComponentsFrostPods['default'].extend({
    layout: _dummyPodsComponentsDummyDetailSubPodTemplate['default'],
    classNames: ['top', 'right', 'dummy-detail-pods', 'pod', 'context']
  });
});
define("dummy/pods/components/dummy-detail-sub-pod/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 6,
              "column": 79
            }
          },
          "moduleName": "dummy/pods/components/dummy-detail-sub-pod/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "id", "testButtonId");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("/");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element0);
          morphs[1] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["changePod", ["get", "stack", ["loc", [null, [6, 53], [6, 58]]]]], [], ["loc", [null, [6, 32], [6, 60]]]], ["content", "stack", ["loc", [null, [6, 61], [6, 70]]]]],
        locals: ["stack"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 19
            },
            "end": {
              "line": 34,
              "column": 73
            }
          },
          "moduleName": "dummy/pods/components/dummy-detail-sub-pod/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Related");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 19
            },
            "end": {
              "line": 35,
              "column": 73
            }
          },
          "moduleName": "dummy/pods/components/dummy-detail-sub-pod/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Actions");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 37,
            "column": 0
          }
        },
        "moduleName": "dummy/pods/components/dummy-detail-sub-pod/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "pod context");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "header");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "close");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "frost-test");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "title");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "primary");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "secondary");
        var el5 = dom.createTextNode("Additional attributes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "session with-bottom");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "property");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("IP address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("192.0.1.2");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "property");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Lat, Long");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("42.66, -73.76");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "property");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "title");
        var el6 = dom.createTextNode("Address");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "value");
        var el6 = dom.createTextNode("Undefined");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "bottom");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 1]);
        var element2 = dom.childAt(fragment, [2]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1, 1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        return morphs;
      },
      statements: [["block", "each", [["get", "pod.podNames", ["loc", [null, [5, 14], [5, 26]]]]], [], 0, null, ["loc", [null, [5, 6], [6, 88]]]], ["content", "podLayerAlias", ["loc", [null, [10, 25], [10, 42]]]], ["block", "frost-button", [], ["class", "small secondary text"], 1, null, ["loc", [null, [34, 19], [34, 90]]]], ["block", "frost-button", [], ["class", "small secondary text"], 2, null, ["loc", [null, [35, 19], [35, 90]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define('dummy/pods/components/dummy-map-pods/component', ['exports', 'ember-frost-pods/components/frost-pods', 'dummy/pods/components/dummy-map-pods/template'], function (exports, _emberFrostPodsComponentsFrostPods, _dummyPodsComponentsDummyMapPodsTemplate) {
  exports['default'] = _emberFrostPodsComponentsFrostPods['default'].extend({
    layout: _dummyPodsComponentsDummyMapPodsTemplate['default'],
    classNames: ['top', 'right', 'dummy-map-pods']
  });
});
define("dummy/pods/components/dummy-map-pods/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["empty-body"]
          },
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 1
              },
              "end": {
                "line": 29,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("25 paths");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("8 NE, 99 placemarker, 1500 KM");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("59 links");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "critical");
            var el6 = dom.createTextNode("7 down");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(", 10 unassociated");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("OTDR traces");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("1 done");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 32,
                    "column": 20
                  },
                  "end": {
                    "line": 34,
                    "column": 20
                  }
                },
                "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                      ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "frost-icon", [], ["path", "frost/chevron"], ["loc", [null, [33, 22], [33, 57]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 2
                },
                "end": {
                  "line": 49,
                  "column": 2
                }
              },
              "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n                        Child title\n                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "body");
              var el3 = dom.createTextNode("\n                    Child context\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod actions primary");
              var el2 = dom.createTextNode("\n                Child primary action\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod actions secondary");
              var el2 = dom.createTextNode("\n                Child secondary action\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
              return morphs;
            },
            statements: [["block", "frost-button", [], ["class", "close tertiary icon", "onClick", ["subexpr", "action", ["closePod"], [], ["loc", [null, [32, 72], [32, 91]]]]], 0, null, ["loc", [null, [32, 20], [34, 37]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 29,
                "column": 2
              },
              "end": {
                "line": 49,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-if", [["get", "podLayer.child", ["loc", [null, [29, 19], [29, 33]]]]], [], 0, null, ["loc", [null, [29, 2], [49, 2]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 50,
              "column": 1
            }
          },
          "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-if", [["get", "podLayer.root", ["loc", [null, [4, 14], [4, 27]]]]], ["class", "liquid-pods"], 0, 1, ["loc", [null, [4, 1], [49, 16]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 51,
            "column": 0
          }
        },
        "moduleName": "dummy/pods/components/dummy-map-pods/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "liquid-unless", [["get", "isPodVisible", ["loc", [null, [1, 17], [1, 29]]]]], [], 0, 1, ["loc", [null, [1, 0], [50, 19]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/pods/components/dummy-node-pods/component', ['exports', 'ember-frost-pods/components/frost-pods', 'dummy/pods/components/dummy-node-pods/template'], function (exports, _emberFrostPodsComponentsFrostPods, _dummyPodsComponentsDummyNodePodsTemplate) {
  exports['default'] = _emberFrostPodsComponentsFrostPods['default'].extend({
    layout: _dummyPodsComponentsDummyNodePodsTemplate['default'],
    classNames: ['top', 'right', 'dummy-node-pods']
  });
});
define("dummy/pods/components/dummy-node-pods/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 1
              },
              "end": {
                "line": 57,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("NodeD [Upper Sandusky CO]");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "property");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "title");
            var el5 = dom.createTextNode("IP address");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "value");
            var el5 = dom.createTextNode("192.0.1.2");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "property");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "title");
            var el5 = dom.createTextNode("Lat, Long");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "value");
            var el5 = dom.createTextNode("42.66, -73.76");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "row");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "property");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "title");
            var el5 = dom.createTextNode("Address");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "value");
            var el5 = dom.createTextNode("Undefined");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("5 Links");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "critical");
            var el6 = dom.createTextNode("3 down");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(", 1 unassociated");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context action");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("15 Alarms");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("\n                        ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "critical");
            var el6 = dom.createTextNode("5C");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                        ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "major");
            var el6 = dom.createTextNode("5M");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                        ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "warning");
            var el6 = dom.createTextNode("5w");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n                    ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("OTDR traces");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("1 recent");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element8 = dom.childAt(fragment, [5]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element8);
            return morphs;
          },
          statements: [["element", "action", [["subexpr", "action", ["openPod", "alarms", "Alarms"], [], ["loc", [null, [36, 49], [36, 85]]]]], [], ["loc", [null, [36, 40], [36, 87]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 62,
                    "column": 7
                  },
                  "end": {
                    "line": 64,
                    "column": 7
                  }
                },
                "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                                ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("span");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("/");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element4 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createElementMorph(element4);
                morphs[1] = dom.createMorphAt(element4, 0, 0);
                return morphs;
              },
              statements: [["element", "action", [["subexpr", "action", ["changePod", ["get", "stack", ["loc", [null, [63, 67], [63, 72]]]]], [], ["loc", [null, [63, 47], [63, 73]]]]], [], ["loc", [null, [63, 38], [63, 75]]]], ["content", "stack", ["loc", [null, [63, 76], [63, 85]]]]],
              locals: ["stack"],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 72,
                    "column": 16
                  },
                  "end": {
                    "line": 74,
                    "column": 24
                  }
                },
                "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "frost-icon", [], ["icon", "frost/chevron"], ["loc", [null, [73, 26], [73, 61]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 57,
                  "column": 2
                },
                "end": {
                  "line": 112,
                  "column": 2
                }
              },
              "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "breadcrumb action");
              var el5 = dom.createTextNode("\n");
              dom.appendChild(el4, el5);
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("                        ");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "primary");
              var el5 = dom.createComment("");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "primary");
              var el5 = dom.createTextNode("Child title");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "secondary");
              var el5 = dom.createTextNode("Subtext");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "body");
              var el3 = dom.createTextNode("\n                    Child context\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context action");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "primary");
              var el5 = dom.createTextNode("6 Alarms type-1 Detail");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "secondary");
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "critical");
              var el6 = dom.createTextNode("2C");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "major");
              var el6 = dom.createTextNode("2M");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "warning");
              var el6 = dom.createTextNode("2w");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                        ");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context action");
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "primary");
              var el5 = dom.createTextNode("9 Alarms type-2 Detail");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                        ");
              dom.appendChild(el3, el4);
              var el4 = dom.createElement("div");
              dom.setAttribute(el4, "class", "secondary");
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "critical");
              var el6 = dom.createTextNode("3C");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "major");
              var el6 = dom.createTextNode("3M");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                            ");
              dom.appendChild(el4, el5);
              var el5 = dom.createElement("span");
              dom.setAttribute(el5, "class", "warning");
              var el6 = dom.createTextNode("3w");
              dom.appendChild(el5, el6);
              dom.appendChild(el4, el5);
              var el5 = dom.createTextNode("\n                        ");
              dom.appendChild(el4, el5);
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n                    ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n		");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element5 = dom.childAt(fragment, [1, 1, 1]);
              var element6 = dom.childAt(fragment, [5]);
              var element7 = dom.childAt(fragment, [7]);
              var morphs = new Array(5);
              morphs[0] = dom.createMorphAt(dom.childAt(element5, [1]), 1, 1);
              morphs[1] = dom.createMorphAt(dom.childAt(element5, [3]), 0, 0);
              morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 1, 1);
              morphs[3] = dom.createElementMorph(element6);
              morphs[4] = dom.createElementMorph(element7);
              return morphs;
            },
            statements: [["block", "each", [["get", "podNames", ["loc", [null, [62, 15], [62, 23]]]]], [], 0, null, ["loc", [null, [62, 7], [64, 16]]]], ["content", "podLayerAlias", ["loc", [null, [66, 45], [66, 62]]]], ["block", "frost-button", [], ["class", "close tertiary icon", "onClick", ["subexpr", "action", ["closePod"], [], ["loc", [null, [72, 68], [72, 87]]]]], 1, null, ["loc", [null, [72, 16], [74, 41]]]], ["element", "action", [["subexpr", "action", ["openPod", "alarmsT1", "Type-1 Alarms"], [], ["loc", [null, [86, 53], [86, 98]]]]], [], ["loc", [null, [86, 44], [86, 100]]]], ["element", "action", [["subexpr", "action", ["openPod", "alarmsT2", "Type-2 Alarms"], [], ["loc", [null, [99, 53], [99, 98]]]]], [], ["loc", [null, [99, 44], [99, 100]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 57,
                "column": 2
              },
              "end": {
                "line": 112,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-if", [["get", "podLayer.alarms", ["loc", [null, [57, 19], [57, 34]]]]], [], 0, null, ["loc", [null, [57, 2], [112, 2]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child2 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 119,
                  "column": 7
                },
                "end": {
                  "line": 121,
                  "column": 7
                }
              },
              "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("/");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element2 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element2);
              morphs[1] = dom.createMorphAt(element2, 0, 0);
              return morphs;
            },
            statements: [["element", "action", [["subexpr", "action", ["changePod", ["get", "stack", ["loc", [null, [120, 67], [120, 72]]]]], [], ["loc", [null, [120, 47], [120, 73]]]]], [], ["loc", [null, [120, 38], [120, 75]]]], ["content", "stack", ["loc", [null, [120, 76], [120, 85]]]]],
            locals: ["stack"],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 129,
                  "column": 16
                },
                "end": {
                  "line": 131,
                  "column": 24
                }
              },
              "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "frost-icon", [], ["icon", "frost/chevron"], ["loc", [null, [130, 26], [130, 61]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 2
              },
              "end": {
                "line": 150,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "breadcrumb action");
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("                        ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("Child title");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("Subtext");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "body");
            var el3 = dom.createTextNode("\n                    Child context\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("Description");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("Oh furniture acuteness suspected continual\n                        ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element3 = dom.childAt(fragment, [1, 1, 1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "podNames", ["loc", [null, [119, 15], [119, 23]]]]], [], 0, null, ["loc", [null, [119, 7], [121, 16]]]], ["content", "podLayerAlias", ["loc", [null, [123, 45], [123, 62]]]], ["block", "frost-button", [], ["class", "close tertiary icon", "onClick", ["subexpr", "action", ["closePod"], [], ["loc", [null, [129, 68], [129, 87]]]]], 1, null, ["loc", [null, [129, 16], [131, 41]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child3 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 157,
                  "column": 7
                },
                "end": {
                  "line": 159,
                  "column": 7
                }
              },
              "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("/");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [1]);
              var morphs = new Array(2);
              morphs[0] = dom.createElementMorph(element0);
              morphs[1] = dom.createMorphAt(element0, 0, 0);
              return morphs;
            },
            statements: [["element", "action", [["subexpr", "action", ["changePod", ["get", "stack", ["loc", [null, [158, 67], [158, 72]]]]], [], ["loc", [null, [158, 47], [158, 73]]]]], [], ["loc", [null, [158, 38], [158, 75]]]], ["content", "stack", ["loc", [null, [158, 76], [158, 85]]]]],
            locals: ["stack"],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 167,
                  "column": 16
                },
                "end": {
                  "line": 169,
                  "column": 24
                }
              },
              "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "frost-icon", [], ["icon", "frost/chevron"], ["loc", [null, [168, 26], [168, 61]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 152,
                "column": 2
              },
              "end": {
                "line": 188,
                "column": 2
              }
            },
            "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "breadcrumb action");
            var el5 = dom.createTextNode("\n");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("                        ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("Child title");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("Subtext");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "body");
            var el3 = dom.createTextNode("\n                    Child context\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "header");
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("div");
            dom.setAttribute(el3, "class", "title");
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "primary");
            var el5 = dom.createTextNode("Description");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                        ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("div");
            dom.setAttribute(el4, "class", "secondary");
            var el5 = dom.createTextNode("Oh furniture acuteness suspected continual\n                        ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1, 1, 1]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
            morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3, 1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "podNames", ["loc", [null, [157, 15], [157, 23]]]]], [], 0, null, ["loc", [null, [157, 7], [159, 16]]]], ["content", "podLayerAlias", ["loc", [null, [161, 45], [161, 62]]]], ["block", "frost-button", [], ["class", "close tertiary icon", "onClick", ["subexpr", "action", ["closePod"], [], ["loc", [null, [167, 68], [167, 87]]]]], 1, null, ["loc", [null, [167, 16], [169, 41]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 194,
              "column": 1
            }
          },
          "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["block", "liquid-if", [["get", "podLayer.root", ["loc", [null, [4, 14], [4, 27]]]]], ["class", "liquid-pods"], 0, 1, ["loc", [null, [4, 1], [112, 16]]]], ["block", "liquid-if", [["get", "podLayer.alarmsT1", ["loc", [null, [114, 15], [114, 32]]]]], ["class", "liquid-pods"], 2, null, ["loc", [null, [114, 2], [150, 16]]]], ["block", "liquid-if", [["get", "podLayer.alarmsT2", ["loc", [null, [152, 15], [152, 32]]]]], ["class", "liquid-pods"], 3, null, ["loc", [null, [152, 2], [188, 16]]]]],
        locals: [],
        templates: [child0, child1, child2, child3]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 195,
            "column": 0
          }
        },
        "moduleName": "dummy/pods/components/dummy-node-pods/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "liquid-if", [["get", "isPodVisible", ["loc", [null, [1, 13], [1, 25]]]]], [], 0, null, ["loc", [null, [1, 0], [194, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('dummy/pods/components/dummy-search-pods/component', ['exports', 'ember', 'ember-frost-pods/components/frost-pods', 'dummy/pods/components/dummy-search-pods/template'], function (exports, _ember, _emberFrostPodsComponentsFrostPods, _dummyPodsComponentsDummySearchPodsTemplate) {
  exports['default'] = _emberFrostPodsComponentsFrostPods['default'].extend({
    layout: _dummyPodsComponentsDummySearchPodsTemplate['default'],
    classNames: ['top', 'right', 'dummy-search-pods'],

    _records: _ember['default'].computed('records', function () {
      return this.get('records').map(function (record) {
        record.set('record-type', 'custom');
        return record;
      });
    }),

    actions: {
      filterList: function filterList(attrs) {
        console.log(attrs.value);
      },

      selected: function selected(attrs) {
        console.log(attrs);
      }
    }
  });
});
define("dummy/pods/components/dummy-search-pods/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["empty-body"]
          },
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 12,
                    "column": 5
                  },
                  "end": {
                    "line": 16,
                    "column": 5
                  }
                },
                "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("						");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                var el2 = dom.createTextNode("\n							");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n						");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
                return morphs;
              },
              statements: [["content", "record.alias", ["loc", [null, [14, 7], [14, 23]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 4
                },
                "end": {
                  "line": 17,
                  "column": 4
                }
              },
              "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["subexpr", "eq", [["get", "record.record-type", ["loc", [null, [12, 15], [12, 33]]]], "custom"], [], ["loc", [null, [12, 11], [12, 43]]]]], [], 0, null, ["loc", [null, [12, 5], [16, 12]]]]],
            locals: ["record"],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 3
                },
                "end": {
                  "line": 23,
                  "column": 3
                }
              },
              "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("				Open child pod\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 1
              },
              "end": {
                "line": 28,
                "column": 1
              }
            },
            "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod context");
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "title");
            var el3 = dom.createTextNode("\n				Dummy records\n			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n			");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "body");
            var el3 = dom.createTextNode("\n				");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("			");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod actions primary");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n		");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "pod actions secondary");
            var el2 = dom.createTextNode("\n			Root secondary action\n		");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1, 3]);
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(element0, 1, 1);
            morphs[1] = dom.createMorphAt(element0, 3, 3);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
            return morphs;
          },
          statements: [["inline", "frost-text", [], ["id", "action", "onInput", ["subexpr", "action", ["filterList"], [], ["loc", [null, [10, 37], [10, 58]]]]], ["loc", [null, [10, 4], [10, 60]]]], ["block", "frost-list", [], ["onSelect", ["subexpr", "action", ["selected"], [], ["loc", [null, [11, 27], [11, 46]]]], "records", ["subexpr", "@mut", [["get", "_records", ["loc", [null, [11, 55], [11, 63]]]]], [], []]], 0, null, ["loc", [null, [11, 4], [17, 19]]]], ["block", "frost-button", [], ["class", "primary text", "onClick", ["subexpr", "action", ["openPod", "child"], [], ["loc", [null, [21, 48], [21, 74]]]]], 1, null, ["loc", [null, [21, 3], [23, 20]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.6.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 31,
                    "column": 4
                  },
                  "end": {
                    "line": 33,
                    "column": 4
                  }
                },
                "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "frost-icon", [], ["path", "frost/chevron"], ["loc", [null, [32, 5], [32, 40]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.6.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 28,
                  "column": 1
                },
                "end": {
                  "line": 48,
                  "column": 1
                }
              },
              "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("		");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod context");
              var el2 = dom.createTextNode("\n    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "header");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("        ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("div");
              dom.setAttribute(el3, "class", "title");
              var el4 = dom.createTextNode("\n				Child title\n			");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n    ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n			");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "body");
              var el3 = dom.createTextNode("\n				Child context\n			");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n		");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod actions primary");
              var el2 = dom.createTextNode("\n			Child primary action\n		");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n		");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "pod actions secondary");
              var el2 = dom.createTextNode("\n			Child secondary action\n		");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n	");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
              return morphs;
            },
            statements: [["block", "frost-button", [], ["class", "close tertiary icon", "onClick", ["subexpr", "action", ["closePod"], [], ["loc", [null, [31, 56], [31, 75]]]]], 0, null, ["loc", [null, [31, 4], [33, 21]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 28,
                "column": 1
              },
              "end": {
                "line": 48,
                "column": 1
              }
            },
            "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-if", [["get", "podLayer.child", ["loc", [null, [28, 18], [28, 32]]]]], [], 0, null, ["loc", [null, [28, 1], [48, 1]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 49,
              "column": 0
            }
          },
          "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-if", [["get", "podLayer.root", ["loc", [null, [4, 14], [4, 27]]]]], ["class", "liquid-pods"], 0, 1, ["loc", [null, [4, 1], [48, 15]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 50,
            "column": 0
          }
        },
        "moduleName": "dummy/pods/components/dummy-search-pods/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "liquid-unless", [["get", "isPodVisible", ["loc", [null, [1, 17], [1, 29]]]]], [], 0, 1, ["loc", [null, [1, 0], [49, 18]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('dummy/pods/demo/controller', ['exports', 'ember'], function (exports, _ember) {
  var Controller = _ember['default'].Controller;
  var computed = _ember['default'].computed;
  var A = _ember['default'].A;
  var inject = _ember['default'].inject;
  exports['default'] = Controller.extend({
    notifier: inject.service(),
    dummyRecords: computed.alias('model'),
    orientation: 'vertical',
    podsVisibility: A(),
    detailActions: A([{
      text: 'Details',
      priority: 'primary',
      action: function action() {
        this.get('targetObject.notifier').addNotification({
          message: 'Details was clicked!',
          type: 'success',
          autoClear: true,
          clearDuration: 1000
        });
      }
    }, {
      text: 'Rotate',
      priority: 'secondary',
      action: function action() {
        var orientation = this.get('orientation');
        this.set('orientation', orientation === 'vertical' ? 'horizontal' : 'vertical');
      }
    }]),
    isPodVisible: function isPodVisible(pod) {
      var podVisibility = this.get('podsVisibility').findBy('id', pod);
      if (podVisibility === undefined) {
        return false;
      }
      return podVisibility.get('isPodVisible');
    },

    isMapPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
      return this.get('isPodVisible').call(this, 'map');
    }),

    isNodePodVisible: computed('podsVisibility.@each.isPodVisible', function () {
      return this.get('isPodVisible').call(this, 'node');
    }),

    isSearchPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
      return this.get('isPodVisible').call(this, 'search');
    }),

    isDetailPodVisible: computed('podsVisibility.@each.isPodVisible', function () {
      return this.get('isPodVisible').call(this, 'detail');
    }),

    actions: {
      // TODO Revert to the initial pod on a canvas click

      togglePods: function togglePods(pod) {
        var podsVisibility = this.get('podsVisibility');
        if (podsVisibility.findBy('id', pod) === undefined) {
          podsVisibility.addObject(_ember['default'].Object.create({
            id: pod,
            isPodVisible: false
          }));
        }

        podsVisibility.forEach(function (podVisibility) {
          if (podVisibility.get('id') === pod) {
            podVisibility.toggleProperty('isPodVisible');
          } else {
            podVisibility.set('isPodVisible', false);
          }
        });
      },
      tabSelected: function tabSelected(tab) {
        this.set('selectedTab', tab);
      }
    }
  });
});
define('dummy/pods/demo/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('dummy-record');
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);
      controller.get('podsVisibility').clear();
      //    controller.get('podsVisibility').addObject(Ember.Object.create({
      //      id: 'node',
      //      isPodVisible: false
      //    }))
    }
  });
});
define("dummy/pods/demo/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 8
            },
            "end": {
              "line": 7,
              "column": 99
            }
          },
          "moduleName": "dummy/pods/demo/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Map pods");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 8
            },
            "end": {
              "line": 8,
              "column": 101
            }
          },
          "moduleName": "dummy/pods/demo/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Node pods");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 8
            },
            "end": {
              "line": 9,
              "column": 105
            }
          },
          "moduleName": "dummy/pods/demo/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Search pods");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 123
            }
          },
          "moduleName": "dummy/pods/demo/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Detail pods");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.6.0",
            "loc": {
              "source": null,
              "start": {
                "line": 35,
                "column": 10
              },
              "end": {
                "line": 46,
                "column": 10
              }
            },
            "moduleName": "dummy/pods/demo/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("              ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "item");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "title");
            var el3 = dom.createTextNode("\n                  ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n              ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
            return morphs;
          },
          statements: [["content", "item.alias", ["loc", [null, [43, 18], [43, 32]]]]],
          locals: ["item"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.6.0",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 6
            },
            "end": {
              "line": 48,
              "column": 6
            }
          },
          "moduleName": "dummy/pods/demo/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "property");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "title");
          var el4 = dom.createTextNode("IP address");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "value");
          var el4 = dom.createTextNode("192.0.1.2");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "property");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "title");
          var el4 = dom.createTextNode("Lat, Long");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "value");
          var el4 = dom.createTextNode("42.66, -73.76");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "frost-list", [], ["class", "frost-flex-1", "records", ["subexpr", "@mut", [["get", "dummyRecords", ["loc", [null, [37, 20], [37, 32]]]]], [], []], "selections", ["subexpr", "@mut", [["get", "selectedItems", ["loc", [null, [38, 23], [38, 36]]]]], [], []]], 0, null, ["loc", [null, [35, 10], [46, 25]]]]],
        locals: ["pod", "actions"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.6.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 52,
            "column": 0
          }
        },
        "moduleName": "dummy/pods/demo/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "dummy-body");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "dummy-content");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "frost-pods-demo");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "controls");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [5, 1]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element2, 1, 1);
        morphs[3] = dom.createMorphAt(element2, 3, 3);
        morphs[4] = dom.createMorphAt(element2, 5, 5);
        morphs[5] = dom.createMorphAt(element2, 7, 7);
        morphs[6] = dom.createMorphAt(element1, 3, 3);
        morphs[7] = dom.createMorphAt(element1, 5, 5);
        morphs[8] = dom.createMorphAt(element1, 7, 7);
        morphs[9] = dom.createMorphAt(element1, 9, 9);
        return morphs;
      },
      statements: [["content", "frost-notifier", ["loc", [null, [2, 2], [2, 20]]]], ["content", "outlet", ["loc", [null, [3, 2], [3, 12]]]], ["block", "frost-button", [], ["class", "medium secondary text", "onClick", ["subexpr", "action", ["togglePods", "map"], [], ["loc", [null, [7, 62], [7, 89]]]]], 0, null, ["loc", [null, [7, 8], [7, 116]]]], ["block", "frost-button", [], ["class", "medium secondary text", "onClick", ["subexpr", "action", ["togglePods", "node"], [], ["loc", [null, [8, 62], [8, 90]]]]], 1, null, ["loc", [null, [8, 8], [8, 118]]]], ["block", "frost-button", [], ["class", "medium secondary text", "onClick", ["subexpr", "action", ["togglePods", "search"], [], ["loc", [null, [9, 62], [9, 92]]]]], 2, null, ["loc", [null, [9, 8], [9, 122]]]], ["block", "frost-button", [], ["class", "medium secondary text", "id", "detailPodsId", "onClick", ["subexpr", "action", ["togglePods", "detail"], [], ["loc", [null, [10, 80], [10, 110]]]]], 3, null, ["loc", [null, [10, 8], [10, 140]]]], ["inline", "dummy-map-pods", [], ["isPodVisible", ["subexpr", "@mut", [["get", "isMapPodVisible", ["loc", [null, [12, 36], [12, 51]]]]], [], []]], ["loc", [null, [12, 6], [12, 53]]]], ["inline", "dummy-node-pods", [], ["isPodVisible", ["subexpr", "@mut", [["get", "isNodePodVisible", ["loc", [null, [13, 37], [13, 53]]]]], [], []]], ["loc", [null, [13, 6], [13, 55]]]], ["inline", "dummy-search-pods", [], ["isPodVisible", ["subexpr", "@mut", [["get", "isSearchPodVisible", ["loc", [null, [14, 39], [14, 57]]]]], [], []], "records", ["subexpr", "@mut", [["get", "dummyRecords", ["loc", [null, [14, 66], [14, 78]]]]], [], []]], ["loc", [null, [14, 6], [14, 80]]]], ["block", "frost-details-pod", [], ["menuActions", ["subexpr", "@mut", [["get", "detailActions", ["loc", [null, [17, 20], [17, 33]]]]], [], []], "isPodVisible", ["subexpr", "@mut", [["get", "isDetailPodVisible", ["loc", [null, [18, 21], [18, 39]]]]], [], []], "title", "Details Pod", "subTitle", "Subtitle", "description", "Small description", "orientation", ["subexpr", "@mut", [["get", "orientation", ["loc", [null, [22, 20], [22, 31]]]]], [], []]], 4, null, ["loc", [null, [16, 6], [48, 28]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("dummy/reducers/optional", ["exports"], function (exports) {
    //this is a simple pass thru that offers an extension point

    exports["default"] = function (combine) {
        return function (state, action) {
            return combine(state, action);
        };
    };

    ;
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('demo', { path: '/' });
  });

  exports['default'] = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/in-viewport', ['exports', 'smoke-and-mirrors/services/in-viewport'], function (exports, _smokeAndMirrorsServicesInViewport) {
  exports['default'] = _smokeAndMirrorsServicesInViewport['default'];
});
define("dummy/services/liquid-fire-modals", ["exports", "liquid-fire/modals"], function (exports, _liquidFireModals) {
  exports["default"] = _liquidFireModals["default"];
});
define("dummy/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
define('dummy/services/notifier', ['exports', 'ember-frost-notifier/pods/services/notifier'], function (exports, _emberFrostNotifierPodsServicesNotifier) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostNotifierPodsServicesNotifier['default'];
    }
  });
});
define('dummy/services/redux', ['exports', 'ember', 'npm:redux', 'dummy/reducers/index', 'dummy/enhancers/index', 'dummy/reducers/optional', 'dummy/middleware/index'], function (exports, _ember, _npmRedux, _dummyReducersIndex, _dummyEnhancersIndex, _dummyReducersOptional, _dummyMiddlewareIndex) {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

    var createStore = _npmRedux['default'].createStore;
    var applyMiddleware = _npmRedux['default'].applyMiddleware;
    var combineReducers = _npmRedux['default'].combineReducers;
    var compose = _npmRedux['default'].compose;

    var createStoreWithMiddleware = compose(applyMiddleware.apply(undefined, _toConsumableArray(_dummyMiddlewareIndex['default'])), _dummyEnhancersIndex['default'])(createStore);

    exports['default'] = _ember['default'].Service.extend({
        init: function init() {
            this.store = createStoreWithMiddleware((0, _dummyReducersOptional['default'])(combineReducers(_dummyReducersIndex['default'])));
            this._super.apply(this, arguments);
        },
        getState: function getState() {
            return this.store.getState();
        },
        dispatch: function dispatch(action) {
            return this.store.dispatch(action);
        },
        subscribe: function subscribe(func) {
            return this.store.subscribe(func);
        }
    });
});
define('dummy/transitions', ['exports'], function (exports) {
  // import { animate, Promise } from "liquid-fire";

  exports['default'] = function () {
    this.transition(this.hasClass('liquid-pods'), this.use('toLeft') // TODO Explode animation
    );
  };
});
define('dummy/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('dummy/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('dummy/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('dummy/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('dummy/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('dummy/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define('dummy/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define('dummy/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('dummy/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('dummy/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('dummy/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('dummy/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('dummy/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('dummy/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('dummy/utils/keycodes', ['exports', 'ember-frost-core/utils/keycodes'], function (exports, _emberFrostCoreUtilsKeycodes) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberFrostCoreUtilsKeycodes['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-frost-pods","version":"0.0.11+7bfa3ddc"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map