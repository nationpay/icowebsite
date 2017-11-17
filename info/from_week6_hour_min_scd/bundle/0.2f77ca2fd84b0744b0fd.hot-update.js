webpackHotUpdate(0,{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _bluebird = __webpack_require__(117);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newRegistry = false;

var auth = {
  login: function login(credentials) {
    return _bluebird2.default.resolve({
      totalInvestment: 125,
      totalInvestor: 200000,
      totalUSDCollected: 25365485,
      totalCoinsCollected: 45697
    });
  },
  logout: function logout(spec) {
    return _bluebird2.default.resolve('Logged out');
  },
  isLoggedIn: function isLoggedIn() {
    return _store.store.getState().dashboard.isLoggedIn;
  },
  register: function register(data) {
    return _bluebird2.default.resolve(true);
  },
  isNewRegistry: function isNewRegistry() {
    return newRegistry;
  },
  setNewRegistryStatus: function setNewRegistryStatus(s) {
    newRegistry = s;
  }
};

exports.auth = auth;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})