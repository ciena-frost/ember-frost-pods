define('dummy/tests/acceptance/pods-test', ['exports', 'mocha', 'chai', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _mocha, _chai, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {

  /* eslint-disable */
  (0, _mocha.describe)('Acceptance: PodsTest', function () {
    var application = undefined;
    (0, _mocha.beforeEach)(function () {
      application = (0, _dummyTestsHelpersStartApp['default'])();
    });

    (0, _mocha.afterEach)(function () {
      (0, _dummyTestsHelpersDestroyApp['default'])(application);
    });

    (0, _mocha.it)('can visit /', function () {
      visit('/');
      click('#detailPodsId');
      andThen(function () {
        (0, _chai.expect)(currentPath()).to.equal('demo');
      });
    });
  });
  /* eslint-enable */
});
/* jshint expr:true */
define('dummy/tests/blanket-options', ['exports'], function (exports) {
  /* globals blanket, module */

  var options = {
    modulePrefix: 'ember-frost-pods',
    filter: '//.*ember-frost-pods/.*/',
    antifilter: '//.*(tests|template).*/',
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
      reporters: ['lcov'],
      autostart: true,
      lcovOptions: {
        outputFile: 'coverage/lcov.info',
        renamer: function renamer(fileName) {
          return fileName.replace('ember-frost-pods', 'addon') + '.js';
        }
      }
    }
  };

  if (typeof exports === 'undefined') {
    blanket.options(options);
  } else {
    module.exports = options;
  }
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('dummy/tests/helpers/resolver', ['exports', 'ember-resolver', 'dummy/config/environment'], function (exports, _emberResolver, _dummyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/integration/components/frost-details-pod-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('frost-details-pod', 'Integration: EmberFrostDetailsPodComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.3.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 21
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
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
          statements: [['content', 'frost-details-pod', ['loc', [null, [1, 0], [1, 21]]]]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('dummy/tests/integration/components/frost-pods-test', ['exports', 'chai', 'ember-mocha'], function (exports, _chai, _emberMocha) {

  (0, _emberMocha.describeComponent)('frost-pods', 'Integration: EmberFrostPodsComponent', {
    integration: true
  }, function () {
    (0, _emberMocha.it)('renders', function () {
      // Set any properties with this.set('myProperty', 'value')
      // Handle any actions with this.on('myAction', function (val) { ... })
      // Template block usage:
      // this.render(hbs`
      //   {{#frost-pods}}
      //     template content
      //   {{/frost-pods}}
      // `)

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.3.2',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
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
          statements: [['content', 'frost-pods', ['loc', [null, [1, 0], [1, 14]]]]],
          locals: [],
          templates: []
        };
      })()));
      (0, _chai.expect)(this.$()).to.have.length(1);
    });
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-mocha'], function (exports, _dummyTestsHelpersResolver, _emberMocha) {

  (0, _emberMocha.setResolver)(_dummyTestsHelpersResolver['default']);
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map