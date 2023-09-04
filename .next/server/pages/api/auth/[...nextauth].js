"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "openid-client":
/*!********************************!*\
  !*** external "openid-client" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("openid-client");;

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/***/ ((module) => {

module.exports = import("url-join");;

/***/ }),

/***/ "(api)/./lib/oauth.ts":
/*!**********************!*\
  !*** ./lib/oauth.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClientCredentialsToken\": () => (/* binding */ getClientCredentialsToken),\n/* harmony export */   \"refreshAuthToken\": () => (/* binding */ refreshAuthToken)\n/* harmony export */ });\n/* harmony import */ var openid_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openid-client */ \"openid-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openid_client__WEBPACK_IMPORTED_MODULE_0__]);\nopenid_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nlet client;\nlet token;\nopenid_client__WEBPACK_IMPORTED_MODULE_0__.custom.setHttpOptionsDefaults({\n    timeout: 30000\n});\nasync function getOAuthClient() {\n    if ( false || !process.env.CLIENT_SECRET || !process.env.NIFTORY_AUTH_ISSUER) {\n        throw new Error(\"NIFTORY_AUTH_ISSUER, NEXT_PUBLIC_CLIENT_ID, and CLIENT_SECRET must be set\");\n    }\n    if (!client) {\n        const issuer = await openid_client__WEBPACK_IMPORTED_MODULE_0__.Issuer.discover(process.env.NIFTORY_AUTH_ISSUER);\n        client = new issuer.Client({\n            client_id: \"cliakqhgm0000jw0wq1ycowp7\",\n            client_secret: process.env.CLIENT_SECRET\n        });\n    }\n    return client;\n}\n/**\r\n * Gets a client credentials token.\r\n * @returns The client credentials token that represents the client itself.\r\n */ async function getClientCredentialsToken() {\n    const client = await getOAuthClient();\n    if (!token || token.expired()) {\n        token = await client.grant({\n            grant_type: \"client_credentials\"\n        });\n    }\n    return token.access_token;\n}\n/**\r\n * Refreshes an auth token.\r\n * @param refreshToken The refresh token to use to refresh the auth token\r\n * @returns A refreshed token set\r\n */ async function refreshAuthToken(refreshToken) {\n    const client = await getOAuthClient();\n    return await client.refresh(refreshToken);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvb2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9FO0FBRXBFLElBQUlFLE1BQU07QUFDVixJQUFJQyxLQUFLO0FBRVRGLHdFQUE2QixDQUFDO0lBQUVJLE9BQU8sRUFBRSxLQUFLO0NBQUUsQ0FBQztBQUVqRCxlQUFlQyxjQUFjLEdBQUc7SUFDOUIsSUFDRSxNQUFrQyxJQUNsQyxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsYUFBYSxJQUMxQixDQUFDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csbUJBQW1CLEVBQ2hDO1FBQ0EsTUFBTSxJQUFJQyxLQUFLLENBQUMsMkVBQTJFLENBQUM7S0FDN0Y7SUFFRCxJQUFJLENBQUNWLE1BQU0sRUFBRTtRQUNYLE1BQU1XLE1BQU0sR0FBRyxNQUFNYiwwREFBZSxDQUFDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csbUJBQW1CLENBQUM7UUFDckVULE1BQU0sR0FBRyxJQUFJVyxNQUFNLENBQUNFLE1BQU0sQ0FBQztZQUN6QkMsU0FBUyxFQUFFVCwyQkFBaUM7WUFDNUNVLGFBQWEsRUFBRVYsT0FBTyxDQUFDQyxHQUFHLENBQUNFLGFBQWE7U0FDekMsQ0FBQztLQUNIO0lBRUQsT0FBT1IsTUFBTTtDQUNkO0FBRUQ7SUFLRSxNQUFNQSxNQUFNLEdBQUcsTUFBTUk7SUFFckIsSUFBSSxDQUFDSCxLQUFLLElBQUlBLEtBQUssQ0FBQ2dCLE9BQU8sRUFBRSxFQUFFO0lBQzdCaEIsRUFBSyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ2tCLEtBQUssQ0FBQztZQUFFQyxVQUFVLEVBQUU7U0FBc0IsQ0FBQztLQUNqRTtJQUVELE9BQU9sQixLQUFLLENBQUNtQixZQUFZO0NBQzFCO0FBRUQ7SUFNRSxNQUFNcEIsTUFBTSxHQUFHLE1BQU1JOztDQUd0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrdmVyc2l0eV9uZXh0Ly4vbGliL29hdXRoLnRzP2I1YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNsaWVudCwgSXNzdWVyLCBUb2tlblNldCwgY3VzdG9tIH0gZnJvbSBcIm9wZW5pZC1jbGllbnRcIlxyXG5cclxubGV0IGNsaWVudDogQmFzZUNsaWVudFxyXG5sZXQgdG9rZW46IFRva2VuU2V0XHJcblxyXG5jdXN0b20uc2V0SHR0cE9wdGlvbnNEZWZhdWx0cyh7IHRpbWVvdXQ6IDMwMDAwIH0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRPQXV0aENsaWVudCgpIHtcclxuICBpZiAoXHJcbiAgICAhcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIHx8XHJcbiAgICAhcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCB8fFxyXG4gICAgIXByb2Nlc3MuZW52Lk5JRlRPUllfQVVUSF9JU1NVRVJcclxuICApIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk5JRlRPUllfQVVUSF9JU1NVRVIsIE5FWFRfUFVCTElDX0NMSUVOVF9JRCwgYW5kIENMSUVOVF9TRUNSRVQgbXVzdCBiZSBzZXRcIilcclxuICB9XHJcblxyXG4gIGlmICghY2xpZW50KSB7XHJcbiAgICBjb25zdCBpc3N1ZXIgPSBhd2FpdCBJc3N1ZXIuZGlzY292ZXIocHJvY2Vzcy5lbnYuTklGVE9SWV9BVVRIX0lTU1VFUilcclxuICAgIGNsaWVudCA9IG5ldyBpc3N1ZXIuQ2xpZW50KHtcclxuICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHByb2Nlc3MuZW52LkNMSUVOVF9TRUNSRVQsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsaWVudFxyXG59XHJcblxyXG4vKipcclxuICogR2V0cyBhIGNsaWVudCBjcmVkZW50aWFscyB0b2tlbi5cclxuICogQHJldHVybnMgVGhlIGNsaWVudCBjcmVkZW50aWFscyB0b2tlbiB0aGF0IHJlcHJlc2VudHMgdGhlIGNsaWVudCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50Q3JlZGVudGlhbHNUb2tlbigpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBnZXRPQXV0aENsaWVudCgpXHJcblxyXG4gIGlmICghdG9rZW4gfHwgdG9rZW4uZXhwaXJlZCgpKSB7XHJcbiAgICB0b2tlbiA9IGF3YWl0IGNsaWVudC5ncmFudCh7IGdyYW50X3R5cGU6IFwiY2xpZW50X2NyZWRlbnRpYWxzXCIgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0b2tlbi5hY2Nlc3NfdG9rZW5cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZnJlc2hlcyBhbiBhdXRoIHRva2VuLlxyXG4gKiBAcGFyYW0gcmVmcmVzaFRva2VuIFRoZSByZWZyZXNoIHRva2VuIHRvIHVzZSB0byByZWZyZXNoIHRoZSBhdXRoIHRva2VuXHJcbiAqIEByZXR1cm5zIEEgcmVmcmVzaGVkIHRva2VuIHNldFxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hBdXRoVG9rZW4ocmVmcmVzaFRva2VuOiBzdHJpbmcpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBnZXRPQXV0aENsaWVudCgpXHJcblxyXG4gIHJldHVybiBhd2FpdCBjbGllbnQucmVmcmVzaChyZWZyZXNoVG9rZW4pXHJcbn1cclxuIl0sIm5hbWVzIjpbIklzc3VlciIsImN1c3RvbSIsImNsaWVudCIsInRva2VuIiwic2V0SHR0cE9wdGlvbnNEZWZhdWx0cyIsInRpbWVvdXQiLCJnZXRPQXV0aENsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJDTElFTlRfU0VDUkVUIiwiTklGVE9SWV9BVVRIX0lTU1VFUiIsIkVycm9yIiwiaXNzdWVyIiwiZGlzY292ZXIiLCJDbGllbnQiLCJjbGllbnRfaWQiLCJjbGllbnRfc2VjcmV0IiwiZ2V0Q2xpZW50Q3JlZGVudGlhbHNUb2tlbiIsImV4cGlyZWQiLCJncmFudCIsImdyYW50X3R5cGUiLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoQXV0aFRva2VuIiwicmVmcmVzaFRva2VuIiwicmVmcmVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/oauth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-join */ \"url-join\");\n/* harmony import */ var _lib_oauth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/oauth */ \"(api)/./lib/oauth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([url_join__WEBPACK_IMPORTED_MODULE_1__, _lib_oauth__WEBPACK_IMPORTED_MODULE_2__]);\n([url_join__WEBPACK_IMPORTED_MODULE_1__, _lib_oauth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst NIFTORY_AUTH_PROVIDER = {\n    id: \"niftory\",\n    name: \"Niftory\",\n    type: \"oauth\",\n    wellKnown: (0,url_join__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(process.env.NIFTORY_AUTH_ISSUER, \"/.well-known/openid-configuration\"),\n    // We request offline_access and consent prompt because we need to get a refresh token\n    authorization: {\n        params: {\n            scope: \"openid email profile offline_access\",\n            prompt: \"consent\"\n        }\n    },\n    clientId: \"cliakqhgm0000jw0wq1ycowp7\",\n    clientSecret: process.env.CLIENT_SECRET,\n    checks: [\n        \"pkce\",\n        \"state\"\n    ],\n    idToken: true,\n    profile (profile) {\n        return {\n            id: profile.sub,\n            name: profile.name,\n            email: profile.email,\n            image: profile.picture\n        };\n    },\n    httpOptions: {\n        timeout: 10000\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        NIFTORY_AUTH_PROVIDER\n    ],\n    debug: true,\n    callbacks: {\n        // See also: https://next-auth.js.org/tutorials/refresh-token-rotation\n        jwt: async ({ token , user , account  })=>{\n            // user and account are only passed in at inital sign in.\n            if (account && user) {\n                return {\n                    ...token,\n                    authToken: account?.id_token,\n                    authTokenExpiresAt: account?.expires_at * 1000,\n                    refreshToken: account?.refresh_token\n                };\n            }\n            // cookies()\n            console.log(\"Token:\", token);\n            console.log(\"User:\", user);\n            console.log(\"Account:\", account);\n            // this isn't initial sign-in, so let's see if the token is still valid\n            //@ts-ignore\n            if (Date.now() < token.authTokenExpiresAt) {\n                // token is still valid, no need to refresh it\n                return token;\n            }\n            // if we get here, the token is expired, so we need to refresh it\n            try {\n                const refreshed = await (0,_lib_oauth__WEBPACK_IMPORTED_MODULE_2__.refreshAuthToken)(token.refreshToken);\n                return {\n                    ...token,\n                    authToken: refreshed?.id_token,\n                    authTokenExpiresAt: refreshed?.expires_at * 1000,\n                    refreshToken: refreshed?.refresh_token || token?.refresh_token\n                };\n            } catch (e) {\n                console.error(e);\n                return {\n                    ...token,\n                    error: e\n                };\n            }\n        },\n        session: async ({ session , token  })=>{\n            //@ts-ignore\n            session.userid = token.sub;\n            //@ts-ignore\n            session.clientId = token.aud;\n            //@ts-ignore\n            session.authToken = token.authToken;\n            //@ts-ignore\n            session.error = token.error;\n            return session;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBRUY7QUFDd0I7QUFFdEQsTUFBTUcscUJBQXFCLEdBQWE7SUFDdENDLEVBQUUsRUFBRSxTQUFTO0lBQ2JDLElBQUksRUFBRSxTQUFTO0lBQ2ZDLElBQUksRUFBRSxPQUFPO0lBQ2JDLFNBQVMsRUFBRU4sb0RBQU8sQ0FDaEJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsRUFDL0IsbUNBQW1DLENBQ3BDO0lBRUQsc0ZBQXNGO0lBQ3RGQyxhQUFhLEVBQUU7UUFDYkMsTUFBTSxFQUFFO1lBQUVDLEtBQUssRUFBRSxxQ0FBcUM7WUFBRUMsTUFBTSxFQUFFLFNBQVM7U0FBRTtLQUM1RTtJQUVEQyxRQUFRLEVBQUVQLDJCQUFpQztJQUMzQ1MsWUFBWSxFQUFFVCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1MsYUFBYTtJQUN2Q0MsTUFBTSxFQUFFO1FBQUMsTUFBTTtRQUFFLE9BQU87S0FBQztJQUN6QkMsT0FBTyxFQUFFLElBQUk7SUFDYkMsT0FBTyxFQUFDQSxPQUFPLEVBQUU7UUFDZixPQUFPO1lBQ0xqQixFQUFFLEVBQUVpQixPQUFPLENBQUNDLEdBQUc7WUFDZmpCLElBQUksRUFBRWdCLE9BQU8sQ0FBQ2hCLElBQUk7WUFDbEJrQixLQUFLLEVBQUVGLE9BQU8sQ0FBQ0UsS0FBSztZQUNwQkMsS0FBSyxFQUFFSCxPQUFPLENBQUNJLE9BQU87U0FDdkI7S0FDRjtJQUNEQyxXQUFXLEVBQUU7UUFDWEMsT0FBTyxFQUFFLEtBQUs7S0FDZjtDQUNGO0FBRUQsaUVBQWUzQixnREFBUSxDQUFDO0lBQ3RCNEIsU0FBUyxFQUFFO1FBQUN6QixxQkFBcUI7S0FBQztJQUNsQzBCLEtBQUssRUFBRSxJQUFJO0lBQ1hDLFNBQVMsRUFBRTtRQUNULHNFQUFzRTtRQUN0RUMsR0FBRyxFQUFFLE9BQU8sRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUVDLE9BQU8sR0FBRSxHQUFLO1lBQ3ZDLHlEQUF5RDtZQUN6RCxJQUFJQSxPQUFPLElBQUlELElBQUksRUFBRTtnQkFDbkIsT0FBTztvQkFDTCxHQUFHRCxLQUFLO29CQUNSRyxTQUFTLEVBQUVELE9BQU8sRUFBRUUsUUFBUTtvQkFDNUJDLGtCQUFrQixFQUFFSCxPQUFPLEVBQUVJLFVBQVUsR0FBRyxJQUFJO29CQUM5Q0MsWUFBWSxFQUFFTCxPQUFPLEVBQUVNLGFBQWE7aUJBQ3JDO2FBQ0Y7WUFDRCxZQUFZO1lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBQ1YsS0FBSyxDQUFDO1lBRTNCUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUNULElBQUksQ0FBQztZQUN6QlEsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFDUixPQUFPLENBQUM7WUFDL0IsdUVBQXVFO1lBQ3ZFLFlBQVk7WUFDWixJQUFJUyxJQUFJLENBQUNDLEdBQUcsRUFBRSxHQUFHWixLQUFLLENBQUNLLGtCQUFrQixFQUFFO2dCQUN6Qyw4Q0FBOEM7Z0JBQzlDLE9BQU9MLEtBQUs7YUFDYjtZQUVELGlFQUFpRTtZQUNqRSxJQUFJO2dCQUNGLE1BQU1hLFNBQVMsR0FBRyxNQUFNM0MsNERBQWdCLENBQUM4QixLQUFLLENBQUNPLFlBQVksQ0FBVztnQkFDdEUsT0FBTztvQkFDTCxHQUFHUCxLQUFLO29CQUNSRyxTQUFTLEVBQUVVLFNBQVMsRUFBRVQsUUFBUTtvQkFDOUJDLGtCQUFrQixFQUFFUSxTQUFTLEVBQUVQLFVBQVUsR0FBRyxJQUFJO29CQUNoREMsWUFBWSxFQUFFTSxTQUFTLEVBQUVMLGFBQWEsSUFBSVIsS0FBSyxFQUFFUSxhQUFhO2lCQUMvRDthQUNGLENBQUMsT0FBT00sQ0FBQyxFQUFFO2dCQUNWTCxPQUFPLENBQUNNLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO2dCQUNoQixPQUFPO29CQUFFLEdBQUdkLEtBQUs7b0JBQUVlLEtBQUssRUFBRUQsQ0FBQztpQkFBRTthQUM5QjtTQUNGO1FBQ0RFLE9BQU8sRUFBRSxPQUFPLEVBQUVBLE9BQU8sR0FBRWhCLEtBQUssR0FBRSxHQUFLO1lBQ3JDLFlBQVk7WUFDWmdCLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHakIsS0FBSyxDQUFDVixHQUFHO1lBQzFCLFlBQVk7WUFDWjBCLE9BQU8sQ0FBQ2pDLFFBQVEsR0FBR2lCLEtBQUssQ0FBQ2tCLEdBQUc7WUFDNUIsWUFBWTtZQUNaRixPQUFPLENBQUNiLFNBQVMsR0FBR0gsS0FBSyxDQUFDRyxTQUFTO1lBQ25DLFlBQVk7WUFDWmEsT0FBTyxDQUFDRCxLQUFLLEdBQUdmLEtBQUssQ0FBQ2UsS0FBSztZQUUzQixPQUFPQyxPQUFPO1NBQ2Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9ja3ZlcnNpdHlfbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbmltcG9ydCAge1Byb3ZpZGVyfSAgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnNcIlxyXG5pbXBvcnQgdXJsam9pbiBmcm9tIFwidXJsLWpvaW5cIlxyXG5pbXBvcnQgeyByZWZyZXNoQXV0aFRva2VuIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9vYXV0aFwiO1xyXG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL2Nvb2tpZXNcIjtcclxuY29uc3QgTklGVE9SWV9BVVRIX1BST1ZJREVSOiBQcm92aWRlciA9IHtcclxuICBpZDogXCJuaWZ0b3J5XCIsXHJcbiAgbmFtZTogXCJOaWZ0b3J5XCIsXHJcbiAgdHlwZTogXCJvYXV0aFwiLFxyXG4gIHdlbGxLbm93bjogdXJsam9pbihcclxuICAgIHByb2Nlc3MuZW52Lk5JRlRPUllfQVVUSF9JU1NVRVIgYXMgc3RyaW5nLFxyXG4gICAgXCIvLndlbGwta25vd24vb3BlbmlkLWNvbmZpZ3VyYXRpb25cIlxyXG4gICksXHJcblxyXG4gIC8vIFdlIHJlcXVlc3Qgb2ZmbGluZV9hY2Nlc3MgYW5kIGNvbnNlbnQgcHJvbXB0IGJlY2F1c2Ugd2UgbmVlZCB0byBnZXQgYSByZWZyZXNoIHRva2VuXHJcbiAgYXV0aG9yaXphdGlvbjoge1xyXG4gICAgcGFyYW1zOiB7IHNjb3BlOiBcIm9wZW5pZCBlbWFpbCBwcm9maWxlIG9mZmxpbmVfYWNjZXNzXCIsIHByb21wdDogXCJjb25zZW50XCIgfSxcclxuICB9LFxyXG5cclxuICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX0lELFxyXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQ0xJRU5UX1NFQ1JFVCxcclxuICBjaGVja3M6IFtcInBrY2VcIiwgXCJzdGF0ZVwiXSxcclxuICBpZFRva2VuOiB0cnVlLFxyXG4gIHByb2ZpbGUocHJvZmlsZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxyXG4gICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgIGVtYWlsOiBwcm9maWxlLmVtYWlsLFxyXG4gICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgaHR0cE9wdGlvbnM6IHtcclxuICAgIHRpbWVvdXQ6IDEwMDAwLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtOSUZUT1JZX0FVVEhfUFJPVklERVJdLFxyXG4gIGRlYnVnOiB0cnVlLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgLy8gU2VlIGFsc286IGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy90dXRvcmlhbHMvcmVmcmVzaC10b2tlbi1yb3RhdGlvblxyXG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciwgYWNjb3VudCB9KSA9PiB7XHJcbiAgICAgIC8vIHVzZXIgYW5kIGFjY291bnQgYXJlIG9ubHkgcGFzc2VkIGluIGF0IGluaXRhbCBzaWduIGluLlxyXG4gICAgICBpZiAoYWNjb3VudCAmJiB1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnRva2VuLFxyXG4gICAgICAgICAgYXV0aFRva2VuOiBhY2NvdW50Py5pZF90b2tlbixcclxuICAgICAgICAgIGF1dGhUb2tlbkV4cGlyZXNBdDogYWNjb3VudD8uZXhwaXJlc19hdCAqIDEwMDAsXHJcbiAgICAgICAgICByZWZyZXNoVG9rZW46IGFjY291bnQ/LnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvb2tpZXMoKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlRva2VuOlwiLHRva2VuKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyOlwiLHVzZXIpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQWNjb3VudDpcIixhY2NvdW50KVxyXG4gICAgICAvLyB0aGlzIGlzbid0IGluaXRpYWwgc2lnbi1pbiwgc28gbGV0J3Mgc2VlIGlmIHRoZSB0b2tlbiBpcyBzdGlsbCB2YWxpZFxyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgaWYgKERhdGUubm93KCkgPCB0b2tlbi5hdXRoVG9rZW5FeHBpcmVzQXQpIHtcclxuICAgICAgICAvLyB0b2tlbiBpcyBzdGlsbCB2YWxpZCwgbm8gbmVlZCB0byByZWZyZXNoIGl0XHJcbiAgICAgICAgcmV0dXJuIHRva2VuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIHdlIGdldCBoZXJlLCB0aGUgdG9rZW4gaXMgZXhwaXJlZCwgc28gd2UgbmVlZCB0byByZWZyZXNoIGl0XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaGVkID0gYXdhaXQgcmVmcmVzaEF1dGhUb2tlbih0b2tlbi5yZWZyZXNoVG9rZW4gYXMgc3RyaW5nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi50b2tlbixcclxuICAgICAgICAgIGF1dGhUb2tlbjogcmVmcmVzaGVkPy5pZF90b2tlbixcclxuICAgICAgICAgIGF1dGhUb2tlbkV4cGlyZXNBdDogcmVmcmVzaGVkPy5leHBpcmVzX2F0ICogMTAwMCxcclxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaGVkPy5yZWZyZXNoX3Rva2VuIHx8IHRva2VuPy5yZWZyZXNoX3Rva2VuLFxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgICAgICByZXR1cm4geyAuLi50b2tlbiwgZXJyb3I6IGUgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbjogYXN5bmMgKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xyXG4gICAgICAvL0B0cy1pZ25vcmVcclxuICAgICAgc2Vzc2lvbi51c2VyaWQgPSB0b2tlbi5zdWJcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHNlc3Npb24uY2xpZW50SWQgPSB0b2tlbi5hdWRcclxuICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgIHNlc3Npb24uYXV0aFRva2VuID0gdG9rZW4uYXV0aFRva2VuXHJcbiAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICBzZXNzaW9uLmVycm9yID0gdG9rZW4uZXJyb3JcclxuXHJcbiAgICAgIHJldHVybiBzZXNzaW9uXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsInVybGpvaW4iLCJyZWZyZXNoQXV0aFRva2VuIiwiTklGVE9SWV9BVVRIX1BST1ZJREVSIiwiaWQiLCJuYW1lIiwidHlwZSIsIndlbGxLbm93biIsInByb2Nlc3MiLCJlbnYiLCJOSUZUT1JZX0FVVEhfSVNTVUVSIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInNjb3BlIiwicHJvbXB0IiwiY2xpZW50SWQiLCJORVhUX1BVQkxJQ19DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJDTElFTlRfU0VDUkVUIiwiY2hlY2tzIiwiaWRUb2tlbiIsInByb2ZpbGUiLCJzdWIiLCJlbWFpbCIsImltYWdlIiwicGljdHVyZSIsImh0dHBPcHRpb25zIiwidGltZW91dCIsInByb3ZpZGVycyIsImRlYnVnIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiYWNjb3VudCIsImF1dGhUb2tlbiIsImlkX3Rva2VuIiwiYXV0aFRva2VuRXhwaXJlc0F0IiwiZXhwaXJlc19hdCIsInJlZnJlc2hUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsIm5vdyIsInJlZnJlc2hlZCIsImUiLCJlcnJvciIsInNlc3Npb24iLCJ1c2VyaWQiLCJhdWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();