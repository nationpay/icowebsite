webpackHotUpdate(0,{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(14), RootInstanceProvider = __webpack_require__(15), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _bluebird = __webpack_require__(62);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(85);

var _api = __webpack_require__(825);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newRegistry = false;

var login = function login(credentials) {
  var api = (0, _api2.default)();

  return api.post('session', credentials).then(function (res) {
    console.log('resLogin::: ', res);

    var _JSON$parse = JSON.parse(res),
        data = _JSON$parse.data,
        token = _JSON$parse.token;

    if (Ru.isNotNil(data.httpCode)) {
      return _bluebird2.default.reject(data);
    }
    return {
      user: data.initialData.user,
      token: token
    };
  });
};

var register = function register(data) {
  var api = (0, _api2.default)();

  return api.post('signup', data).then(Ru.K(true));
};

var logOut = function logOut(token) {
  var api = (0, _api2.default)(token);
  return api.put('logout');
};

var auth = {
  login: login,
  register: register,
  logout: function logout(spec) {
    return _bluebird2.default.resolve('Logged out');
  },
  isLoggedIn: function isLoggedIn() {
    return _store.store.getState().user.isLoggedIn;
  },
  isNewRegistry: function isNewRegistry() {
    return newRegistry;
  },
  setNewRegistryStatus: function setNewRegistryStatus(s) {
    newRegistry = s;
  }
};

exports.auth = auth;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(18); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ })

})