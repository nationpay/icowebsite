webpackHotUpdate(0,{

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(14), RootInstanceProvider = __webpack_require__(15), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _rutils = __webpack_require__(41);

var _rutils2 = _interopRequireDefault(_rutils);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _auth = __webpack_require__(287);

var _redux = __webpack_require__(63);

var _reactRouterDom = __webpack_require__(40);

var _autobindDecorator = __webpack_require__(117);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRedux = __webpack_require__(194);

var _bluebird = __webpack_require__(62);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var actions = {
        logout: _auth.logout
    };

    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {

    return {
        profile: state.user.profile,
        token: state.user.token
    };
};

var Dashboard = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactRouterDom.withRouter)(_class = _dec(_class = (0, _autobindDecorator2.default)(_class = function (_PureComponent) {
    _inherits(Dashboard, _PureComponent);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
    }

    _createClass(Dashboard, [{
        key: 'logout',
        value: function logout(e) {
            e.preventDefault();

            var _props = this.props,
                history = _props.history,
                actions = _props.actions;

            actions.logout(null).then(function () {
                console.log('store at login ', _store.store.getState());
                history.push('/');
            }).catch(function (err) {
                console.log('Err-Login', err);
                // [ TODO ] --> we should show alert
            });
        }
    }, {
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
                                'Dashboard'
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
                                        'p',
                                        null,
                                        ' ',
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Your investment '
                                        ),
                                        ' ',
                                        this.props.myTotalInvestment
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        ' ',
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Total of ICO investor '
                                        ),
                                        ' ',
                                        this.props.icoTotalInvestors
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        ' ',
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Total ICO USD invested '
                                        ),
                                        ' ',
                                        this.props.icoTotalUSD
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        ' ',
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Total ICO coins invested '
                                        ),
                                        ' ',
                                        this.props.icoTotalCoins
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

    return Dashboard;
}(_react.PureComponent)) || _class) || _class) || _class);
exports.default = Dashboard;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(18); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ })

})