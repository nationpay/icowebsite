webpackHotUpdate(0,{

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(14), RootInstanceProvider = __webpack_require__(15), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rutils = __webpack_require__(41);

var _rutils2 = _interopRequireDefault(_rutils);

var _restApiJsClient = __webpack_require__(826);

var _restApiJsClient2 = _interopRequireDefault(_restApiJsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var snakeCaseKeysIfObj = _rutils2.default.pipe(_rutils2.default.cond([[_rutils2.default.isPlainObj, _rutils2.default.snakeCaseKeys], [_rutils2.default.T, _rutils2.default.I]]));

var api = null;

var getApi = function getApi(token) {
    return (0, _restApiJsClient2.default)({
        getToken: _rutils2.default.K(token),
        apiRoute: 'api',
        rootUrl: 'http://localhost:3000',
        versionUrl: _rutils2.default.K(''),
        logger: true
        // xfInput: snakeCaseKeysIfObj
    });
};

exports.default = getApi;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(18); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ })

})