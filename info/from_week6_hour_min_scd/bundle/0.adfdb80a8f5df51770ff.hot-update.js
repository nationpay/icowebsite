webpackHotUpdate(0,{

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.register = exports.login = undefined;

var _rutils = __webpack_require__(95);

var _rutils2 = _interopRequireDefault(_rutils);

var _reduxActions = __webpack_require__(630);

var _services = __webpack_require__(675);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMyTotalInvesment = (0, _reduxActions.createAction)('SET_MY_TOTAL_INVESTMENT');
var setIcoTotalUSD = (0, _reduxActions.createAction)('SET_ICO_TOTAL_USD');
var setIcoTotalCoins = (0, _reduxActions.createAction)('SET_ICO_TOTAL_COINS');
var setIcoTotalInvestors = (0, _reduxActions.createAction)('SET_ICO_TOTAL_INVESTORS');

var logout = (0, _reduxActions.createAction)('SIGNOUT');

var authServicesResToDispatchParam = function authServicesResToDispatchParam(spec) {

  console.log('authServicesResToDispatchParam', spec);

  var totalCoinsCollected = spec.totalCoinsCollected,
      totalInvestment = spec.totalInvestment,
      totalUSDCollected = spec.totalUSDCollected,
      totalInvestor = spec.totalInvestor;


  var actions = [setMyTotalInvesment(totalInvestment), setIcoTotalInvestors(totalInvestor), setIcoTotalCoins(totalCoinsCollected), setIcoTotalUSD(totalUSDCollected)];

  return batchActions(actions).then(_rutils2.default.T);
};

var login = _rutils2.default.curry(function (credentials, dispatch, getState) {
  return _services.auth.login(credentials).then(function (res) {
    dispatch(authServicesResToDispatchParam(res));
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

  return _services.auth.register(_rutils2.default.pick(fields, registerData));
});

exports.login = login;
exports.register = register;
exports.logout = logout;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})