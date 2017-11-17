webpackHotUpdate(0,{

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(18), RootInstanceProvider = __webpack_require__(19), ReactMount = __webpack_require__(15), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _rutils = __webpack_require__(72);

var _rutils2 = _interopRequireDefault(_rutils);

var _auth = __webpack_require__(285);

var _redux = __webpack_require__(82);

var _reactRouterDom = __webpack_require__(69);

var _autobindDecorator = __webpack_require__(161);

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactRedux = __webpack_require__(170);

var _bluebird = __webpack_require__(169);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _store = __webpack_require__(172);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = (0, _reactRouterDom.withRouter)(_class = (0, _autobindDecorator2.default)(_class = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard() {
        _classCallCheck(this, Dashboard);

        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));
    }

    _createClass(Dashboard, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'section',
                { id: 'team', className: 'team-section section' },
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-12' },
                            React.createElement(
                                'h2',
                                { className: 'section-heading wow fadeIn', 'data-wow-duration': '1s' },
                                'Dashboard'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                React.createElement('img', { src: 'assets/img/team-1.png', alt: '' }),
                                React.createElement(
                                    'h4',
                                    null,
                                    'James Yen'
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        'Co-Founder, Managing Director, Governmental, Corporate, Investor Relations, Business Lead'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Mr. Yen is an ex-Wall Street Investment Banker and Ex-Hedge Fund Manager, having managed a $1.8 billion+ dollar portfolio at CIFC Asset Management LLC, the 3rd largest leveraged finance Hedge Fund and CLO in the United States. Mr. Yen has 10-years experience in sectors including financial technology and payment systems, having been the largest Institutional Leveraged Loan Investor to such companies as First Data, Vantiv, TransFirst, RBS WorldPay, EZE Software, Digital Insight, First American Payments, Gemalto, Fleetcorp, Verifone, and others. Mr. Yen has operating experience in sustainable trade facilitation in developing nations and is now a Development Investor with a track record in sourcing development projects around the world.'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                React.createElement('img', { src: 'assets/img/team-2.png', alt: '' }),
                                React.createElement(
                                    'h4',
                                    null,
                                    'Ken Silverman'
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        'Co-founder, Managing Director, RealSafe Creator and Lead Project Manager'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'The creator of RealSafe, Mr. Silverman is a computer engineer with 20+ years experience designing Financial Technology Systems, Artificial Intelligence engines, and Social Commerce and social geolocation based real time transaction platforms. Mr. Silverman is the co-founder of one of the first artificial intelligence companies to use machine learning in predictive analytics. Ken served as co-founder and vice-president of technology at Webmind Inc.  He is the Chairman and CTO of Spotwired. Mr. Silverman has years of experience in cutting edge FinTech applications and is currently active in Blockchain technology and ICO markets. He regularly contributes to Blockchain whitepapers and research theses ideas. A seasoned property manger with a portfolio of assets, RealSafe was born while discussing with James a way to pair foreign investors with extranational assets.'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-4 col-sm-6' },
                            React.createElement(
                                'div',
                                { className: 'teams-item wow fadeInLeft' },
                                React.createElement('img', { src: 'assets/img/team-3.png', alt: '' }),
                                React.createElement(
                                    'h4',
                                    null,
                                    'Jonathan Schaff'
                                ),
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        null,
                                        'Managing director, Investor Relations, and Business & Trading Analysis'
                                    ),
                                    React.createElement(
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

    return Dashboard;
}(Component)) || _class) || _class;

exports.default = Dashboard;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ })

})