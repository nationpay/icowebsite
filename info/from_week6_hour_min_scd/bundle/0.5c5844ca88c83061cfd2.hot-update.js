webpackHotUpdate(0,{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _rutils = __webpack_require__(95);

var _rutils2 = _interopRequireDefault(_rutils);

var _auth = __webpack_require__(629);

var _redux = __webpack_require__(113);

var _reactRouterDom = __webpack_require__(69);

var _autobindDecorator = __webpack_require__(161);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRedux = __webpack_require__(303);

var _bluebird = __webpack_require__(299);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(308);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  var actions = {
    login: _auth.login
  };

  return {
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
  };
};

var Login = (_dec = (0, _reactRedux.connect)(null, mapDispatchToProps), _dec(_class = (0, _reactRouterDom.withRouter)(_class = (0, _autobindDecorator2.default)(_class = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      submitted: false
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();

      console.log('this.props:::', this.props);

      this.setState({ submitted: true });

      var _state = this.state,
          email = _state.email,
          password = _state.password;
      var _props = this.props,
          history = _props.history,
          actions = _props.actions;


      var credentials = {
        email: email,
        password: password
      };

      var areCredentialsSet = _rutils2.default.all(_rutils2.default.isNotNil, [email, password]);

      console.log('credentials:::', credentials);
      console.log('areCredentialsSet:::', areCredentialsSet);

      _bluebird2.default.resolve(areCredentialsSet).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
        return actions.login(credentials);
      })).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
        console.log('store at login ', _store2.default.getState());
        history.push('/dashboard');
      })).catch(function (err) {
        console.log('Err-Login', err);
        // [ TODO ] --> we should show alert
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          email = _state2.email,
          password = _state2.password,
          submitted = _state2.submitted;

      return _react2.default.createElement(
        'div',
        { className: 'team-section section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12' },
              _react2.default.createElement(
                'h2',
                { className: 'text-center' },
                'Welcome to login'
              ),
              _react2.default.createElement(
                'form',
                { name: 'form', onSubmit: this.handleSubmit },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' + (submitted && !email ? ' has-error' : '') },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'email' },
                    'Username'
                  ),
                  _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'email', value: email, onChange: this.handleChange }),
                  submitted && !email && _react2.default.createElement(
                    'div',
                    { className: 'help-block' },
                    'Username is required'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'password' },
                    'Password'
                  ),
                  _react2.default.createElement('input', { type: 'password', className: 'form-control', name: 'password', value: password, onChange: this.handleChange }),
                  submitted && !password && _react2.default.createElement(
                    'div',
                    { className: 'help-block' },
                    'Password is required'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary' },
                    'Login'
                  ),
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/register', className: 'btn btn-link' },
                    'Register'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Login;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})