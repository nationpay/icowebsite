webpackHotUpdate(0,{

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(15), RootInstanceProvider = __webpack_require__(16), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rutils = __webpack_require__(35);

var _rutils2 = _interopRequireDefault(_rutils);

var _reactRouterDom = __webpack_require__(43);

var _autobindDecorator = __webpack_require__(140);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _MuiThemeProvider = __webpack_require__(427);

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TextField = __webpack_require__(335);

var _TextField2 = _interopRequireDefault(_TextField);

var _bluebird = __webpack_require__(73);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(108);

var _services = __webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('auth::: ', _services.auth);
console.log('crypto::: ', _services.crypto);

var styles = {
    underlineStyle: {
        borderColor: '#009688'
    },
    floatingLabelFocusStyle: {
        color: '#009688'
    }
};

var Register = (0, _reactRouterDom.withRouter)(_class = (0, _autobindDecorator2.default)(_class = function (_PureComponent) {
    _inherits(Register, _PureComponent);

    function Register(props) {
        _classCallCheck(this, Register);

        console.log(' this.props-Register::: ', props);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

        _this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                retypedPassword: ''
            },
            submitted: false
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            this.setState({ submitted: true });

            var fields = ['firstName', 'email', 'password'];

            // console.log('this.state:::', this.state);

            var user = this.state.user;


            var fieldsValues = _rutils2.default.pick(fields, user);

            var _props = this.props,
                history = _props.history,
                actions = _props.actions;


            var isNotEmpty = _rutils2.default.o(_rutils2.default.eq(false), _rutils2.default.isEmpty);

            var allValid = _rutils2.default.all(function (x) {
                return _rutils2.default.isNotNil(x) && isNotEmpty(x);
            });

            var areUserInputsValid = allValid(_rutils2.default.values(fieldsValues)) && user.password === user.retypedPassword;
            // console.log('areUserInputsValid:::', areUserInputsValid);

            var whenT = _rutils2.default.when(_rutils2.default.equals(true));

            var encryptPassword = _rutils2.default.over(_rutils2.default.lensProp('password'), _services.crypto.hash);

            _bluebird2.default.resolve(areUserInputsValid).then(whenT(function () {
                return _services.auth.register(encryptPassword(fieldsValues));
            })).tap(whenT(function (res) {
                return _services.auth.setNewRegistryStatus(true);
            })).then(whenT(function () {
                console.log('store at registering ', _store.store.getState());
                console.log(' registering status ', _services.auth.isNewRegistry());

                history.push('/needConfirmationEmailSent');
            })).catch(function (err) {
                console.log('Err-register', err);
                // [ TODO ] --> we should show alert
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _event$target = event.target,
                name = _event$target.name,
                value = _event$target.value;
            var user = this.state.user;

            this.setState({
                user: _extends({}, user, _defineProperty({}, name, value))
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                user = _state.user,
                submitted = _state.submitted;

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
                                _react2.default.createElement(
                                    'form',
                                    { name: 'form', className: 'form', onSubmit: this.handleSubmit },
                                    _react2.default.createElement(
                                        'h2',
                                        { className: 'section-heading' },
                                        'Sign Up'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !user.firstName ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'text',
                                            className: 'inputText',
                                            name: 'firstName',
                                            value: user.firstName,
                                            onChange: this.handleChange,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelText: 'Full Name'
                                        }),
                                        submitted && !user.firstName && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Full Name is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !user.email ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'email',
                                            className: 'inputText',
                                            name: 'email',
                                            value: user.email,
                                            onChange: this.handleChange,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelText: 'Email'
                                        }),
                                        submitted && !user.email && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Email is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'password',
                                            className: 'inputText',
                                            name: 'password',
                                            value: user.password,
                                            onChange: this.handleChange,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelText: 'Password'
                                        }),
                                        submitted && !user.password && _react2.default.createElement(
                                            'div',
                                            { className: 'help-block' },
                                            'Password is required'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group' + (submitted && !user.password ? ' has-error' : '') },
                                        _react2.default.createElement(_TextField2.default, {
                                            type: 'password',
                                            className: 'inputText',
                                            name: 'retypedPassword',
                                            value: user.retypedPassword,
                                            onChange: this.handleChange,
                                            floatingLabelFocusStyle: styles.floatingLabelFocusStyle,
                                            underlineFocusStyle: styles.underlineStyle,
                                            floatingLabelText: 'Retype Password'
                                        }),
                                        submitted && !user.retypedPassword && _react2.default.createElement(
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
                                            'Sign Up'
                                        ),
                                        _react2.default.createElement(
                                            _reactRouterDom.Link,
                                            { to: '/', className: 'btn btn-link' },
                                            'Log In'
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

    return Register;
}(_react.PureComponent)) || _class) || _class;

exports.default = Register;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(17); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})