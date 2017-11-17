webpackHotUpdate(0,{

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(14), RootInstanceProvider = __webpack_require__(15), ReactMount = __webpack_require__(12), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var Ru = __webpack_require__(41);

var B = __webpack_require__(62);

// const fetch = require('fetch-everywhere');

var FormData = __webpack_require__(830);

var METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

var isGet = Ru.eq(METHODS.GET);

// // API_ERROR_TYPE
// // const apiErrorsTypes = [ 'API_HTTP_ERROR', 'API_NETWORK_ERROR' ];
//
//
// const handleApiHttpError = err => {
//
//     let { httpStatus, addapsCode } = err;
//
//     console.log( 'HTTP_ERROR' )
//     console.log( 'httpStatus', httpStatus )
//     console.log( 'addapsCode', addapsCode )
//
//     throw err;
// }
//
//
// const handleApiNetworkError = err => {
//
//     let { code } = err;
//
//     console.log( 'API_NETWORK_ERROR' )
//     console.log( 'code', code )
//
//     throw err;
// }
//
//
//
// const handleApiError = Ru.cond([
//     [Ru.propEq('API_ERROR_TYPE', 'HTTP_ERROR' ),             handleApiHttpError ],
//     [Ru.propEq('API_ERROR_TYPE', 'API_NETWORK_ERROR' ),      handleApiNetworkError ],
//     [ Ru.T ,                                                 handleApiNetworkError ],
// ]);
//
//
//
//
//
// const handleError =  err => {
//
//     console.log( 'some error in the client api' )
//     console.log( err );
//
//     throw err;
// }
//
//
// const checkHttpRequest = response => {
//
//     let httpRequestIsOk = response.ok;
//
//     if( !httpRequestIsOk ){
//         // throw new Error({'hola':'hola'})
//
//         let error = {
//             API_ERROR_TYPE      : 'HTTP_ERROR',
//             httpStatus          : response.status,
//             addapsCode          : 40
//         };
//
//         throw error
//     }
//
//     return response;
// }


// defaults array render function
var renderArray = Ru.pipe(Ru.join(','), Ru.between('[', ']'));

var isFormData = Ru.pipe(Ru.path(['constructor', 'name']), Ru.eq('FormData'));

var confWithDefaults = Ru.defaultDeepObjTo({
    getToken: function getToken() {
        return B.resolve(null);
    },
    setToken: function setToken() {
        return B.resolve(null);
    },
    urlEncoding: {
        renderArray: renderArray
        // renderVersion
    },
    version: 1.0,
    versionUrl: Ru.I,
    apiRoute: '',
    xfInput: Ru.I,
    xfOutput: Ru.I,
    logger: false,

    defaultSpec: {
        fetchSpec: {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    }
});

var httpResIsJson = function httpResIsJson(res) {
    return res.headers.get("content-type") === 'application/json';
};

var mkApi = function mkApi(conf) {
    var _confWithDefaults = confWithDefaults(conf),
        getToken = _confWithDefaults.getToken,
        setToken = _confWithDefaults.setToken,
        rootUrl = _confWithDefaults.rootUrl,
        urlEncoding = _confWithDefaults.urlEncoding,
        version = _confWithDefaults.version,
        versionUrl = _confWithDefaults.versionUrl,
        apiRoute = _confWithDefaults.apiRoute,
        xfInput = _confWithDefaults.xfInput,
        xfOutput = _confWithDefaults.xfOutput,
        logger = _confWithDefaults.logger,
        defaultSpec = _confWithDefaults.defaultSpec;

    var renderArray = urlEncoding.renderArray;


    var renderUrlValue = Ru.cond([[Ru.is(Array), renderArray], [Ru.T, Ru.I]]);

    var buildQs = function buildQs(acc, kvPair) {
        var _kvPair = _slicedToArray(kvPair, 2),
            k = _kvPair[0],
            v = _kvPair[1];

        var vStr = renderUrlValue(v);

        return '' + acc + k + '=' + vStr + '&';
    };

    var buildQsValue = Ru.pipe(xfInput, Ru.toPairs, Ru.reduce(buildQs, '?'), Ru.init //delete the last & value from the reduce
    );

    var isEmptyString = Ru.both(Ru.is(String), Ru.isEmpty);

    var renderPartUrl = Ru.cond([[isEmptyString, Ru.K('')], [Ru.is(String), Ru.concat('/')], [Ru.is(Number), function (n) {
        return '/' + n;
    }], [Ru.T, Ru.K('')]]);

    var joinUrlReducerFn = function joinUrlReducerFn(url, partUrl) {
        return Ru.concat(url, renderPartUrl(partUrl));
    };

    var joinUrl = Ru.pipe(Ru.reduce(joinUrlReducerFn, ''), Ru.tail);

    var getFetchSpec = function getFetchSpec(token, method, qsOrBody) {

        var body = isGet(method) ? null : xfInput(qsOrBody);

        // console.log('qsOrBody', qsOrBody)
        // console.log('body', body)

        var contentType = isFormData(qsOrBody) ? null : 'application/json';

        var headers = {
            token: token,
            'Content-Type': contentType
        };

        var spec = {
            headers: headers,
            body: body,
            method: method
        };

        return spec;
    };

    var apiCall = function apiCall(method) {
        return function (resourceUrl, qsOrBody, spec) {

            spec = Ru.defaultDeepObjTo(defaultSpec, spec);

            var fetchSpecFromCaller = spec.fetchSpec;

            return B.resolve(getToken()).then(function (token) {

                //   let partUrl = `${rootUrl}/${apiRoute}/${versionUrl(version)}/${resourceUrl}`;

                var partUrl = joinUrl([rootUrl, apiRoute, versionUrl(version), resourceUrl]);
                var qs = isGet(method) ? buildQsValue(qsOrBody) : '';

                var fetchSpec = Ru.deepMerge(getFetchSpec(token, method, qsOrBody), fetchSpecFromCaller);

                var url = '' + partUrl + qs;

                if (logger) {
                    console.log('fetch url', url);
                    console.log('fetch querySpec', JSON.stringify(fetchSpec, null, 2));
                }

                fetchSpec = Ru.over(Ru.lensProp('body'), JSON.stringify)(fetchSpec);

                var interpretJSON = function interpretJSON(res) {

                    return B.resolve().then(function () {
                        return res.json();
                    }).then(xfOutput).tap(Ru.when(Ru.has('token'), function (res) {
                        return setToken(res.token);
                    }));
                };

                var interpretResponse = Ru.pipe(Ru.cond([[httpResIsJson, interpretJSON], [Ru.T, function (res) {
                    return res.text();
                }]])
                //   Ru.tap( response => console.log('response', response) )
                );

                return B.resolve(fetch(url, fetchSpec))
                //   .then( checkHttpRequest )
                .then(interpretResponse);
            })
            //   .catch( handleApiError )
            ;
        };
    };

    var api = {
        'get': apiCall(METHODS.GET),
        'post': apiCall(METHODS.POST),
        'put': apiCall(METHODS.PUT),
        'delete': apiCall(METHODS.DELETE),
        'patch': apiCall(METHODS.PATCH)
    };

    return api;
};

module.exports = mkApi;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(18); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),

/***/ 828:
false,

/***/ 829:
false

})