webpackHotUpdate(0,{

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.register = exports.login = undefined;

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _reduxActions = __webpack_require__(636);

var _reduxBatchedActions = __webpack_require__(304);

var _services = __webpack_require__(681);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMyTotalInvesment = (0, _reduxActions.createAction)('SET_MY_TOTAL_INVESTMENT');
var setIcoTotalUSD = (0, _reduxActions.createAction)('SET_ICO_TOTAL_USD');
var setIcoTotalCoins = (0, _reduxActions.createAction)('SET_ICO_TOTAL_COINS');
var setIcoTotalInvestors = (0, _reduxActions.createAction)('SET_ICO_TOTAL_INVESTORS');

var logout = (0, _reduxActions.createAction)('SIGNOUT');

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

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _TopBar = __webpack_require__(426);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Footer = __webpack_require__(634);

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = __webpack_require__(635);

var _Login2 = _interopRequireDefault(_Login);

var _ForgotPassword = __webpack_require__(833);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _Register = __webpack_require__(835);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(836);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRedux = __webpack_require__(117);

var _store = __webpack_require__(118);

var _react3 = __webpack_require__(837);

var _reactRouterDom = __webpack_require__(56);

var _PrivateRoute = __webpack_require__(912);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TopBar2.default, null),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/password_reset', component: _ForgotPassword2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
          _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard', component: _Dashboard2.default })
        )
      );
    }
  }]);

  return App;
}(_react.PureComponent);

var AppWrapper = function (_PureComponent2) {
  _inherits(AppWrapper, _PureComponent2);

  function AppWrapper(props) {
    _classCallCheck(this, AppWrapper);

    return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this, props));
  }

  _createClass(AppWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store.store },
        _react2.default.createElement(
          _react3.PersistGate,
          {
            loading: _react2.default.createElement(
              'div',
              null,
              'I am loading'
            ),
            persistor: _store.persistor },
          _react2.default.createElement(App, null)
        )
      );
    }
  }]);

  return AppWrapper;
}(_react.PureComponent);

exports.default = AppWrapper;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = undefined;

var _bluebird = __webpack_require__(116);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var auth = {
  login: function login(credentials) {
    return _bluebird2.default.resolve({
      totalInvestment: 125,
      totalInvestor: 200000,
      totalUSDCollected: 25365485,
      totalCoinsCollected: 45697
    });
  },
  isLoggedIn: function isLoggedIn() {
    return _store.store.getStore().isLoggedIn;
  }

};

exports.auth = auth;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _updeep = __webpack_require__(701);

var _updeep2 = _interopRequireDefault(_updeep);

var _constants = __webpack_require__(911);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  myTotalInvestment: 0,
  icoTotalInvestors: 0,
  icoTotalUSD: 0,
  icoTotalCoins: 0,
  icoListOfCoins: {
    'ETH': {
      name: 'ETH',
      totalCoins: 0,
      totalUSD: 0,
      totalRST: 0
    },
    'BTC': {
      name: 'BTC',
      totalCoins: 0,
      totalUSD: 0,
      totalRST: 0
    }
  },
  isLoggedIn: false
};

var updateLoggeInStatus = function updateLoggeInStatus(state, payload) {
  return {
    isLoggedIn: payload
  };
};

var addCoin = function addCoin(state, payload) {
  var icoListOfCoins = state.icoListOfCoins;
  var name = payload.name;


  return {
    icoListOfCoins: _rutils2.default.assoc(name, payload, icoListOfCoins)
  };
};

var setTotalInvestment = function setTotalInvestment(state, payload) {
  return {
    myTotalInvestment: payload
  };
};

var setTotalUSD = function setTotalUSD(state, payload) {
  return {
    icoTotalUSD: payload
  };
};

var setTotalCoins = function setTotalCoins(state, payload) {
  return {
    icoTotalCoins: payload
  };
};

var setTotalInvestors = function setTotalInvestors(state, payload) {
  return {
    icoTotalInvestors: payload
  };
};

var actionHandlers = {
  ADD_ICO_COIN: addCoin,
  SET_MY_TOTAL_INVESTMENT: setTotalInvestment,
  SET_ICO_TOTAL_USD: setTotalUSD,
  SET_ICO_TOTAL_COINS: setTotalCoins,
  SET_ICO_TOTAL_INVESTORS: setTotalInvestors,
  UPDATE_LOGGED_IN_STATUS: updateLoggeInStatus
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload,
      meta = action.meta;

  // if ( type === REHYDRATE ) {
  //   state = payload.dashboard
  // }

  console.log('action:::: ', action);

  var actionHandler = actionHandlers[type];

  if (!_rutils2.default.isNil(actionHandler)) {
    var statePropertyUpdated = _rutils2.default.defaultTo({}, actionHandler(state, payload));

    return (0, _updeep2.default)(statePropertyUpdated, state);
  }

  return state;
};

exports.default = reducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__(681);

var _reactRouterDom = __webpack_require__(56);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['component']);

  return React.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return _index.auth.isLoggedIn() ? React.createElement(Component, props) : React.createElement(_reactRouterDom.Redirect, { to: { pathname: '/', state: { from: props.location } } });
    }
  }));
};

exports.default = PrivateRoute;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})