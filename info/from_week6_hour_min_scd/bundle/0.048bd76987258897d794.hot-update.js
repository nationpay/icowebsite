webpackHotUpdate(0,{

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(15), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rutils = __webpack_require__(35);

var _rutils2 = _interopRequireDefault(_rutils);

var _TextField = __webpack_require__(335);

var _TextField2 = _interopRequireDefault(_TextField);

var _auth = __webpack_require__(367);

var _redux = __webpack_require__(74);

var _reactRouterDom = __webpack_require__(43);

var _autobindDecorator = __webpack_require__(140);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRedux = __webpack_require__(245);

var _MuiThemeProvider = __webpack_require__(427);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _services = __webpack_require__(149);

var _bluebird = __webpack_require__(73);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(108);

var _reactAlert = __webpack_require__(1074);

var _reactAlert2 = _interopRequireDefault(_reactAlert);

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

var styles = {
    underlineStyle: {
        borderColor: '#009688'
    },
    floatingLabelFocusStyle: {
        color: '#009688'
    }
};

var Login = (_dec = (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _reactRouterDom.withRouter)(_class = _dec(_class = (0, _autobindDecorator2.default)(_class = function (_PureComponent) {
    _inherits(Login, _PureComponent);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            email: '',
            password: '',
            submitted: false,
            error: null
        };

        _this.alertOptions = {
            offset: 20,
            position: 'top right',
            theme: 'dark',
            time: 5000,
            transition: 'fade'
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();

            console.log('this.props:::', this.props);

            this.setState({ submitted: true, error: null });

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

            var isNotEmpty = _rutils2.default.o(_rutils2.default.eq(false), _rutils2.default.isEmpty);

            var isValid = function isValid(x) {
                return _rutils2.default.isNotNil(x) && isNotEmpty(x);
            };

            var areCredentialsSet = _rutils2.default.all(isValid, [email, _services.crypto.hash(password)]);

            _bluebird2.default.resolve(areCredentialsSet).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
                return actions.login(credentials).then(_rutils2.default.T);
            })).then(_rutils2.default.when(_rutils2.default.equals(true), function () {
                console.log('store at login ', _store.store.getState());
                history.push('/dashboard');
            })).catch(function (err) {
                console.log('Err-Login', err);
                _this2.setState({ error: err }, _this2.showAlert);
            });
        }
    }, {
        key: 'showAlert',
        value: function showAlert() {
            this.msg.show(this.state.error.description, {
                time: 10000,
                type: 'error'
                //  icon: <img src="path/to/some/img/32x32.png" />
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
            var _this3 = this;

            var _state2 = this.state,
                email = _state2.email,
                password = _state2.password,
                submitted = _state2.submitted,
                error = _state2.error;

            return _react2.default.createElement(
                _MuiThemeProvider2.default,
                null,
                _react2.default.createElement(
                    'section',
                    { className: 'login-section section' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row text-center' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-6 col-md-offset-3' },
                                _react2.default.createElement(_reactAlert2.default, _extends({ ref: function ref(a) {
                                        return _this3.msg = a;
                                    } }, this.alertOptions)),
                                _react2.default.createElement(
                                    'form',
                                    { name: 'form', className: 'form', onSubmit: this.handleSubmit },
                                    _react2.default.createElement(
                                        'h2',
                                        { className: 'section-heading' },
                                        'Log In'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !email ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'email',
                                            className: 'inputText',
                                            name: 'email',
                                            value: email,
                                            onChange: this.handleChange,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelText: 'Email'
                                        }),
                                        submitted && !email && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Email is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !password ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'password',
                                            className: 'inputText',
                                            name: 'password',
                                            value: password,
                                            onChange: this.handleChange,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            floatingLabelText: 'Enter your password'
                                        }),
                                        submitted && !password && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Password is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'btn-contain' },
                                        _react2.default.createElement(
                                            'button',
                                            { className: 'btn btn-login' },
                                            'Log In'
                                        ),
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/register', className: 'btn btn-link' },
                                            'Sign Up'
                                        )
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
}(_react.PureComponent)) || _class) || _class) || _class);
exports.default = Login;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})