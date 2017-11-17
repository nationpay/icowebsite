webpackHotUpdate(0,{

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TopBar = __webpack_require__(427);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Footer = __webpack_require__(635);

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = __webpack_require__(636);

var _Login2 = _interopRequireDefault(_Login);

var _NeedConfirmationEmailSent = __webpack_require__(913);

var _NeedConfirmationEmailSent2 = _interopRequireDefault(_NeedConfirmationEmailSent);

var _Register = __webpack_require__(836);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(837);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRedux = __webpack_require__(125);

var _store = __webpack_require__(63);

var _react3 = __webpack_require__(838);

var _index = __webpack_require__(174);

var _reactRouterDom = __webpack_require__(45);

var _PrivateRoute = __webpack_require__(839);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linksSpec = [{
  title: 'HOME',
  route: 'http://www.sharla.io/realsafe',
  isUrl: true,
  isActive: false
}, {
  title: 'BLOG', //Medium blog
  route: 'https://www.medium.com',
  isUrl: true,
  isActive: false
}, {
  title: 'TOKEN FAQ', //Token FAQ
  route: 'http://www.sharla.io/realsafe',
  isUrl: true,
  isActive: false
}, {
  title: 'WHITEPAPER',
  route: 'http://www.sharla.io/realsafe',
  isUrl: true,
  isActive: false
}, {
  title: 'REGISTER',
  route: '/register',
  isActive: false
}];

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
          _react2.default.createElement(_TopBar2.default, { linksSpec: linksSpec }),
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, {
              exact: true,
              path: '/',
              render: function render(props) {
                return _index.auth.isLoggedIn() ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/dashboard', state: { from: props.location } } }) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login', state: { from: props.location } } });
              }
            }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
            _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard', whenTrue: _index.auth.isLoggedIn, component: _Dashboard2.default }),
            _react2.default.createElement(_PrivateRoute2.default, { path: '/needConfirmationEmailSent', whenTrue: _index.auth.isNewRegistry, component: _NeedConfirmationEmailSent2.default }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })
          )
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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }),

/***/ 834:
false,

/***/ 835:
false,

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _bluebird = __webpack_require__(117);

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NeedConfirmationEmailSent = (0, _reactRouterDom.withRouter)(_class = autobind(_class = function (_PureComponent) {
    _inherits(NeedConfirmationEmailSent, _PureComponent);

    function NeedConfirmationEmailSent(props) {
        _classCallCheck(this, NeedConfirmationEmailSent);

        return _possibleConstructorReturn(this, (NeedConfirmationEmailSent.__proto__ || Object.getPrototypeOf(NeedConfirmationEmailSent)).call(this, props));
    }

    _createClass(NeedConfirmationEmailSent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'team', className: 'team-section section' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-12' },
                            _react2.default.createElement(
                                'h2',
                                { className: 'section-heading wow fadeIn', 'data-wow-duration': '1s' },
                                'Confirmation email successfully sent...'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-4 col-sm-offset-4' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel panel-default' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'panel-body' },
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        ' A confirmation email has been sent to your email. Please go your email for verifying your account.  '
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-2 col-sm-offset-5' },
                            _react2.default.createElement(
                                'button',
                                { onClick: this.logout, className: 'btn btn-primary' },
                                'Logout'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NeedConfirmationEmailSent;
}(_react.PureComponent)) || _class) || _class;

exports.default = NeedConfirmationEmailSent;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})