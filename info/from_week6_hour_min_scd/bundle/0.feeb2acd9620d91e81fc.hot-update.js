webpackHotUpdate(0,{

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TopBar = __webpack_require__(307);

var _TopBar2 = _interopRequireDefault(_TopBar);

var _Footer = __webpack_require__(517);

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = __webpack_require__(617);

var _Login2 = _interopRequireDefault(_Login);

var _PasswordRecover = __webpack_require__(621);

var _PasswordRecover2 = _interopRequireDefault(_PasswordRecover);

var _Register = __webpack_require__(623);

var _Register2 = _interopRequireDefault(_Register);

var _Dashboard = __webpack_require__(625);

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _reactRouterDom = __webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

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
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _PasswordRecover2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Register2.default }),
                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Dashboard2.default })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 518:
false,

/***/ 519:
false,

/***/ 520:
false,

/***/ 605:
false,

/***/ 606:
false,

/***/ 607:
false,

/***/ 608:
false,

/***/ 609:
false,

/***/ 610:
false,

/***/ 611:
false,

/***/ 612:
false,

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Cover = __webpack_require__(618);

var _Cover2 = _interopRequireDefault(_Cover);

var _Roadmap = __webpack_require__(619);

var _Roadmap2 = _interopRequireDefault(_Roadmap);

var _ICO = __webpack_require__(620);

var _ICO2 = _interopRequireDefault(_ICO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'sections-container' },
                _react2.default.createElement(_Cover2.default, null),
                _react2.default.createElement(_Roadmap2.default, null),
                _react2.default.createElement(_ICO2.default, null)
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Styles from '../stylesheets/components/SearchBar.scss'

var Cover = function (_Component) {
    _inherits(Cover, _Component);

    function Cover() {
        _classCallCheck(this, Cover);

        return _possibleConstructorReturn(this, (Cover.__proto__ || Object.getPrototypeOf(Cover)).call(this));
    }

    _createClass(Cover, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "home", className: "cover-section section parallax-background section-inverse-color", "data-stellar-background-ratio": "0.4", style: { backgroundPosition: '50% 0px' } },
                _react2.default.createElement(
                    "div",
                    { className: "video-background-container parallax", "data-stellar-ratio": "0.4" },
                    _react2.default.createElement(
                        "video",
                        { className: "video-background", preload: "auto", autoPlay: true, loop: true, muted: true },
                        _react2.default.createElement("source", { type: "video/mp4", src: 'assets/img/final_video.mp4' })
                    ),
                    _react2.default.createElement(
                        "a",
                        { href: "#roadmap", className: "anchor-link" },
                        _react2.default.createElement("img", { src: 'assets/img/arrow.png', alt: "", className: "arrow" })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "black-dot-background-overlay" },
                    " "
                ),
                _react2.default.createElement(
                    "div",
                    { className: "wrap" },
                    _react2.default.createElement(
                        "div",
                        { className: "rs-content row", "data-stellar-offset-parent": "true" },
                        _react2.default.createElement(
                            "div",
                            { className: "rs-text col-lg-12 col-md-12 text-center wow fadeInLeft wowed animated", "data-wow-duration": "1s", "data-wow-delay": "0.5s" },
                            _react2.default.createElement(
                                "h1",
                                { className: "rs-title" },
                                "RealSafe"
                            ),
                            _react2.default.createElement(
                                "p",
                                { className: "rs-description" },
                                "Ownership Evolved. Extend any Corporation, Partnership, REIT or Appraisable Asset into a Self-Governing Network on the Ethereum Blockchain."
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "btn-cta" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "btn btn-app-download crowdsale" },
                                    _react2.default.createElement("i", { className: "fa fa-sign-in" }),
                                    "Join crowdsale"
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "btn btn-app-download" },
                                    _react2.default.createElement("i", { className: "fa fa-download" }),
                                    "Download WhitePaper"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Cover;
}(_react.Component);

exports.default = Cover;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactSlick = __webpack_require__(521);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Roadmap = function (_Component) {
    _inherits(Roadmap, _Component);

    function Roadmap(props) {
        _classCallCheck(this, Roadmap);

        return _possibleConstructorReturn(this, (Roadmap.__proto__ || Object.getPrototypeOf(Roadmap)).call(this, props));
    }

    _createClass(Roadmap, [{
        key: 'render',
        value: function render() {

            var settings = {
                dots: true,
                infinite: true,
                speed: 500,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: []
            };

            return _react2.default.createElement(
                'section',
                { id: 'roadmap', className: 'roadmap-section section' },
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
                                'Roadmap'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'row' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col-md-10 col-md-offset-1' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'timeline' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'roadmap-list row wow fadeIn', 'data-wow-duration': '1s' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'roadmap-list-item col-sm-6 col-sm-offset-6' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'ICO'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'options' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Asset managers and owners want a better way to raise money. Extend assets into a tradable strucutre.  Pre-purchase now at a discount.'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'history-separator-l' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'roadmap-list-item-l col-sm-6' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Establishment'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'options' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Cash Now - If you own or manage real estate and need cash but dont want to take a loan, simply create an RSO and sell off a portion of your tokens.'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'history-separator-r' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'roadmap-list-item col-sm-6 col-sm-offset-6' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                'Development and Growth of the Ecosystem'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'options' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'Enticing the world\'s best developers to foster the growth and ensure the security of RealSafe is the mission of the RealSafe Foundation which will be established and supported by the .5% per year minting of new RealSafe coins.'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'history-separator-l' })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'roadmap-list-item-l col-sm-6' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'title' },
                                                '100% Decentralization'
                                            ),
                                            _react2.default.createElement(
                                                'ul',
                                                { className: 'options' },
                                                _react2.default.createElement(
                                                    'li',
                                                    null,
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        'A near final phase of RealSafe is to promote self-adding of RSOs with 25-50% of the 1100 RST add-fee going to a network of private auditors.  This will complete the fully autonomous model of RealSafe'
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement('div', { className: 'history-separator-r' })
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

    return Roadmap;
}(_react.Component);

exports.default = Roadmap;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICO = function (_Component) {
    _inherits(ICO, _Component);

    function ICO() {
        _classCallCheck(this, ICO);

        return _possibleConstructorReturn(this, (ICO.__proto__ || Object.getPrototypeOf(ICO)).call(this));
    }

    _createClass(ICO, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "prepurchased", className: "prepurchased-section section" },
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
                                "Pre-Purchase an RSO Economy"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "guarantees-item col-md-2 col-md-offset-1 wow fadeInLeft" },
                            _react2.default.createElement("img", { src: 'assets/img/guarantees-img-1.png', alt: "" }),
                            _react2.default.createElement(
                                "p",
                                { className: "guarantees-item-words" },
                                "Pre-ICO and ICO pre-purchasing of RealSafe RSOs and asset-registrations are paid for with Ether.  "
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "guarantees-item col-md-2 wow fadeInLeft" },
                            _react2.default.createElement("img", { src: 'assets/img/circle2.png', alt: "" }),
                            _react2.default.createElement(
                                "p",
                                { className: "guarantees-item-words" },
                                "The RealSafe token (RST) is unaffiliated with any particular RSO.  1100 RST pre-buys 1 RSO",
                                _react2.default.createElement("br", null),
                                _react2.default.createElement(
                                    "span",
                                    { className: "collapse", id: "guarantess1" },
                                    "with 1 asset-registration credit, its own token-type and near-infinitely fracional tradability on RealSafe Exchange."
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "collapsed more", "data-toggle": "collapse", href: "#guarantess1" },
                                    "Show more..."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "guarantees-item col-md-2 wow zoomIn" },
                            _react2.default.createElement("img", { src: 'assets/img/circle2.png', alt: "" }),
                            _react2.default.createElement(
                                "p",
                                { className: "guarantees-item-words" },
                                "RealSafe LLC is creating the distributed network through which RSOs operate independently,",
                                _react2.default.createElement("br", null),
                                _react2.default.createElement(
                                    "span",
                                    { className: "collapse", id: "guarantess2" },
                                    "responsible for their own regulation and compliance. "
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "collapsed more", "data-toggle": "collapse", href: "#guarantess2" },
                                    "Show more..."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "guarantees-item col-md-2 wow fadeInRight" },
                            _react2.default.createElement("img", { src: 'assets/img/circle2.png', alt: "" }),
                            _react2.default.createElement(
                                "p",
                                { className: "guarantees-item-words" },
                                "RealSafe is a facilitator of fractionated asset management on blockchain.  Each RSO is",
                                _react2.default.createElement("br", null),
                                _react2.default.createElement(
                                    "span",
                                    { className: "collapse", id: "guarantess3" },
                                    "independently controlled and operated by the management team elected by it."
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "collapsed more", "data-toggle": "collapse", href: "#guarantess3" },
                                    "Show more..."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "guarantees-item col-md-2 wow fadeInRight" },
                            _react2.default.createElement("img", { src: 'assets/img/guarantees-img-1.png', alt: "" }),
                            _react2.default.createElement(
                                "p",
                                { className: "guarantees-item-words" },
                                "RealSafe Wallet allows transfers of RST, Etheruem and RSO tokens. RSO kyc feature",
                                _react2.default.createElement("br", null),
                                _react2.default.createElement(
                                    "span",
                                    { className: "collapse", id: "guarantess4" },
                                    "allows RSO transfers to be restrictable to kyc-compliant wallet addresses."
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "collapsed more", "data-toggle": "collapse", href: "#guarantess4" },
                                    "Show more..."
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ICO;
}(_react.Component);

exports.default = ICO;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TokenDistribution = __webpack_require__(622);

var _TokenDistribution2 = _interopRequireDefault(_TokenDistribution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ICO = function (_Component) {
  _inherits(ICO, _Component);

  function ICO() {
    _classCallCheck(this, ICO);

    return _possibleConstructorReturn(this, (ICO.__proto__ || Object.getPrototypeOf(ICO)).apply(this, arguments));
  }

  _createClass(ICO, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_TokenDistribution2.default, null);
    }
  }]);

  return ICO;
}(_react.Component);

exports.default = ICO;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

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

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _Aboutus = __webpack_require__(624);

var _Aboutus2 = _interopRequireDefault(_Aboutus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HowItWorks = function (_Component) {
  _inherits(HowItWorks, _Component);

  function HowItWorks() {
    _classCallCheck(this, HowItWorks);

    return _possibleConstructorReturn(this, (HowItWorks.__proto__ || Object.getPrototypeOf(HowItWorks)).apply(this, arguments));
  }

  _createClass(HowItWorks, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Aboutus2.default, null);
    }
  }]);

  return HowItWorks;
}(_react.Component);

exports.default = HowItWorks;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Styles from '../stylesheets/components/SearchBar.scss'

var Aboutus = function (_Component) {
    _inherits(Aboutus, _Component);

    function Aboutus() {
        _classCallCheck(this, Aboutus);

        return _possibleConstructorReturn(this, (Aboutus.__proto__ || Object.getPrototypeOf(Aboutus)).call(this));
    }

    _createClass(Aboutus, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "section",
                { id: "aboutus", className: "aboutus-section section" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-3 col-sm-4" },
                            _react2.default.createElement(
                                "h2",
                                { className: "section-heading wow fadeIn", "data-wow-duration": "1s" },
                                "We are RealSafe"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-md-9 col-sm-8" },
                            _react2.default.createElement(
                                "p",
                                { className: "wow fadeIn description", "data-wow-duration": "1s" },
                                "RealSafe is a blockchain platform for fractionating asset ownership into exchange-tradable tokens while transforming complex financial deals and governance business into routine blockchain transactions. The result is a network of RealSafe Organizations (RSO)s, asset-backed decentralized autonomous oragnizations owned 100% by their token holders, traded and managed with security and transparency on the Ethereum blockchain.",
                                _react2.default.createElement("br", null),
                                "Raise funds backed by a 4-family building with no risk of default or extend a portfolio of assets into a fully exchange-traded REIT. RealSafe RSOs feature automated distributions and separable voting and ownership tokens. RealSafe Platform offers these services:"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "about-list row wow fadeIn", "data-wow-duration": "1s" },
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-trophy grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Tokenizing Service "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Extension of Deed, LLC, CLO or Real Estate Trust into a tokenized asset managment solution on blockchain. ",
                                _react2.default.createElement(
                                    "span",
                                    { className: "collapse", id: "viewdetails3" },
                                    "The extended form is a RealEstate-backed DAO, we call an RSO. Removing the barrier to asset backed tokenization - anyone can tokenize their corporate strucutre holding real estate with no third party necessary."
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "collapsed more", "data-toggle": "collapse", href: "#viewdetails3" },
                                    "Show more..."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-line-chart grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "RealSafe Marketplace - Lists all RSOs "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "The trading of an RSO commences the moment an owner creates a market by offering any amount of his apportioned tokens on the RealSafe Exchange."
                            )
                        ),
                        _react2.default.createElement("div", { className: "clear" }),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-unlock grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Blockchain Explorer API "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Provides the structure to ensure vital RSO stats. are stored on blockchain. Anyone can create a RealSafe Explorer using the API."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-trophy grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "RealSafe Blockchain Explorer "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "For any RSO selected, displays: a) Number of outstanding tokens and owners b) Addreseses and estimated values of each asset c)Outstanding issues up for vote."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item  col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-line-chart grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                " RealSafe Wallet"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Add an RSO, notarize and time-stamp, deed, trust and regulatory documents before uploading them. RSO voting strucutre. Raise funds as secondary Offerings. Privatize RSO or make it public."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-unlock grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Power and flexibility"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "general partner/propery manager can set disclosable comissions whenever a trade is made of their token, converting the general partner into a fund manager. That's unbelieveable power."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-unlock grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "RSO tokens "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Unique symbols to represent each RSO's ownership. For example, the RSO named \"Lower Manhattan REIT\" has token symbol NYC1 on the RealSafe exchange."
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "about-list-item col-md-6" },
                            _react2.default.createElement(
                                "div",
                                { className: "general_img" },
                                _react2.default.createElement("i", { className: "fa fa-unlock grayscale" })
                            ),
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Compliance and safety  "
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "RSO creator sets features to allow investor buy-in restrictions such as kyc compliance, min/max ownership limits, buy/sell freq. limits etc."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Aboutus;
}(_react.Component);

exports.default = Aboutus;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(16), RootInstanceProvider = __webpack_require__(17), ReactMount = __webpack_require__(13), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Team = function (_Component) {
    _inherits(Team, _Component);

    function Team() {
        _classCallCheck(this, Team);

        return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this));
    }

    _createClass(Team, [{
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
                                'Team'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                _react2.default.createElement('img', { src: 'assets/img/team-1.png', alt: '' }),
                                _react2.default.createElement(
                                    'h4',
                                    null,
                                    'James Yen'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Co-Founder, Managing Director, Governmental, Corporate, Investor Relations, Business Lead'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Mr. Yen is an ex-Wall Street Investment Banker and Ex-Hedge Fund Manager, having managed a $1.8 billion+ dollar portfolio at CIFC Asset Management LLC, the 3rd largest leveraged finance Hedge Fund and CLO in the United States. Mr. Yen has 10-years experience in sectors including financial technology and payment systems, having been the largest Institutional Leveraged Loan Investor to such companies as First Data, Vantiv, TransFirst, RBS WorldPay, EZE Software, Digital Insight, First American Payments, Gemalto, Fleetcorp, Verifone, and others. Mr. Yen has operating experience in sustainable trade facilitation in developing nations and is now a Development Investor with a track record in sourcing development projects around the world.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                _react2.default.createElement('img', { src: 'assets/img/team-2.png', alt: '' }),
                                _react2.default.createElement(
                                    'h4',
                                    null,
                                    'Ken Silverman'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Co-founder, Managing Director, RealSafe Creator and Lead Project Manager'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'The creator of RealSafe, Mr. Silverman is a computer engineer with 20+ years experience designing Financial Technology Systems, Artificial Intelligence engines, and Social Commerce and social geolocation based real time transaction platforms. Mr. Silverman is the co-founder of one of the first artificial intelligence companies to use machine learning in predictive analytics. Ken served as co-founder and vice-president of technology at Webmind Inc.  He is the Chairman and CTO of Spotwired. Mr. Silverman has years of experience in cutting edge FinTech applications and is currently active in Blockchain technology and ICO markets. He regularly contributes to Blockchain whitepapers and research theses ideas. A seasoned property manger with a portfolio of assets, RealSafe was born while discussing with James a way to pair foreign investors with extranational assets.'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            _react2.default.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                _react2.default.createElement('img', { src: 'assets/img/team-3.png', alt: '' }),
                                _react2.default.createElement(
                                    'h4',
                                    null,
                                    'Jonathan Schaff'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Managing director, Investor Relations, and Business & Trading Analysis'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Mr. Schaff has been a Blockchain investor, algorithm based High-Frequency-Quantitative Trading Hedge Fund Manager (Bit and Ask LLC), and Financial Technology and multi-currency transfer expert with 8+ Years experience. Mr. Schaff developed a quantitative market neutral Blockchain trading technology platform that has returned 80%+ annual return over the history of the platform. The platform currently manages under $10 Million US Dollars with no external funding. Quantitative hedge funds including Shanghai based QuattroQuant has solicited the firm for acquisition and seed funding in excess of $20 Million US Dollars. Mr. Schaff began his career as a banker and financial systems modernization expert at CapitalOne Bank, N.A. in the United States.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Team;
}(_react.Component);

exports.default = Team;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(19); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ })

})