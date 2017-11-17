webpackHotUpdate(0,{

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _updeep = __webpack_require__(692);

var _updeep2 = _interopRequireDefault(_updeep);

var _constants = __webpack_require__(815);

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

  // console.log('action-state:::: ', state)
  // console.log('action:::: ', action)

  if (type === _constants.REHYDRATE) {
    return _extends({}, state, payload.dashboard);
  }

  var actionHandler = actionHandlers[type];

  if (!_rutils2.default.isNil(actionHandler)) {
    var statePropertyUpdated = _rutils2.default.defaultTo({}, actionHandler(state, payload));

    return (0, _updeep2.default)(statePropertyUpdated, state);
  }

  // console.log('action-after-state:::: ', state)
  return state;
};

exports.default = reducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})