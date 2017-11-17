webpackHotUpdate(0,{

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _TopBar = __webpack_require__(419);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Footer = __webpack_require__(627);

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = __webpack_require__(628);

var _Login2 = _interopRequireDefault(_Login);

var _ForgotPassword = __webpack_require__(897);

var _ForgotPassword2 = _interopRequireDefault(_ForgotPassword);

var _Register = __webpack_require__(822);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(823);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRedux = __webpack_require__(303);

var _store = __webpack_require__(308);

var _store2 = _interopRequireDefault(_store);

var _reactRouterDom = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TopBar2.default, null),
        _react2.default.createElement(
          'switch',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/password_reset', component: _ForgotPassword2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', component: _Dashboard2.default })
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
        { store: _store2.default },
        _react2.default.createElement(App, null)
      );
    }
  }]);

  return AppWrapper;
}(_react.PureComponent);

exports.default = AppWrapper;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 820:
false,

/***/ 821:
false,

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _TokenDistribution = __webpack_require__(898);

var _TokenDistribution2 = _interopRequireDefault(_TokenDistribution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ForgotPassword = function (_Component) {
  _inherits(ForgotPassword, _Component);

  function ForgotPassword() {
    _classCallCheck(this, ForgotPassword);

    return _possibleConstructorReturn(this, (ForgotPassword.__proto__ || Object.getPrototypeOf(ForgotPassword)).apply(this, arguments));
  }

  _createClass(ForgotPassword, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TokenDistribution2.default, null);
    }
  }]);

  return ForgotPassword;
}(_react.Component);

exports.default = ForgotPassword;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenDistribution = function (_Component) {
    _inherits(TokenDistribution, _Component);

    function TokenDistribution() {
        _classCallCheck(this, TokenDistribution);

        return _possibleConstructorReturn(this, (TokenDistribution.__proto__ || Object.getPrototypeOf(TokenDistribution)).call(this));
    }

    _createClass(TokenDistribution, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "tdistribution", className: "tdistribution-section section" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2.default.createElement(
                                "h2",
                                { className: "section-heading wow fadeIn", "data-wow-duration": "1s" },
                                "RealSafe Token (RST) Distribution"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-12" },
                            _react2.default.createElement(
                                "div",
                                { className: "social-text" },
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "# Coins Minted "
                                        ),
                                        "110,000,000 RSTs will be pre-mined on or before ICO date. Date of ICO to be announced."
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "A maximum amount of 73,500,000 RST tokens granted to RSO pre-purchasing contributors. "
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "50% matched addition to tokens granted to pre-purchasers will be distributed as:"
                                ),
                                _react2.default.createElement(
                                    "ol",
                                    { className: "social-numb-list" },
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "30% of matching tokens reserved for developers (priortized by time invested and earliest in over 2 years), ICO creators and advisors"
                                        ),
                                        "."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "20% to the founders"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "10% held for referral-based and pre-ICO deals"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "40% held for the RealSafe Reserve"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Unsold RST remains in RealSafe Reserve Contract, used according to the rules of the Reserve"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Reserve rules: 20% frozen, 20% auditor incentives, 20% future advisors/development, 30% incentives to keep the RealSafe network flourishing, 10% charity"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "PoS: RST provides voting rights in most foundation decisions.  RSO owners will receive some reserve tokens year to year relative to their total portfolio value"
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "ul",
                                    null,
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Tokens Granted "
                                        ),
                                        "At least $2,000,000 must be raised or the ICO period is extended to up to 90 days.  There is no minimum to be raised to consider the ICO a success because all monies raised bring the RealSafe platform closer to completion.  Whatever tokens are not granted will remain in the RealSafe Reserve Contract -  If ICO is maxed., 15,000,000 tokens will remain in Reserve"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Reserve marketplace Liquidity Function "
                                        ),
                                        " The RealSafe RSO marketplace allows Ether to directly pay for fees to facilitate normal RSO trading. The MarketPlace contract uses fees to buy RST tokens, raising the price of RST as the popularity of the network increases."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Reserve as it relates to RST price "
                                        ),
                                        " Reserve contract will not offer RSTs to effect RST value - only in the event that at any price, there simply are not enough RSTs available to conduct normal RSO trading."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Reserve Supplementary ICO function "
                                        ),
                                        " Up to 20% of the Reserve may be sold off in a subsequent offering with proceeds to benefit the RealSafe Foundation if the total ether raised after completion of initial ICO is under $10,000,000"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Ether that is raised "
                                        ),
                                        "At least 50% will remain as ETH and as much as 50% will be converted to dollars or Euros initially to ensure there are funds in both fiat and crypto to pay developers through RealSafe LLC for initial development and platform maintenance for several years to come. "
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "RealSafe Foundation "
                                        ),
                                        "will operate the RealSafe Market Place and use RealSafe LLC to build the first RealSafe Explorer, RealSafe Tokenization Service, Audit service and RealSafe Wallet."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "RealSafe Foundation "
                                        ),
                                        "will  control the Reserve Contract, which will be able to mint a maximum of .5% per year RSTs. Minting will occur only if market cap. of RST is increasing or stable"
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "Reserve Rules "
                                        ),
                                        "Year to year usage in sll categories: x% of first year plus x% of additional year growth from fees."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "At least 20% of the Reserve "
                                        ),
                                        "is used to remain held frozen for health of the RST.  As the resreve grows, so does the amount frozen.  "
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "At least 20% of the Reserve "
                                        ),
                                        "to support auditors and other function to help the network fourish."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "At least 20% of the Reserve "
                                        ),
                                        "to support the developers, (through NationPay LLC for the first 5 years) advisors and partners needed to make the RealSafe network flourish."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "A maximum of 20% of the Reserve RST "
                                        ),
                                        "unforseen incentives, promotional faucet distros. to the world's largest corporate owners.  Max. of 5% to all Ether holders over 5 years.  "
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "A maximum of 10% of the Reserve "
                                        ),
                                        "will be used for proportional Proof of Value to combined sub-token owners."
                                    ),
                                    _react2.default.createElement(
                                        "li",
                                        null,
                                        _react2.default.createElement(
                                            "span",
                                            null,
                                            "A maximum of 10% of the Reserve "
                                        ),
                                        "will be used for charitable causes."
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return TokenDistribution;
}(_react.Component);

exports.default = TokenDistribution;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})