'use strict';

const Ru = require('rutils');

const B = require('bluebird');

// const fetch = require('fetch-everywhere');

const FormData = require('form-data');


const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};




const isGet     = Ru.eq( METHODS.GET );




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
const renderArray = Ru.pipe(
    Ru.join(','),
    Ru.between('[', ']')
)



const isFormData = Ru.pipe(
    Ru.path(['constructor', 'name']),
    Ru.eq('FormData')
)




const confWithDefaults = Ru.defaultDeepObjTo({
    getToken: () => B.resolve(null),
    setToken: () => B.resolve(null),
    urlEncoding: {
        renderArray,
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
                'Content-Type': 'application/json',
            }
        }
    }
})


const httpResIsJson = res => res.headers.get("content-type") === 'application/json' ;






const mkApi = conf => {

    let {
        getToken,
        setToken,
        rootUrl,
        urlEncoding,
        version,
        versionUrl,
        apiRoute,

        xfInput,
        xfOutput,

        logger,
        defaultSpec

    } = confWithDefaults( conf );


    let {
        renderArray

    } = urlEncoding;



    const renderUrlValue = Ru.cond([
        [Ru.is( Array ),        renderArray],
        [Ru.T,                  Ru.I]
    ])



    const buildQs = (acc, kvPair) => {

        let [k,v] = kvPair;

        let vStr = renderUrlValue( v );

        return `${acc}${k}=${vStr}&`;
    }


    const buildQsValue = Ru.pipe(
        xfInput,
        Ru.toPairs,
        Ru.reduce( buildQs, '?' ),
        Ru.init                             //delete the last & value from the reduce
    )




    const isEmptyString = Ru.both(
        Ru.is( String ),
        Ru.isEmpty
    )

    const renderPartUrl = Ru.cond([
        [ isEmptyString, Ru.K('') ],
        [ Ru.is( String ), Ru.concat('/') ],
        [ Ru.is( Number ), n => `/${n}` ],
        [ Ru.T, Ru.K('') ],
    ])


    const joinUrlReducerFn = (url, partUrl) => Ru.concat(url, renderPartUrl( partUrl ));

    const joinUrl = Ru.pipe(
        Ru.reduce( joinUrlReducerFn, '' ),
        Ru.tail
    );




    const getFetchSpec = (token, method, qsOrBody) => {

        let body = isGet( method ) ? null : xfInput(qsOrBody );

        // console.log('qsOrBody', qsOrBody)
        // console.log('body', body)

        let contentType = isFormData( qsOrBody ) ? null : 'application/json';

        let headers = {
            token,
            'Content-Type': contentType
        };

        let spec = {
            headers,
            body,
            method
        };

        return spec;
    }



    const apiCall = method => (resourceUrl, qsOrBody, spec ) => {

        spec = Ru.defaultDeepObjTo( defaultSpec, spec );

        let fetchSpecFromCaller = spec.fetchSpec;


        return(
          B
          .resolve( getToken() )
          .then( token => {

            //   let partUrl = `${rootUrl}/${apiRoute}/${versionUrl(version)}/${resourceUrl}`;

              let partUrl = joinUrl( [rootUrl, apiRoute, versionUrl(version), resourceUrl] )
              let qs = isGet( method ) ? buildQsValue( qsOrBody ) : '';

              let fetchSpec = Ru.deepMerge( getFetchSpec( token, method, qsOrBody ), fetchSpecFromCaller );




              let url = `${partUrl}${qs}`;

              if(logger){
                  console.log('fetch url', url)
                  console.log('fetch querySpec', JSON.stringify(fetchSpec, null, 2) )
              }


              fetchSpec = Ru.over( Ru.lensProp('body'), JSON.stringify )( fetchSpec );


              const interpretJSON = res => {

                  return(
                      B
                      .resolve()
                      .then( () => res.json() )
                      .then( xfOutput )
                      .tap( Ru.when( Ru.has('token'), res => setToken(res.token) ) )
                  )
              }



              const interpretResponse = Ru.pipe(
                  Ru.cond([
                      [httpResIsJson,   interpretJSON       ],
                      [Ru.T,            res => res.text()   ],
                  ])
                //   Ru.tap( response => console.log('response', response) )
              )


              return(
                  B
                  .resolve( fetch(url, fetchSpec) )
                //   .then( checkHttpRequest )
                 .then( interpretResponse )
            )
          })
        //   .catch( handleApiError )
        )
    };


    let api = {
      'get'     : apiCall( METHODS.GET ),
      'post'    : apiCall( METHODS.POST  ),
      'put'     : apiCall( METHODS.PUT ),
      'delete'  : apiCall( METHODS.DELETE ),
      'patch'   : apiCall( METHODS.PATCH )
    };


    return api;
}


module.exports = mkApi;
