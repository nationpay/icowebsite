webpackHotUpdate(0,{

/***/ 427:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(17), RootInstanceProvider = __webpack_require__(18), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _rutils = __webpack_require__(57);

var _rutils2 = _interopRequireDefault(_rutils);

var _autobindDecorator = __webpack_require__(116);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pointerStyle = {
    cursor: 'pointer'
};

var TopBar = (0, _reactRouterDom.withRouter)(_class = (0, _autobindDecorator2.default)(_class = function (_PureComponent) {
    _inherits(TopBar, _PureComponent);

    function TopBar(props) {
        _classCallCheck(this, TopBar);

        var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));

        _this.state = {
            activeRoute: '/'
        };

        _this.linksSpec = {};

        _this.props.history.listen(function (location, action) {
            _this.setState({ activeRoute: location.pathname });
        });
        return _this;
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // };
    //
    // handleScroll(event) {
    //     console.log(event);
    //     let scrollTop = event.srcElement.body.scrollTop;
    //     console.log(scrollTop);
    //
    // };

    _createClass(TopBar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //window.removeEventListener('scroll', this.handleScroll);
            this.linksSpec = this.updateLinkSpec(this.state.activeRoute, this.props.linksSpecInit);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'header',
                { className: 'header-section navbar-fixed-top navbar-default header-floating header-fixed' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'navbar-toggle' },
                            _react2.default.createElement(
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' }),
                            _react2.default.createElement('span', { className: 'icon-bar' })
                        ),
                        _react2.default.createElement(
                            'a',
                            {
                                className: 'navbar-brand navbar-logo',
                                style: pointerStyle,
                                onClick: function onClick() {
                                    return _this2.props.history.push('/');
                                } },
                            'RealSafe'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'navigation', className: 'navbar-collapse collapse' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav navbar-right' },
                            _rutils2.default.addIndex(_rutils2.default.map)(this.renderLink, this.linksSpec)
                        )
                    )
                )
            );
        }
    }, {
        key: 'updateLinkSpec',
        value: function updateLinkSpec(activeRoute, linksSpec) {

            var mapper = function mapper(linkSpec) {
                var route = linkSpec.route;


                var isActive = route === activeRoute;

                return _rutils2.default.assoc('isActive', isActive, linkSpec);
            };

            return _rutils2.default.map(mapper, linksSpec);
        }
    }, {
        key: 'renderLink',
        value: function renderLink(spec, i) {
            var _this3 = this;

            var title = spec.title,
                route = spec.route,
                isUrl = spec.isUrl,
                isActive = spec.isActive;


            var aProps = null;

            if (isUrl) {

                aProps = {
                    style: pointerStyle,
                    href: route,
                    target: '_blank'
                };
            } else {

                aProps = {
                    style: pointerStyle,
                    onClick: function onClick() {
                        return _this3.props.history.push(route);
                    }
                };
            }

            return _react2.default.createElement(
                'li',
                { key: i },
                ' ',
                _react2.default.createElement(
                    'a',
                    aProps,
                    title
                ),
                ' '
            );
        }
    }]);

    return TopBar;
}(_react.PureComponent)) || _class) || _class;

exports.default = TopBar;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(20); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})