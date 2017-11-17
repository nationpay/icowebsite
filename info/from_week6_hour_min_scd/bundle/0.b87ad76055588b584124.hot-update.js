webpackHotUpdate(0,{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.register = exports.login = undefined;

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _reduxActions = __webpack_require__(637);

var _reduxBatchedActions = __webpack_require__(305);

var _services = __webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMyTotalInvesment = (0, _reduxActions.createAction)('SET_MY_TOTAL_INVESTMENT');
var setIcoTotalUSD = (0, _reduxActions.createAction)('SET_ICO_TOTAL_USD');
var setIcoTotalCoins = (0, _reduxActions.createAction)('SET_ICO_TOTAL_COINS');
var setIcoTotalInvestors = (0, _reduxActions.createAction)('SET_ICO_TOTAL_INVESTORS');

var updateLoggedInStatus = (0, _reduxActions.createAction)('UPDATE_LOGGED_IN_STATUS');

var authServicesResToDispatchParam = function authServicesResToDispatchParam(spec) {

  console.log('authServicesResToDispatchParam', spec);

  var totalCoinsCollected = spec.totalCoinsCollected,
      totalInvestment = spec.totalInvestment,
      totalUSDCollected = spec.totalUSDCollected,
      totalInvestor = spec.totalInvestor;


  var actions = [setMyTotalInvesment(totalInvestment), setIcoTotalInvestors(totalInvestor), setIcoTotalCoins(totalCoinsCollected), setIcoTotalUSD(totalUSDCollected), updateLoggedInStatus(true)];

  return (0, _reduxBatchedActions.batchActions)(actions, 'LOGIN_SUCCESS');
};

var login = _rutils2.default.curry(function (credentials, dispatch, getState) {
  return _services.auth.login(credentials).then(function (res) {
    return dispatch(authServicesResToDispatchParam(res));
  });
});

var logout = _rutils2.default.curry(function (_, dispatch, getState) {
  return _services.auth.logout().then(function (res) {
    return dispatch(updateLoggedInStatus(false));
  });
});

var verifyAccount = _rutils2.default.curry(function (spec, dispatch, getState) {
  var credentials = spec.credentials,
      code = spec.code;
  var email = credentials.email,
      password = credentials.password;


  return _services.auth.verifyAccount({ email: email, password: password, code: code }).then(function (res) {
    dispatch(authServicesResToDispatchParam(res));
  });
});

var register = _rutils2.default.curry(function (registerData, dispatch, getState) {

  var fields = ['firstName', 'lastName', 'email', 'password'];

  return _services.auth.register(_rutils2.default.pick(fields, registerData)).tap(function (res) {
    return _services.auth.setNewRegistryStatus(true);
  });
});

exports.login = login;
exports.register = register;
exports.logout = logout;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})