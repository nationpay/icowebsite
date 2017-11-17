webpackHotUpdate(0,{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(694);

var _index2 = _interopRequireDefault(_index);

var _reduxThunk = __webpack_require__(819);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(62);

var _reduxBatchedActions = __webpack_require__(303);

var _reduxPersist = __webpack_require__(902);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(_index2.default), undefined, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _reduxBatchedActions.enableBatching));

console.log('My store:: ', store.getState());

exports.default = store;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return KEY_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FLUSH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REHYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PERSIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PURGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_VERSION; });
var KEY_PREFIX = 'persist:';
var FLUSH = 'persist/FLUSH';
var REHYDRATE = 'persist/REHYDRATE';
var PAUSE = 'persist/PAUSE';
var PERSIST = 'persist/PERSIST';
var PURGE = 'persist/PURGE';
var REGISTER = 'persist/REGISTER';
var DEFAULT_VERSION = -1;

/***/ }),

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = persistReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stateReconciler_autoMergeLevel1__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createPersistoid__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getStoredState__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__purgeStoredState__ = __webpack_require__(901);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  @TODO add validation / handling for:
  - persisting a reducer which has nested _persist
  - handling actions that fire before reydrate is called
*/
function persistReducer(config, baseReducer) {
  if (process.env.NODE_ENV !== 'production') {
    if (!config) throw new Error('config is required for persistReducer');
    if (!config.key) throw new Error('key is required in persistor config');
    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using `import storageLocal from 'redux-persist/es/storages/local'");
  }

  var version = config.version !== undefined ? config.version : __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* DEFAULT_VERSION */];
  var debug = config.debug || false;
  var stateReconciler = config.stateReconciler === undefined ? __WEBPACK_IMPORTED_MODULE_1__stateReconciler_autoMergeLevel1__["a" /* default */] : config.stateReconciler;
  var getStoredState = config.getStoredState || __WEBPACK_IMPORTED_MODULE_3__getStoredState__["a" /* default */];
  var _persistoid = null;
  var _purge = false;
  var _paused = true;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowIgnore
    var defaultState = baseReducer(undefined, {
      type: 'redux-persist/default-state-probe'
    });
    if (Array.isArray(defaultState) || (typeof defaultState === 'undefined' ? 'undefined' : _typeof(defaultState)) !== 'object') console.error('redux-persist: does not yet support non plain object state.');
  }
  return function (state, action) {
    var _ref = state || {},
        _persist = _ref._persist,
        rest = _objectWithoutProperties(_ref, ['_persist']);

    var restState = rest;

    if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* PERSIST */]) {
      // @NOTE PERSIST resumes if paused.
      _paused = false;

      // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set
      if (!_persistoid) _persistoid = Object(__WEBPACK_IMPORTED_MODULE_2__createPersistoid__["a" /* default */])(config);

      // @NOTE PERSIST can be called multiple times, noop after the first
      if (_persist) return state;
      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');

      action.register(config.key);

      getStoredState(config).then(function (restoredState) {
        var migrate = config.migrate || function (s, v) {
          return Promise.resolve(s);
        };
        migrate(restoredState, version).then(function (migratedState) {
          action.rehydrate(config.key, migratedState);
        }, function (migrateErr) {
          if (process.env.NODE_ENV !== 'production' && migrateErr) console.error('redux-persist: migration error', migrateErr);
          action.rehydrate(config.key, undefined, migrateErr);
        });
      }, function (err) {
        action.rehydrate(config.key, undefined, err);
      });

      return _extends({}, baseReducer(restState, action), {
        _persist: { version: version, rehydrated: false }
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* PURGE */]) {
      _purge = true;
      action.result(Object(__WEBPACK_IMPORTED_MODULE_4__purgeStoredState__["a" /* default */])(config));
      return _extends({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FLUSH */]) {
      action.result(_persistoid && _persistoid.flush());
      return _extends({}, baseReducer(restState, action), {
        _persist: _persist
      });
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* PAUSE */]) {
      _paused = true;
    } else if (action.type === __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* REHYDRATE */]) {
      // noop on restState if purging
      if (_purge) return _extends({}, restState, {
        _persist: _extends({}, _persist, { rehydrated: true })

        // @NOTE if key does not match, will continue to default else below
      });if (action.key === config.key) {
        var reducedState = baseReducer(restState, action);
        var inboundState = action.payload;
        var reconciledRest = typeof stateReconciler === 'function' ? stateReconciler(state, inboundState, reducedState, config) : reducedState;

        return _extends({}, reconciledRest, {
          _persist: _extends({}, _persist, { rehydrated: true })
        });
      }
    }

    // if we have not already handled PERSIST, straight passthrough
    if (!_persist) return baseReducer(state, action);

    // otherwise, pull off _persist, run the reducer, and update the persistoid
    // @TODO more performant workaround for combineReducers warning
    var newState = _extends({}, baseReducer(restState, action), {
      _persist: _persist
      // update the persistoid only if we are already rehydrated and are not paused
    });_persist.rehydrated && _persistoid && !_paused && _persistoid.update(newState);
    return newState;
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = createPersistoid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(897);


function createPersistoid(config) {
  // defaults
  var blacklist = config.blacklist || null;
  var whitelist = config.whitelist || null;
  var transforms = config.transforms || [];
  var throttle = config.throttle || 0;
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;

  var storage = config.storage;

  // initialize stateful values
  var lastState = {};
  var keysToProcess = [];
  var timeIterator = null;
  var writePromise = null;

  var update = function update(state) {
    // add any changed keys to the queue
    Object.keys(state).forEach(function (key) {
      var subState = state[key];
      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop
      if (lastState[key] === state[key]) return; // value unchanged? noop
      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop
      keysToProcess.push(key); // add key to queue
    });

    // start the time iterator if not running (read: throttle)
    if (timeIterator === null) {
      timeIterator = setInterval(processNextKey, throttle);
    }

    lastState = state;
  };

  function processNextKey() {
    if (keysToProcess.length === 0) {
      if (timeIterator) clearInterval(timeIterator);
      timeIterator = null;
      return;
    }

    var key = keysToProcess.shift();
    var endState = transforms.reduce(function (subState, transformer) {
      return transformer.in(subState, key);
    }, lastState[key]);
    if (typeof endState !== 'undefined') stagedWrite(key, endState);
  }

  var stagedState = {};
  function stagedWrite(key, endState) {
    try {
      stagedState[key] = serialize(endState);
    } catch (err) {
      console.error('redux-persist/createPersistoid: error serializing state', err);
    }
    if (keysToProcess.length === 0) {
      writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
    }
  }

  function passWhitelistBlacklist(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return false;
    if (blacklist && blacklist.indexOf(key) !== -1) return false;
    return true;
  }

  function onWriteFail(err) {
    // @TODO add fail handlers (typically storage full)
    if (err && process.env.NODE_ENV !== 'production') {
      console.error('Error storing data', err);
    }
  }

  var flush = function flush() {
    while (keysToProcess.length !== 0) {
      processNextKey();
    }
    return writePromise || Promise.resolve();
  };

  // return `persistoid`
  return {
    update: update,
    flush: flush
  };
}

// @NOTE in the future this may be exposed via config
function serialize(data) {
  return JSON.stringify(data);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = getStoredState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(897);




function getStoredState(config) {
  var transforms = config.transforms || [];
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;
  var storage = config.storage;
  var debug = config.debug;

  return storage.getItem(storageKey).then(function (serialized) {
    if (!serialized) return undefined;else {
      try {
        var state = {};
        var rawState = deserialize(serialized);
        Object.keys(rawState).forEach(function (key) {
          state[key] = transforms.reduceRight(function (subState, transformer) {
            return transformer.out(subState, key);
          }, deserialize(rawState[key]));
        });
        return state;
      } catch (err) {
        if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist/getStoredState: Error restoring data ' + serialized, err);
        throw err;
      }
    }
  });
}

function deserialize(serial) {
  return JSON.parse(serial);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = purgeStoredState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(897);




function purgeStoredState(config) {
  var storage = config.storage;
  var storageKey = '' + (config.keyPrefix !== undefined ? config.keyPrefix : __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* KEY_PREFIX */]) + config.key;
  return storage.removeItem(storageKey, warnIfRemoveError);
}

function warnIfRemoveError(err) {
  if (err && process.env.NODE_ENV !== 'production') {
    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
  }
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistReducer__ = __webpack_require__(898);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "persistReducer", function() { return __WEBPACK_IMPORTED_MODULE_0__persistReducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistStore__ = __webpack_require__(904);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "persistStore", function() { return __WEBPACK_IMPORTED_MODULE_1__persistStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMigrate__ = __webpack_require__(905);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createMigrate", function() { return __WEBPACK_IMPORTED_MODULE_2__createMigrate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransform__ = __webpack_require__(906);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createTransform", function() { return __WEBPACK_IMPORTED_MODULE_3__createTransform__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getStoredState__ = __webpack_require__(900);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "getStoredState", function() { return __WEBPACK_IMPORTED_MODULE_4__getStoredState__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createPersistoid__ = __webpack_require__(899);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createPersistoid", function() { return __WEBPACK_IMPORTED_MODULE_5__createPersistoid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__purgeStoredState__ = __webpack_require__(901);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "purgeStoredState", function() { return __WEBPACK_IMPORTED_MODULE_6__purgeStoredState__["a"]; });








/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = autoMergeLevel1;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function autoMergeLevel1(originalState, inboundState, reducedState, _ref) {
  var debug = _ref.debug;

  // various dev only sanity checks
  if (process.env.NODE_ENV !== 'production') {
    if (inboundState) {
      Object.keys(inboundState).forEach(function (key) {
        // check if initialState is missing a key
        if (!originalState.hasOwnProperty(key)) console.log('\n          redux-persist/stateReconciler: state missing key\n          "' + key + '". state-manager will still store the rehydrated value. If you\n          removed ' + key + ' from your reducer tree, you should write a migration to\n          remove ' + key + ' from stored state. If you code-split ' + key + ' reducer, then\n          this is the expected behavior.\n        ');

        // check recently added reducer properties that may require a migration
        if (originalState[key] && _typeof(originalState[key]) === 'object' && inboundState[key] && _typeof(inboundState[key]) === 'object') {
          var stateKeys = originalState[key] ? Object.keys(originalState[key]) : [];
          var inboundStateKeys = Object.keys(inboundState[key]);
          stateKeys.forEach(function (checkKey) {
            if (inboundState[checkKey] === 'undefined') console.log('\n              redux-persist/stateReconciler: initialState for "' + key + '"\n              has property "' + checkKey + '" which is missing in rehydratedState. After\n              rehydration, "' + checkKey + '" will be null. If you recently added\n              ' + checkKey + ' to your ' + key + ' reducer, consider adding ' + checkKey + ' to a\n              state migration.\n            ');
          });
        }
      });
    }
  }

  var newState = _extends({}, reducedState);
  // only rehydrate if inboundState exists and is an object
  if (inboundState && (typeof inboundState === 'undefined' ? 'undefined' : _typeof(inboundState)) === 'object') {
    Object.keys(inboundState).forEach(function (key) {
      // ignore _persist data
      if (key === '_persist') return;
      // if reducer modifies substate, skip auto rehydration
      if (originalState[key] !== reducedState[key]) {
        if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
        return;
      }
      // otherwise hard set the new value
      newState[key] = inboundState[key];
    });
  }

  if (process.env.NODE_ENV !== 'production' && debug && inboundState && (typeof inboundState === 'undefined' ? 'undefined' : _typeof(inboundState)) === 'object') console.log('redux-persist/stateReconciler: rehydrated keys \'' + Object.keys(inboundState).join(', ') + '\'');

  return newState;
}

/*
  autoMergeLevel1: 
    - merges 1 level of substate
    - skips substate if already modified
*/
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = persistStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistReducer__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(897);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* REGISTER */]:
      return _extends({}, state, { registry: [].concat(_toConsumableArray(state.registry), [action.key]) });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* REHYDRATE */]:
      var firstIndex = state.registry.indexOf(action.key);
      var registry = [].concat(_toConsumableArray(state.registry));
      registry.splice(firstIndex, 1);
      return _extends({}, state, { registry: registry, bootstrapped: registry.length === 0 });
    default:
      return state;
  }
};

function persistStore(store) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cb = arguments[2];

  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (process.env.NODE_ENV !== 'production') {
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      // $FlowIgnore
      if (!!options[k]) console.error('redux-persist: invalid option passed to persistStore: "' + k + '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.');
    });
  }
  var boostrappedCb = cb || false;
  var persistor = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(persistorReducer, undefined, options.enhancer);

  persistor.purge = function () {
    var results = [];
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* PURGE */],
      result: function result(purgeResult) {
        results.push(purgeResult);
      }
    });
    return Promise.all(results);
  };

  persistor.flush = function () {
    var results = [];
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* FLUSH */],
      result: function result(flushResult) {
        results.push(flushResult);
      }
    });
    return Promise.all(results);
  };

  persistor.pause = function () {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* PAUSE */]
    });
  };

  var register = function register(key) {
    persistor.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* REGISTER */],
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* REHYDRATE */],
      payload: payload,
      err: err,
      key: key
      // dispatch to `store` to rehydrate and `persistor` to track result
    };store.dispatch(rehydrateAction);
    persistor.dispatch(rehydrateAction);
    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  persistor.persist = function () {
    store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* PERSIST */], register: register, rehydrate: rehydrate });
  };

  persistor.persist();

  return persistor;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = createMigrate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(897);


function createMigrate(migrations, config) {
  var _ref = config || {},
      debug = _ref.debug;

  return function (state, currentVersion) {
    if (!state) {
      if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist: no inbound state, skipping migration');
      return Promise.resolve(undefined);
    }
    // this is gauranteed to exist as version gets added before any state is stored
    var inboundVersion = state._persist.version;
    if (inboundVersion === currentVersion) {
      if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist: versions match, noop migration');
      return Promise.resolve(state);
    }
    if (inboundVersion > currentVersion) {
      if (process.env.NODE_ENV !== 'production') console.error('redux-persist: downgrading version is not supported');
      return Promise.resolve(state);
    }

    var migrationKeys = Object.keys(migrations).map(function (ver) {
      return parseInt(ver);
    }).filter(function (key) {
      return currentVersion >= key && key > inboundVersion;
    }).sort();

    if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist: migrationKeys', migrationKeys);
    try {
      var migratedState = migrationKeys.reduce(function (state, versionKey) {
        if (process.env.NODE_ENV !== 'production' && debug) console.log('redux-persist: running migration for versionKey', versionKey);
        return migrations[versionKey](state);
      }, state);
      return Promise.resolve(migratedState);
    } catch (err) {
      return Promise.reject(err);
    }
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTransform;


function createTransform(
// @NOTE inbound: transform state coming from redux on its way to being serialized and stored
inbound,
// @NOTE outbound: transform state coming from storage, on its way to be rehydrated into redux
outbound) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var whitelist = config.whitelist || null;
  var blacklist = config.blacklist || null;

  function whitelistBlacklistCheck(key) {
    if (whitelist && whitelist.indexOf(key) === -1) return true;
    if (blacklist && blacklist.indexOf(key) !== -1) return true;
    return false;
  }

  return {
    in: function _in(state, key) {
      return !whitelistBlacklistCheck(key) && inbound ? inbound(state, key) : state;
    },
    out: function out(state, key) {
      return !whitelistBlacklistCheck(key) && outbound ? outbound(state, key) : state;
    }
  };
}

/***/ })

})