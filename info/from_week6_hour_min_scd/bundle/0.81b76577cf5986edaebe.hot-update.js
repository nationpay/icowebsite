webpackHotUpdate(0,{

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(27), RootInstanceProvider = __webpack_require__(28), ReactMount = __webpack_require__(19), React = __webpack_require__(5); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(70);

var _autobindDecorator = __webpack_require__(509);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (0, _reactRouterDom.withRouter)(_class = (0, _autobindDecorator2.default)(_class = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = {
            email: '',
            password: '',
            retypedPassword: '',
            submitted: false
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();

            this.setState({ submitted: true });
            var _state = this.state,
                email = _state.email,
                password = _state.password,
                retypedPassword = _state.retypedPassword;
            var dispatch = this.props.dispatch;

            if (email && password && retypedPassword === password) {
                dispatch(userActions.login(email, password, retypedPassword));
            }
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
            var loggingIn = this.props.loggingIn;
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
                                    { className: 'form-group' + (submitted && !retypedPasswordpassword ? ' has-error' : '') },
                                    _react2.default.createElement(
                                        'label',
                                        { htmlFor: 'retypedPasswordpassword' },
                                        'Password'
                                    ),
                                    _react2.default.createElement('input', { type: 'retypedPasswordpassword', className: 'form-control', name: 'retypedPasswordpassword', value: retypedPasswordpassword, onChange: this.handleChange }),
                                    submitted && !retypedPasswordpassword && _react2.default.createElement(
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
                                    loggingIn && _react2.default.createElement('img', { src: 'data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' }),
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

    return Home;
}(_react.Component)) || _class) || _class;

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(34); if (makeExportsHot(module, __webpack_require__(5))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ })

})