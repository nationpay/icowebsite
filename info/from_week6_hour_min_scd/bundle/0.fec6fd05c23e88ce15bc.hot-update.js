webpackHotUpdate(0,{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(699);

var _index2 = _interopRequireDefault(_index);

var _reduxThunk = __webpack_require__(824);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(49);

var _reduxBatchedActions = __webpack_require__(304);

var _reduxPersist = __webpack_require__(825);

var _storage = __webpack_require__(830);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  key: 'root', // key is required
  storage: _storage2.default // storage is now required
};

var rootPersistReducer = (0, _reduxPersist.persistReducer)(config, _index2.default);

var configureStore = function configureStore() {

  var store = (0, _redux.createStore)((0, _reduxBatchedActions.enableBatching)(rootPersistReducer), undefined, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _reduxBatchedActions.enableBatching));

  var persistor = (0, _reduxPersist.persistStore)(store);

  console.log('My store:: ', store.getState());

  return { persistor: persistor, store: store };
};

exports.default = configureStore;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})